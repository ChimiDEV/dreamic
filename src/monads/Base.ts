export type Functor<T> = {
  map<U>(fn: (x: T) => U): Functor<U>;
};
