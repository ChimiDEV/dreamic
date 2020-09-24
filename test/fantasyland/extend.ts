import { Extend } from '../../src/monads/_FantasyLand';
import { extendConcat, extendToString } from './_helper';

export const extendExists = (e: Extend<any>) =>
  expect(e).toHaveProperty('extend');

export const extendRule = (e: Extend<any>) =>
  expect(e.extend(extendToString).extend(extendConcat)).toEqual(
    e.extend(x => extendConcat(x.extend(extendToString))),
  );

export const isExtend = (extend: Extend<any>) => {
  it('should implement extend function', () => extendExists(extend));
  it('should follow extend rule', () => extendRule(extend));
};
