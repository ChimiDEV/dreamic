import chalk from 'chalk';
import { Value, inspect, inspectFn } from '../core/Value';
import { Functor, Applicative } from './_FantasyLand';

type EitherApplicative = Applicative & {
  of<L extends Error, R>(v: R): any;
};

export type Either<L extends Error, R> = Left<L, R> | Right<L, R>;

export enum EitherTypeEnum {
  Left = 'Either(Left)',
  Right = 'Either(Right)',
}

export const either: EitherApplicative = {
  of<L extends Error, R>(value: R): Either<L, R> {
    return new Right<L, R>(value) as Either<L, R>;
  },
};

export class Left<L extends Error, R> implements Value, Functor<R> {
  private $value: L;
  public $tag: string;
  public $type: string;

  constructor(value: L) {
    this.$value = value;
    this.$tag = 'Left';
    this.$type = 'Either(Left)';
  }

  map<U>(fn: (value: R) => U): Either<L, U> {
    return fLeft(this.$value) as Left<L, U>;
  }

  toString(): string {
    return chalk`{bold Either}.{underline.red Left}(${inspectFn(this.$value)})`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export class Right<L extends Error, R> implements Value, Functor<R> {
  private $value: R;
  public $tag: string;
  public $type: string;

  constructor(value: R) {
    this.$value = value;
    this.$tag = 'Right';
    this.$type = 'Either(Right)';
  }

  map<U>(fn: (value: R) => U): Either<L, U> {
    try {
      return either.of<L, U>(fn(this.$value));
    } catch (err) {
      return fLeft(err) as Left<L, U>;
    }
  }

  toString(): string {
    return chalk`{bold Either}.{underline.green Left}(${inspectFn(
      this.$value,
    )})`;
  }

  [inspect](): string {
    return this.toString();
  }
}

export const fLeft = <T extends Error>(err: T) =>
  new Left(err) as Either<T, unknown>;
export const fRight = <T>(value: T) => new Right(value) as Either<Error, T>;
export const fEither = <T>(value: T) => new Right(value) as Either<Error, T>;
