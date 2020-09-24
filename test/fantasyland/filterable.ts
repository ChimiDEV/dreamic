import { Filterable } from '../../src/monads/_FantasyLand';
import { isNumber, isGreater } from './_helper';

export const filterExists = (f: Filterable<any>) =>
  expect(f).toHaveProperty('filter');

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

export const isFilterable = (creator: any, filterable: Filterable<any>) => {
  it('should implement filter function', () => filterExists(filterable));
  it('should follow distributivity rule', () =>
    filterableDistributivity(filterable));
  it('should follow identity rule', () => filterIdentity(filterable));
  it('should follow annihilation rule', () =>
    filterAnnihilation(creator, filterable));
};
