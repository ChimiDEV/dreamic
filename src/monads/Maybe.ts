import _ from 'lodash/fp';
import chalk from 'chalk';
import { Value, inspect, inspectFn } from '../core/Value';
import { Functor } from './Base';

export type Maybe<T> = Just<T> | Nothing<T>;

export enum MaybeType {
  Just = 'Maybe(Just)',
  Nothing = 'Maybe(Nothing)',
}

export class MaybeStatic {
  static of<T>(value: T): Maybe<T> {
    return <Maybe<T>>new Just(value);
  }

  static empty<T>(): Maybe<T> {
    return <Nothing<T>>nothing();
  }
}

export class Just<T> implements Value, Functor<T> {
  private $value: T;
  public $tag: string;
  public $type: string;

  constructor(value: T) {
    this.$value = value;
    this.$tag = 'Just';
    this.$type = 'Maybe(Just)';
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    if (fn(this.$value) === undefined) {
      return nothing();
    }
    return MaybeStatic.of<U>(fn(this.$value));
  }

  toString(): string {
    return chalk`{bold Maybe}.{underline.magenta Just}(${inspectFn(
      this.$value
    )})`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export class Nothing<T> implements Value, Functor<T> {
  public $tag: string;
  public $type: string;
  constructor() {
    this.$tag = 'Nothing';
    this.$type = 'Maybe(Nothing)';
  }

  map<U>(fn: (value: T) => U): Maybe<U> {
    return <Nothing<U>>nothing();
  }

  toString(): string {
    return chalk`{bold Maybe}.{underline.yellow Nothing}()`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export const nothing = () => new Nothing<any>();
export const just = <T>(value: T) => MaybeStatic.of<T>(value);
export const maybe = <D, T, U>(
  defaultValue: D,
  fn: (value: T) => U,
  value: T
) =>
  value === undefined
    ? MaybeStatic.of<D>(defaultValue)
    : MaybeStatic.of<T>(value).map(fn);
