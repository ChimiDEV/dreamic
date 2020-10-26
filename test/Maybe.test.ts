import { Maybe, fMaybe, fJust, fNothing, maybe } from '../src/monads';
import {
  isFunctor,
  isApply,
  isChain,
  isApplicative,
  isMonoid,
  isExtend,
  isComonad,
  isSemigroup,
  isFilterable,
} from './fantasyland';
import { Just, Nothing } from '../src/monads/Maybe';

describe('Monads/Maybe', () => {
  describe('Fantasy-Land', () => {
    const just = fJust(12);
    const nothing = fNothing();
    const factoryMaybe = fMaybe(10, 13);
    const ofMaybe = maybe.of(99);

    describe('Functor', () => {
      describe('Factory: Just', () => isFunctor(just));
      describe('Factory: Nothing', () => isFunctor(nothing));
      describe('Factory: Maybe', () => isFunctor(factoryMaybe));
      describe('Maybe.of', () => isFunctor(ofMaybe));
    });

    describe('Apply', () => {
      describe('Factory: Just', () => isApply(fJust, just));
      describe('Factory: Nothing', () =>
        isApply(fNothing, (nothing as unknown) as Maybe<any>));
      describe('Factory: Maybe', () =>
        isApply((v: any) => fMaybe('ignored', v), factoryMaybe));
      describe('Maybe.of', () => isApply(maybe.of, ofMaybe));
    });

    describe('Chain', () => {
      describe('Factory: Just', () => isChain(fJust, just));
      describe('Factory: Nothing', () =>
        isChain(fNothing, (nothing as unknown) as Maybe<any>));
      describe('Factory: Maybe', () =>
        isChain((v: any) => fMaybe('ignored', v), factoryMaybe));
      describe('Maybe.of', () => isChain(maybe.of, ofMaybe));
    });

    describe('Extend', () => {
      describe('Factory: Just', () => isExtend(just));
      describe('Factory: Nothing', () => isExtend(nothing));
      describe('Factory: Maybe', () => isExtend(factoryMaybe));
      describe('Maybe.of', () => isExtend(ofMaybe));
    });

    describe('Comonad', () => {
      describe('Factory: Just', () => isComonad(just));
      describe('Factory: Nothing', () => isComonad(nothing));
      describe('Factory: Maybe', () => isComonad(factoryMaybe));
      describe('Maybe.of', () => isComonad(ofMaybe));
    });

    describe('Semigroup', () => {
      describe('Factory: Just', () => isSemigroup(fJust, just));
      describe('Factory: Nothing', () =>
        isSemigroup(fNothing, (nothing as unknown) as Maybe<any>));
      describe('Factory: Maybe', () =>
        isSemigroup((v: any) => fMaybe('ignored', v), factoryMaybe));
      describe('Maybe.of', () => isSemigroup(maybe.of, ofMaybe));
    });

    describe('Filterable', () => {
      describe('Factory: Just', () => isFilterable(fJust, just));
      describe('Factory: Nothing', () =>
        isFilterable(fNothing, (nothing as unknown) as Maybe<any>));
      describe('Factory: Maybe', () =>
        isFilterable((v: any) => fMaybe('ignored', v), factoryMaybe));
      describe('Maybe.of', () => isFilterable(maybe.of, ofMaybe));
    });

    describe('Applicative', () => isApplicative(maybe, Just));
    describe('Monoid', () => isMonoid(maybe, maybe.of, Nothing));
  });

  describe('Maybe', () => {
    it('should successfully create Maybe from nullable', () => {
      expect(maybe.fromNullable(10)).toEqual(maybe.of(10));
      expect(maybe.fromNullable(undefined)).toEqual(maybe.empty());
    });

    it('should successfully create Maybe with default', () => {
      expect(maybe.withDefault(10, 15)).toEqual(maybe.of(15));
      expect(maybe.withDefault(10, undefined)).toEqual(maybe.of(10));
    });

    it('should successfully encase throwing function', () => {
      const notThrowing = () => 255;
      const throwing = () => {
        throw new Error('DUMMY');
      };

      expect(maybe.encase(notThrowing)).toEqual(maybe.of(255));
      expect(maybe.encase(throwing)).toEqual(maybe.empty());
    });

    it('should get value, since maybe is not empty', () => {
      const m = maybe.of(15);
      expect(m.getOr<number>(20)).toEqual(15);
    });

    it('should get default value, since maybe is empty', () => {
      const m = maybe.empty();
      expect(m.getOr<number>(20)).toEqual(20);
    });
  });
});
