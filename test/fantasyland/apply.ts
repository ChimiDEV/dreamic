import { Apply } from '../../src/monads/_FantasyLand';
import { toString, concatTest } from './_helper';

export const apExists = (a: Apply<any>) => expect(a).toHaveProperty('ap');

export const apComposition = (creator: any, apply: Apply<any>) => {
  const u: Apply<(x: any) => string> = creator(toString);
  const a: Apply<(x: string) => string> = creator(concatTest);
  // @ts-ignore Type interference is just not good enough for this "mystical" definition. Sometimes TS sucks
  expect(apply.ap(u.ap(a.map(f => g => x => f(g(x)))))).toEqual(
    apply.ap(u).ap(a),
  );
};

export const isApply = (creator: any, apply: Apply<any>) => {
  it('should implement ap function', () => apExists(apply));
  it('should follow composition rule', () => apComposition(creator, apply));
};
