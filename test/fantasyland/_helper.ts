// Random test functions for compositions
export const isNumber = (x: any) => typeof x === 'number';
export const isGreater = (g: number) => (x: number) => x > g;
export const toString = (x: any): string =>
  x !== undefined ? x.toString() : undefined;
export const concatTest = (x: string) => `${x} - Test`;
export const extendToString = (x: any) => toString(x.extract());
export const extendConcat = (x: any) => concatTest(x.extract());

export const classInstance = (x: any) => x.constructor.name;
