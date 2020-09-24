import _ from 'lodash/fp';
import chalk from 'chalk';
import { Value, inspect, inspectFn } from '../core/Value';
import { Applicative, Monoid, Monad } from './_FantasyLand';
import { MonadTag, MonadType } from './_Monads';

export type Maybe<T> = Just<T> | Nothing<T>;

export interface MaybeStatic extends Applicative, Monoid {
  of<T>(value: T): Maybe<T>;
  empty(): Maybe<never>;
}

export const maybe: MaybeStatic = {
  of: <T>(value: T): Maybe<T> => new Just(value),
  empty: (): Maybe<never> => fNothing(),
};

export class Just<T> implements Value, Monad<T> {
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

  extend<U>(fn: (value: Maybe<T>) => U): Maybe<U> {
    const extended = fn(this);
    if (extended === undefined) {
      return fNothing();
    }

    return maybe.of<U>(extended);
  }

  // Comonad
  extract(): T {
    return this.$value;
  }

  // Filterable

  toString(): string {
    return chalk`{bold Maybe}.{underline.magenta Just}(${inspectFn(
      this.$value
    )})`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export class Nothing<T> implements Value, Monad<T> {
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
    return fNothing() as Nothing<U>;
  }

  ap<U>(a: Maybe<(value: T) => U>): Maybe<U> {
    return fNothing() as Nothing<U>;
  }

  chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    return fNothing() as Nothing<U>;
  }

  toString(): string {
    return chalk`{bold Maybe}.{underline.yellow Nothing}()`;
  }

  extract(): T {
    return (undefined as unknown) as T;
  }

  [inspect](): string {
    return this.toString();
  }
}

export const fNothing = (): Maybe<never> => new Nothing<never>();
export const fJust = <T>(value: T): Maybe<T> => maybe.of<T>(value);
export const fMaybe = <T>(defaultValue: T, value: T): Maybe<T> =>
  maybe.of<T>(_.isUndefined(value) ? defaultValue : value);
