import {
  Functor,
  Apply,
  Chain,
  Applicative,
  Monoid,
  Extend,
  Comonad,
  Semigroup,
  Filterable,
} from '../src/monads/_FantasyLand';

// Random test functions for compositions
const isNumber = (x: any) => typeof x === 'number';
const isGreater = (g: number) => (x: number) => x > g;
const toString = (x: any): string =>
  x !== undefined ? x.toString() : undefined;
const concatTest = (x: string) => `${x} - Test`;
const extendToString = (x: any) => toString(x.extract());
const extendConcat = (x: any) => concatTest(x.extract());

// Helper
const classInstance = (x: any) => x.constructor.name;

export const mapExists = (f: Functor<any>) => expect(f).toHaveProperty('map');
export const apExists = (a: Apply<any>) => expect(a).toHaveProperty('ap');
export const chainExists = (c: Chain<any>) => expect(c).toHaveProperty('chain');
export const extendExists = (e: Extend<any>) =>
  expect(e).toHaveProperty('extend');
export const extractExists = (c: Comonad<any>) =>
  expect(c).toHaveProperty('extract');
export const ofExists = (a: Applicative) => expect(a).toHaveProperty('of');
export const emptyExists = (a: Monoid) => expect(a).toHaveProperty('empty');
export const concatExists = (s: Semigroup<any>) =>
  expect(s).toHaveProperty('concat');
export const filterExists = (f: Filterable<any>) =>
  expect(f).toHaveProperty('filter');
export const constructorExists = (method: string) => (x: any) =>
  expect(x[method]('testValue')).toHaveProperty('constructor');

export const mapIdentity = (f: Functor<any>) =>
  expect(f.map((x: any) => x)).toEqual(f);

export const mapComposition = (f: Functor<any>) =>
  expect(f.map((x: any) => concatTest(toString(x)))).toEqual(
    f.map(toString).map(concatTest),
  );

export const apComposition = (creator: any, apply: Apply<any>) => {
  const u: Apply<(x: any) => string> = creator(toString);
  const a: Apply<(x: string) => string> = creator(concatTest);
  // @ts-ignore Type interference is just not good enough for this "mystical" definition. Sometimes TS sucks
  expect(apply.ap(u.ap(a.map(f => g => x => f(g(x)))))).toEqual(
    apply.ap(u).ap(a),
  );
};

export const chainAssociativity = (creator: any, c: Chain<any>) => {
  const chainedConcat = (append: string) => (str: string): Chain<string> =>
    append.length > 0 ? creator(`${str} ${append}`) : creator(str);

  expect(c.chain(chainedConcat('Append')).chain(chainedConcat('Me'))).toEqual(
    c.chain((x: any) => chainedConcat('Append')(x).chain(chainedConcat('Me'))),
  );
};

export const extendRule = (e: Extend<any>) =>
  expect(e.extend(extendToString).extend(extendConcat)).toEqual(
    e.extend(x => extendConcat(x.extend(extendToString))),
  );

export const comonadLeftIdentity = (c: Comonad<any>) =>
  expect(c.extend(x => (x as Comonad<any>).extract())).toEqual(c);

export const comonadRightIdentity = (c: Comonad<any>) =>
  expect((c.extend(extendToString) as Comonad<any>).extract()).toEqual(
    extendToString(c),
  );

export const semigroupAssociativity = (creator: any, s: Semigroup<any>) => {
  const semigroupB = creator(10);
  const semigroupC = creator(13);
  expect(s.concat(semigroupB).concat(semigroupC)).toEqual(
    s.concat(semigroupB.concat(semigroupC)),
  );
};

export const filterableDistributivity = (f: Filterable<any>) =>
  expect(f.filter(x => isNumber(x) && isGreater(10)(x))).toEqual(
    f.filter(isNumber).filter(isGreater(10)),
  );

export const filterIdentity = (f: Filterable<any>) =>
  expect(f.filter(x => true)).toEqual(f);

export const filterAnnihilation = (creator: any, f: Filterable<any>) =>
  expect(f.filter(x => false)).toEqual(
    creator('Test value').filter(() => false),
  );

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
  classConstructor: any,
) => {
  it('should implement of function', () => ofExists(staticSpace));
  it('should implement constructor function', () =>
    constructorExists('of')(staticSpace));
  it('should return same instance type as constructor', () =>
    ofEqualsConstructor(staticSpace, classConstructor));
};

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

export const isExtend = (extend: Extend<any>) => {
  it('should implement extend function', () => extendExists(extend));
  it('should follow extend rule', () => extendRule(extend));
};

export const isComonad = (comonad: Comonad<any>) => {
  it('should implement extract function', () => extractExists(comonad));
  it('should follow left identity rule', () => comonadLeftIdentity(comonad));
  it('should follow right identity rule', () => comonadRightIdentity(comonad));
};

export const isSemigroup = (creator: any, semigroup: Semigroup<any>) => {
  it('should implement concat function', () => concatExists(semigroup));
  it('should follow associativity rule', () =>
    semigroupAssociativity(creator, semigroup));
};

export const isFilterable = (creator: any, filterable: Filterable<any>) => {
  it('should implement filter function', () => filterExists(filterable));
  it('should follow distributivity rule', () =>
    filterableDistributivity(filterable));
  it('should follow identity rule', () => filterIdentity(filterable));
  it('should follow annihilation rule', () =>
    filterAnnihilation(creator, filterable));
};
