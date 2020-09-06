import util from 'util';

export const inspect = Symbol.for('nodejs.util.inspect.custom');
export const inspectFn = (x: any): string => util.inspect(x, false, null, true);

export interface Value {
  toString(): string;
  [inspect](): string;
}
