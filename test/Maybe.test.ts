import { Maybe, fMaybe, fJust, fNothing, maybe } from '../src/monads';
import { isFunctor, isApply, isApplicative, isMonoid } from './fantasy-land';
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

    describe('Applicative', () => isApplicative(maybe, Just));
    describe('Monoid', () => isMonoid(maybe, Nothing));
  });
});
