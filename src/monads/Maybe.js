/**
 * This is the implementation of a Maybe monad. It either contains a value or {@link Types.Nothing|Nothing}.
 * It is compliant with the {@link https://github.com/fantasyland/fantasy-land|Fantasy-Land} specification and conforms following types:
 * - {@link https://github.com/fantasyland/fantasy-land#setoid|Setoid}
 * - {@link https://github.com/fantasyland/fantasy-land#Filterable|Filterable}
 * - {@link https://github.com/fantasyland/fantasy-land#Functor|Functor}
 * - {@link https://github.com/fantasyland/fantasy-land#Apply|Apply}
 * - {@link https://github.com/fantasyland/fantasy-land#Applicative|Applicative}
 * - {@link https://github.com/fantasyland/fantasy-land#Chain|Chain}
 *
 * @class Maybe
 *
 * @example
 * import { Maybe } from '@chimidev/dreamic';
 *
 * Maybe.of(10);
 * // Maybe(10)
 */

/**
 * @template T Type of the `Maybe` value
 */
class Maybe {
  /**
   * Usually you wouldn't use the constructor directly. Instead refer to `Maybe.of` or `Maybe.empty`.
   * @private
   * @param {*} value
   * @param {'Just'|'Nothing'} tag
   */
  constructor(value, tag) {
    this.$value = value;
    this.$tag = tag;
  }

  /**
   *
   * @memberof Maybe
   * @function
   * @name of
   *
   * @template T Type of the value
   * @param {T} value
   * @returns {Maybe<T>}
   */
  static of(value) {
    return new Maybe(value, 'Just');
  }

  /**
   *
   * @memberof Maybe
   * @function
   * @name empty
   *
   * @template T Type of the value
   * @param {T} value
   * @returns {Maybe<Nothing>}
   */
  static empty() {
    return new Maybe(undefined, 'Nothing');
  }
}

export default Maybe;
