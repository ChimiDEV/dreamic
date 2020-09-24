import { Applicative } from '../../src/monads/_FantasyLand';
import { classInstance } from './_helper';

export const ofExists = (a: Applicative) => expect(a).toHaveProperty('of');
export const constructorExists = (method: string) => (x: any) =>
  expect(x[method]('testValue')).toHaveProperty('constructor');

export const ofEqualsConstructor = (
  staticSpace: Applicative,
  classConstructor: any,
) => {
  const applicative: any = staticSpace.of(10);
  expect(classInstance(staticSpace.of(10))).toEqual(
    classInstance(new classConstructor(10)),
  );

  expect(classInstance(new applicative.constructor(15))).toEqual(
    classInstance(new classConstructor(15)),
  );
};

export const isApplicative = (
  staticSpace: Applicative,
  classConstructor: any,
) => {
  it('should implement of function', () => ofExists(staticSpace));
  it('should implement constructor function', () =>
    constructorExists('of')(staticSpace));
  it('should return same instance type as constructor', () =>
    ofEqualsConstructor(staticSpace, classConstructor));
};
