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
  /**
   * Used to create a Maybe with `Just` the given value.
   * Works like `fJust()`.
   *
   * **Type Annotation**\
   * `of:: a -> Maybe a`
   *
   * @param value Value that is put into the Maybe Monad
   * @template T Type of the Maybe Value
   *
   * @category Applicative
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landof-method|fantasy-land/of}
   */
  of<T>(value: T): Maybe<T>;

  /**
   * Used to create an empty Maybe. Will contain `Nothing`.
   * Works like `fNothing()`.
   *
   * **Type Annotation**\
   * `empty:: () -> Maybe a`
   *
   * @category Monoid
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landempty-method|fantasy-land/empty}
   */
  empty(): Maybe<never>;
}

export const maybe: MaybeStatic = {
  of: <T>(value: T): Maybe<T> => new Just(value),
  empty: (): Maybe<never> => fNothing(),
};

/**
 * `Just` is a Maybe containing a value.
 * Methods simply work as excepted, however it may change to a `Nothing`, when the value of a operation equals `undefined`.
 *
 * @template T Type of the Maybe Value
 */
export class Just<T>
  implements Value, Monad<T>, Comonad<T>, Semigroup<T>, Filterable<T> {
  private $value: T;
  public $tag: MonadTag;
  public $type: MonadType;

  /**
   * Usually you wouldn't call the constructor directly.
   * Refer to the factory methods or other available creation methods.
   *
   * @private
   *
   * @param value Value that is put into the Maybe Monad
   * @template T Type of the Maybe Value
   */
  constructor(value: T) {
    this.$value = value;
    this.$tag = MonadTag.Just;
    this.$type = MonadType.Just;
  }

  /**
   * Checks if a `Maybe` contains `Nothing`.
   *
   * **Type Annotation**\
   * `isNothing:: () -> boolean`
   */
  isNothing(): boolean {
    return false;
  }

  /**
   * Checks if a `Maybe` contains `Just` a value.
   *
   * **Type Annotation**\
   * `isJust:: () -> boolean`
   */
  isJust(): boolean {
    return true;
  }

  /**
   * This method applies a given function to the `Maybe`'s value.
   * If the value is nothing, the function will not be invoked.\
   * Returns a new `Maybe` Instance with the result of `fn(maybeValue)` or Maybe.Nothing.
   *
   * Following rules are imposed by fantasy-land:
   * - `fn` has to be a function. If `fn` is not an function, the method's behavior is **unspecified**.
   * - `fn` can return any value.
   *
   * **Type Annotation**\
   * `map:: Maybe a ~> (a -> b) -> Maybe b`
   *
   * @category Functor
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landmap-method|fantasy-land/map}
   */
  map<U>(fn: (value: T) => U): Maybe<U> {
    if (fn(this.$value) === undefined) {
      return fNothing();
    }
    return maybe.of<U>(fn(this.$value));
  }

  /**
   * Applies the function containing in the given `Maybe` to the value of the used `Maybe`, returning a `Maybe` of the result.\
   * If either of the arguments are `Nothing`, the result will be `Nothing`.
   *
   * Following rules are imposed by fantasy-land:
   * - If the given `Maybe` does not contain any function, the behavior is **unspecified**.
   * - The `Apply` parameter must be of the same type as the Monad, i.e. in this case a `Maybe`.
   * - The resulting Monad of `ap` must be of the same type, i.e. in this case a `Maybe`.
   *
   * **Type Annotation**\
   * `ap:: Maybe (a -> b) ~> Maybe a -> Maybe b`
   *
   * @category Apply
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landap-method|fantasy-land/ap}
   */
  ap<U>(a: Maybe<(value: T) => U>): Maybe<U> {
    const applied = this.map(a.extract());
    if (applied.isNothing()) {
      return fNothing();
    }
    return applied;
  }

  /**
   * The chain method is the combination of `Maybe#map` and `Maybe#extract`.\
   *
   * Following rules are imposed by fantasy-land:
   * - `fn` has to be a function. If `fn` is not an function, the method's behavior is **unspecified**.
   * - `fn` has to return the same type as the `Chain`, i.e. in this case `Maybe`.
   *
   * **Type Annotation**\
   * `chain:: Maybe a ~> (a -> Maybe b) -> Maybe b`
   *
   * @category Chain
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landchain-method|fantasy-land/chain}
   */
  chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    const chained = fn(this.$value);
    if (chained.isNothing()) {
      return fNothing();
    }
    return chained;
  }

  /**
   * Takes a predicate function and returns a `Maybe` with either the value (if the predicate returns true) or `Nothing`.
   *
   * Following rules are imposed by fantasy-land:
   * - `predicate` has to be a function. If `predicate` is not an function, the method's behavior is **unspecified**.
   * - `predicate` must either return true or false otherwise the behavior is **unspecified**.
   *
   * **Type Annotation**\
   * `filter:: Maybe a ~> (a -> Boolean) -> Maybe a`
   *
   * @category Filterable
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landfilter-method|fantasy-land/filter}
   */
  filter(predicate: (value: T) => boolean): Maybe<T> {
    if (!predicate(this.$value)) {
      return fNothing();
    }

    return this;
  }

  /**
   *
   * Accepts a `Maybe` and concat it with given `Maybe`.
   * Concatenation depends on the inherent type:
   * - *number*: Addition is invoked
   * - *object*: Objects are merged together (existing values are overwritten by incoming `Maybe`)
   * - *string*: Strings are simply chained together
   *
   * Every other type will result in a `Nothing` since there is no way to concat those values.
   *
   * **Type Annotation**
   * `concat:: Maybe a ~> Maybe a -> Maybe a`
   *
   * @category Extend
   * @see {@link https://github.com/fantasyland/fantasy-land#extend|fantasy-land/extend}
   */
  concat(maybe: Maybe<T>): Maybe<T> {
    if (maybe.isNothing()) {
      return this;
    }

    const value = maybe.extract();
    if (_.isPlainObject(this.$value) && _.isPlainObject(value)) {
      return fJust({ ...this.$value, ...value });
    }

    if (_.isString(this.$value) && _.isString(value)) {
      return (fJust(this.$value.concat(value)) as unknown) as Maybe<T>;
    }

    if (_.isNumber(this.$value) && _.isNumber(value)) {
      return (fJust(this.$value + value) as unknown) as Maybe<T>;
    }

    return fNothing();
  }

  /**
   *
   * Given function will be invoked with `this` Maybe.
   * Think of a reversed `chain`.
   *
   * **Type Annotation**
   * `extend:: Maybe a ~> (Maybe a -> b) -> Maybe b`
   *
   * @category Extend
   * @see {@link https://github.com/fantasyland/fantasy-land#extend|fantasy-land/extend}
   */
  extend<U>(fn: (value: Maybe<T>) => U): Maybe<U> {
    const extended = fn(this);
    if (extended === undefined) {
      return fNothing();
    }

    return maybe.of<U>(extended);
  }

  /**
   * Used to retrieve the value of the `Maybe` container.
   *
   * **Type Annotation**\
   * `join:: Maybe a ~> () -> a`
   *
   * @category Comonad
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landextract-method|fantasy-land/extract}
   */
  extract(): T {
    return this.$value;
  }

  /**
   * Cast the Monad to its string representation.\
   * Only reason to use this would be while debugging an application.
   *
   * **Type Annotation**\
   * `toString:: Maybe a ~> () -> b`
   */
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

  /**
   * Checks if a Maybe contains `Nothing`.
   *
   * **Type Annotation**\
   * `isNothing:: () -> boolean`
   */
  isNothing(): boolean {
    return true;
  }

  /**
   * Checks if a Maybe contains `Just` a value.
   *
   * **Type Annotation**\
   * `isJust:: () -> boolean`
   */
  isJust(): boolean {
    return false;
  }

  /**
   * This method applies a given function to the `Maybe`'s value.
   * If the value is nothing, the function will not be invoked.\
   * Returns a new `Maybe` Instance with the result of `fn(maybeValue)` or Maybe.Nothing.
   *
   * Following rules are imposed by fantasy-land:
   * - `fn` has to be a function. If `fn` is not an function, the method's behavior is **unspecified**.
   * - `fn` can return any value.
   *
   * **Type Annotation**\
   * `map:: Maybe a ~> (a -> b) -> Maybe b`
   *
   * @category Functor
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landmap-method|fantasy-land/map}
   */
  map<U>(fn: (value: T) => U): Maybe<U> {
    return fNothing();
  }

  /**
   * Applies the function containing in the given `Maybe` to the value of the used `Maybe`, returning a `Maybe` of the result.\
   * If either of the arguments are `Nothing`, the result will be `Nothing`.
   *
   * Following rules are imposed by fantasy-land:
   * - If the given `Maybe` does not contain any function, the behavior is **unspecified**.
   * - The `Apply` parameter must be of the same type as the Monad, i.e. in this case a `Maybe`.
   * - The resulting Monad of `ap` must be of the same type, i.e. in this case a `Maybe`.
   *
   * **Type Annotation**\
   * `ap:: Maybe (a -> b) ~> Maybe a -> Maybe b`
   *
   * @category Apply
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landap-method|fantasy-land/ap}
   */
  ap<U>(a: Maybe<(value: T) => U>): Maybe<U> {
    return fNothing();
  }

  /**
   * The chain method is the combination of `Maybe#map` and `Maybe#extract`.\
   *
   * Following rules are imposed by fantasy-land:
   * - `fn` has to be a function. If `fn` is not an function, the method's behavior is **unspecified**.
   * - `fn` has to return the same type as the `Chain`, i.e. in this case `Maybe`.
   *
   * **Type Annotation**\
   * `chain:: Maybe a ~> (a -> Maybe b) -> Maybe b`
   *
   * @category Chain
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landchain-method|fantasy-land/chain}
   */
  chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    return fNothing();
  }

  /**
   * Takes a predicate function and returns a `Maybe` with either the value (if the predicate returns true) or `Nothing`.
   *
   * Following rules are imposed by fantasy-land:
   * - `predicate` has to be a function. If `predicate` is not an function, the method's behavior is **unspecified**.
   * - `predicate` must either return true or false otherwise the behavior is **unspecified**.
   *
   * **Type Annotation**\
   * `filter:: Maybe a ~> (a -> Boolean) -> Maybe a`
   *
   * @category Filterable
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landfilter-method|fantasy-land/filter}
   */
  filter(predicate: (value: T) => boolean): Maybe<T> {
    return fNothing();
  }

  /**
   *
   * Accepts a `Maybe` and concat it with given `Maybe`.
   * Concatenation depends on the inherent type:
   * - *number*: Addition is invoked
   * - *object*: Objects are merged together (existing values are overwritten by incoming `Maybe`)
   * - *string*: Strings are simply chained together
   *
   * Every other type will result in a `Nothing` since there is no way to concat those values.
   * If you concat a `Nothing` with an another Maybe that is not empty, you'll receive just the given `Maybe`.
   *
   * **Type Annotation**
   * `concat:: Maybe a ~> Maybe a -> Maybe a`
   *
   * @category Extend
   * @see {@link https://github.com/fantasyland/fantasy-land#extend|fantasy-land/extend}
   */
  concat(maybe: Maybe<T>): Maybe<T> {
    // Just like 0 + 1 === 1.
    return maybe.isNothing() ? fNothing() : maybe;
  }

  /**
   * Given function will be invoked with `this` Maybe.
   * Think of a reversed `chain`.
   *
   * **Type Annotation**
   * `extend:: Maybe a ~> (Maybe a -> b) -> Maybe b`
   *
   * @category Extend
   * @see {@link https://github.com/fantasyland/fantasy-land#extend|fantasy-land/extend}
   */
  extend<U>(fn: (value: Maybe<T>) => U): Maybe<U> {
    return fNothing();
  }

  /**
   * Used to retrieve the value of the `Maybe` container.
   *
   * **Type Annotation**\
   * `join:: Maybe a ~> () -> b`
   *
   * @category Comonad
   * @see {@link https://github.com/fantasyland/fantasy-land#fantasy-landextract-method|fantasy-land/extract}
   */
  extract(): T {
    return (undefined as unknown) as T;
  }

  /**
   * Cast the Monad to a string representation.\
   * Only reason to use this  would be while debugging an application.
   *
   * **Type Annotation**\
   * `toString:: Maybe a ~> () -> a`
   */
  toString(): string {
    return chalk`{bold Maybe}.{underline.yellow Nothing}()`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export const fNothing = (): Maybe<never> => maybe.empty();
export const fJust = <T>(value: T): Maybe<T> => maybe.of<T>(value);
export const fMaybe = <T>(defaultValue: T, value: T): Maybe<T> =>
  maybe.of<T>(_.isUndefined(value) ? defaultValue : value);
