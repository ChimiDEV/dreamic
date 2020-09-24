import { Functor } from '../../src/monads/_FantasyLand';
import { toString, concatTest } from './_helper';

export const mapExists = (f: Functor<any>) => expect(f).toHaveProperty('map');
export const mapIdentity = (f: Functor<any>) =>
  expect(f.map((x: any) => x)).toEqual(f);
export const mapComposition = (f: Functor<any>) =>
  expect(f.map((x: any) => concatTest(toString(x)))).toEqual(
    f.map(toString).map(concatTest),
  );

export const isFunctor = (functor: Functor<any>) => {
  it('should implement map function', () => mapExists(functor));
  it('should follow identity rule', () => mapIdentity(functor));
  it('should follow composition rule', () => mapComposition(functor));
};
