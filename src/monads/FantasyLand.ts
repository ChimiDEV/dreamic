export type Functor<T> = {
  map<U>(fn: (v: T) => U): Functor<U>;
};

export type Apply<T> = Functor<T> & {
  ap<U>(a: Apply<(v: T) => U>): Apply<U>;
};

export type Chain<T> = Apply<T> & {
  chain<U>(fn: (v: T) => Chain<U>): Chain<U>;
};
