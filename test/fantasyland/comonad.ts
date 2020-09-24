import { Comonad } from '../../src/monads/_FantasyLand';
import { extendToString } from './_helper';

export const extractExists = (c: Comonad<any>) =>
  expect(c).toHaveProperty('extract');

export const comonadLeftIdentity = (c: Comonad<any>) =>
  expect(c.extend(x => (x as Comonad<any>).extract())).toEqual(c);

export const comonadRightIdentity = (c: Comonad<any>) =>
  expect((c.extend(extendToString) as Comonad<any>).extract()).toEqual(
    extendToString(c),
  );

export const isComonad = (comonad: Comonad<any>) => {
  it('should implement extract function', () => extractExists(comonad));
  it('should follow left identity rule', () => comonadLeftIdentity(comonad));
  it('should follow right identity rule', () => comonadRightIdentity(comonad));
};
