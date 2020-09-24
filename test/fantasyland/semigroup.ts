import { Semigroup } from '../../src/monads/_FantasyLand';

export const concatExists = (s: Semigroup<any>) =>
  expect(s).toHaveProperty('concat');

export const semigroupAssociativity = (creator: any, s: Semigroup<any>) => {
  const semigroupB = creator(10);
  const semigroupC = creator(13);
  expect(s.concat(semigroupB).concat(semigroupC)).toEqual(
    s.concat(semigroupB.concat(semigroupC)),
  );
};
export const isSemigroup = (creator: any, semigroup: Semigroup<any>) => {
  it('should implement concat function', () => concatExists(semigroup));
  it('should follow associativity rule', () =>
    semigroupAssociativity(creator, semigroup));
};
