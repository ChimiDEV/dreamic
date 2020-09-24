import { Monoid } from '../../src/monads/_FantasyLand';
import { classInstance } from './_helper';

export const emptyExists = (a: Monoid) => expect(a).toHaveProperty('empty');
export const constructorExists = (method: string) => (x: any) =>
  expect(x[method]('testValue')).toHaveProperty('constructor');

export const emptyEqualsConstructor = (
  staticSpace: Monoid,
  emptyConstructor: any,
) => {
  const applicative: any = staticSpace.empty();
  expect(classInstance(staticSpace.empty())).toEqual(
    classInstance(new emptyConstructor()),
  );

  expect(classInstance(new applicative.constructor())).toEqual(
    classInstance(new emptyConstructor()),
  );
};

export const monoidLeftIdentity = (staticSpace: Monoid, m: any) =>
  expect(m.concat(staticSpace.empty())).toEqual(m);

export const monoidRightIdentity = (staticSpace: any, m: any) =>
  expect(staticSpace.empty().concat(m)).toEqual(m);

export const isMonoid = (
  staticSpace: Monoid,
  creator: any,
  emptyConstructor: any,
) => {
  it('should implement empty function', () => emptyExists(staticSpace));
  it('should implement constructor function', () =>
    constructorExists('empty')(staticSpace));
  it('should return same instance type as constructor', () =>
    emptyEqualsConstructor(staticSpace, emptyConstructor));

  const identityMonoid = creator(10);
  it('should follow left identity rule', () =>
    monoidLeftIdentity(staticSpace, identityMonoid));
  it('should follow right identity rule', () =>
    monoidRightIdentity(staticSpace, identityMonoid));
};
