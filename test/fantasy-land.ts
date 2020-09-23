import {
  Functor,
  Apply,
  Chain,
  Applicative,
  Monoid,
} from '../src/monads/FantasyLand';

// Random test functions for compositions
const toString = (x: any): string => x.toString();
const concatTest = (x: string) => `${x} - Test`;

// Helper
const classInstance = (x: any) => x.constructor.name;

export const mapExists = (f: Functor<any>) => expect(f).toHaveProperty('map');
export const apExists = (a: Apply<any>) => expect(a).toHaveProperty('ap');
export const chainExists = (c: Chain<any>) => expect(c).toHaveProperty('chain');
export const ofExists = (a: Applicative) => expect(a).toHaveProperty('of');
export const emptyExists = (a: Monoid) => expect(a).toHaveProperty('empty');
export const constructorExists = (method: string) => (x: any) =>
  expect(x[method]('testValue')).toHaveProperty('constructor');

export const mapIdentity = (f: Functor<any>) =>
  expect(f.map(x => x)).toEqual(f);

export const mapComposition = (f: Functor<any>) =>
  expect(f.map((x: any) => concatTest(toString(x)))).toEqual(
    f.map(toString).map(concatTest)
  );

export const apComposition = (creator: any, apply: Apply<any>) => {
  const u: Apply<(x: any) => string> = creator(toString);
  const a: Apply<(x: string) => string> = creator(concatTest);
  // @ts-ignore Type interference is just not good enough for this "mystical" definition. Sometimes TS sucks
  expect(apply.ap(u.ap(a.map(f => g => x => f(g(x)))))).toEqual(
    apply.ap(u).ap(a)
  );
};

export const chainAssociativity = (creator: any, c: Chain<any>) => {
  const chainedConcat = (append: string) => (str: string): Chain<string> =>
    append.length > 0 ? creator(`${str} ${append}`) : creator(str);

  expect(c.chain(chainedConcat('Append')).chain(chainedConcat('Me'))).toEqual(
    c.chain(x => chainedConcat('Append')(x).chain(chainedConcat('Me')))
  );
};

export const ofEqualsConstructor = (
  staticSpace: Applicative,
  classConstructor: any
) => {
  const applicative = staticSpace.of(10);
  expect(classInstance(staticSpace.of(10))).toEqual(
    classInstance(new classConstructor(10))
  );

  expect(classInstance(new applicative.constructor(15))).toEqual(
    classInstance(new classConstructor(15))
  );
};

export const emptyEqualsConstructor = (
  staticSpace: Monoid,
  emptyConstructor: any
) => {
  const applicative = staticSpace.empty();
  expect(classInstance(staticSpace.empty())).toEqual(
    classInstance(new emptyConstructor())
  );

  expect(classInstance(new applicative.constructor())).toEqual(
    classInstance(new emptyConstructor())
  );
};

export const isFunctor = (functor: Functor<any>) => {
  it('should implement map function', () => mapExists(functor));
  it('should follow identity rule', () => mapIdentity(functor));
  it('should follow composition rule', () => mapComposition(functor));
};

export const isApply = (creator: any, apply: Apply<any>) => {
  it('should implement ap function', () => apExists(apply));
  it('should follow composition rule', () => apComposition(creator, apply));
};

export const isChain = (creator: any, chain: Chain<any>) => {
  it('should implement chain function', () => chainExists(chain));
  it('should follow associativity rule', () =>
    chainAssociativity(creator, chain));
};

export const isApplicative = (
  staticSpace: Applicative,
  classConstructor: any
) => {
  it('should implement of function', () => ofExists(staticSpace));
  it('should implement constructor function', () =>
    constructorExists('of')(staticSpace));
  it('should return same instance type as constructor', () =>
    ofEqualsConstructor(staticSpace, classConstructor));
};

export const isMonoid = (staticSpace: Monoid, emptyConstructor: any) => {
  it('should implement empty function', () => emptyExists(staticSpace));
  it('should implement constructor function', () =>
    constructorExists('empty')(staticSpace));
  it('should return same instance type as constructor', () =>
    emptyEqualsConstructor(staticSpace, emptyConstructor));
};
