export type Functor<T> = {
  map<U>(fn: (v: T) => U): Functor<U>;
};

export type Apply<T> = Functor<T> & {
  ap<U>(a: Apply<(v: T) => U>): Apply<U>;
};

export type Chain<T> = Apply<T> & {
  chain<U>(fn: (v: T) => Chain<U>): Chain<U>;
};

export type Monad<T> = Chain<T>; // Also should implement Applicative, but not able to represent via TS

export type Extend<T> = Functor<T> & {
  extend<U>(fn: (extend: Extend<T>) => U): Extend<U>;
};

export type Comonad<T> = Extend<T> & {
  extract(): T;
};

export type Semigroup<T> = {
  concat(semigroup: Semigroup<T>): Semigroup<T>;
};

export type Filterable<T> = {
  filter(predicate: (value: T) => boolean): Filterable<T>;
};

/*
 * Usually these types below would have to implement other types as well.
 * Since there are some limitations by TS, we cannot define static methods on a type together with its instance methods.
 *
 * Also those interfaces may have to be overwritten by the specific monad.
 */
export type Applicative = {
  of<T>(value: T): unknown;
};

export type Monoid = {
  empty(): unknown;
};
