import _ from 'lodash/fp';
import chalk from 'chalk';
import { Value, inspect, inspectFn } from '../core/Value';
import {
  Applicative,
  Monoid,
  Monad,
  Comonad,
  Semigroup,
  Filterable,
} from './_FantasyLand';
import { MonadTag, MonadType } from './_Monads';

/*
 * Maybe conforms following specifications:
 *
 * - Functor
 * - Apply
 * - Applicative
 * - Chain
 * - **Monad**
 * - Extend
 * - **Comonad**
 * - Semigroup
 * - **Monoid**
 * - **Filterable**
 */
export type Maybe<T> = Just<T> | Nothing<T>;

export interface MaybeStatic extends Applicative, Monoid {
  of<T>(value: T): Maybe<T>;
  empty(): Maybe<never>;
}

export const maybe: MaybeStatic = {
  of: <T>(value: T): Maybe<T> => new Just(value),
  empty: (): Maybe<never> => fNothing(),
};

export class Just<T>
  implements Value, Monad<T>, Comonad<T>, Semigroup<T>, Filterable<T> {
  private $value: T;
  public $tag: MonadTag;
  public $type: MonadType;

  constructor(value: T) {
    this.$value = value;
    this.$tag = MonadTag.Just;
    this.$type = MonadType.Just;
  }

  isNothing(): boolean {
    return false;
  }

  isJust(): boolean {
    return true;
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    if (fn(this.$value) === undefined) {
      return fNothing();
    }
    return maybe.of<U>(fn(this.$value));
  }

  ap<U>(a: Maybe<(value: T) => U>): Maybe<U> {
    const applied = this.map(a.extract());
    if (applied.isNothing()) {
      return fNothing();
    }
    return applied;
  }

  chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    const chained = fn(this.$value);
    if (chained.isNothing()) {
      return fNothing();
    }
    return chained;
  }

  filter(predicate: (value: T) => boolean): Maybe<T> {
    if (!predicate(this.$value)) {
      return fNothing();
    }

    return this;
  }

  concat(maybe: Maybe<T>): Maybe<T> {
    if (maybe.isNothing()) {
      return this;
    }

    const value = maybe.extract();
    if (_.isPlainObject(this.$value) && _.isPlainObject(value)) {
      return fJust({ ...value, ...this.$value });
    }

    if (_.isString(this.$value) && _.isString(value)) {
      return (fJust(this.$value.concat(value)) as unknown) as Maybe<T>;
    }

    if (_.isNumber(this.$value) && _.isNumber(value)) {
      return (fJust(this.$value + value) as unknown) as Maybe<T>;
    }

    return fNothing();
  }

  extend<U>(fn: (value: Maybe<T>) => U): Maybe<U> {
    const extended = fn(this);
    if (extended === undefined) {
      return fNothing();
    }

    return maybe.of<U>(extended);
  }

  extract(): T {
    return this.$value;
  }

  toString(): string {
    return chalk`{bold Maybe}.{underline.magenta Just}(${inspectFn(
      this.$value,
    )})`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export class Nothing<T>
  implements Value, Monad<T>, Comonad<T>, Semigroup<T>, Filterable<T> {
  public $tag: MonadTag;
  public $type: MonadType;

  constructor() {
    this.$tag = MonadTag.Nothing;
    this.$type = MonadType.Nothing;
  }

  isNothing(): boolean {
    return true;
  }

  isJust(): boolean {
    return false;
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return fNothing();
  }

  ap<U>(a: Maybe<(value: T) => U>): Maybe<U> {
    return fNothing();
  }

  chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    return fNothing();
  }

  filter(predicate: (value: T) => boolean): Maybe<T> {
    return fNothing();
  }

  concat(maybe: Maybe<T>): Maybe<T> {
    // If you concat a Maybe(Nothing) with an another Maybe that is not empty, you'll receive just the given Maybe.
    // Just like 0 + 1 === 1.
    return maybe.isNothing() ? fNothing() : maybe;
  }

  extend<U>(fn: (value: Maybe<T>) => U): Maybe<U> {
    return fNothing();
  }

  extract(): T {
    return (undefined as unknown) as T;
  }

  toString(): string {
    return chalk`{bold Maybe}.{underline.yellow Nothing}()`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export const fNothing = (): Maybe<never> => new Nothing<never>();
export const fJust = <T>(value: T): Maybe<T> => maybe.of<T>(value);
export const fMaybe = <T>(defaultValue: T, value: T): Maybe<T> =>
  maybe.of<T>(_.isUndefined(value) ? defaultValue : value);
