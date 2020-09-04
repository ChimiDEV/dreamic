import { Value } from '../core/Value';
import { Functor } from './Base';

export type Maybe<T> = Just<T> | Nothing<T>;

export class MaybeStatic {
  static of<T>(value: T): Maybe<T> {
    return <Maybe<T>>new Just(value);
  }

  static empty<T>(): Maybe<T> {
    return <Nothing<T>>nothing;
  }
}

export class Just<T> implements Value, Functor<T> {
  private $value: T;
  public $tag: string;

  constructor(value: T) {
    this.$value = value;
    this.$tag = 'Just';
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return MaybeStatic.of<U>(fn(this.$value));
  }
}

export class Nothing<T> implements Value, Functor<T> {
  public $tag: string;

  constructor() {
    this.$tag = 'Nothing';
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return <Nothing<U>>nothing;
  }
}
export const nothing = new Nothing<any>();
