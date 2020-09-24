import { Chain } from '../../src/monads/_FantasyLand';

export const chainExists = (c: Chain<any>) => expect(c).toHaveProperty('chain');

export const chainAssociativity = (creator: any, c: Chain<any>) => {
  const chainedConcat = (append: string) => (str: string): Chain<string> =>
    append.length > 0 ? creator(`${str} ${append}`) : creator(str);

  expect(c.chain(chainedConcat('Append')).chain(chainedConcat('Me'))).toEqual(
    c.chain((x: any) => chainedConcat('Append')(x).chain(chainedConcat('Me'))),
  );
};

export const isChain = (creator: any, chain: Chain<any>) => {
  it('should implement chain function', () => chainExists(chain));
  it('should follow associativity rule', () =>
    chainAssociativity(creator, chain));
};
