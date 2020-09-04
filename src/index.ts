import { Maybe } from './monads';

const m = Maybe.of('string');
const x = Maybe.empty();

console.log(m.map<number>((x) => 10));
console.log(x);
