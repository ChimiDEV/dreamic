# Maybe

monads.Maybe:class static
This is the implementation of a Maybe monad. It either contains a value or nothing.
It is compliant with the Fantasy-Land specification and conforms following types:

Setoid
Filterable
Functor
Apply
Applicative
Chain
Example

import { Maybe } from '@dzug/transit/monads':
new monads.Maybe(value) static constructor
Initializes a new instance of Maybe.

Parameters
value : T
Returns: Maybe<T>

monads.Maybe.\_callbacks static
monads.Maybe.\_callbacks.chainFn:function static
The function parameter of the Maybe#chain method.

Parameters
value : T
Returns: Maybe<U>

monads.Maybe.\_callbacks.mapFn:function static
The function parameter of the Maybe#map method.

Parameters
value : T
Returns: Maybe<U>

monads.Maybe#ap(functor)⇒Maybe
Applies the function contained in the first Maybe to the value of the second Maybe, returning a Maybe of the result.
If either of the arguments are nothing, the result will be nothing.

Following rules are imposed by Fantasy-Land:

If the first Maybe does not contain any function, the behaviour is unspecified.
The functor parameter must be of the same type as the Monad, i.e. in this case a Maybe.
The resulting Monad of ap must be of the same type, i.e. in this case a Maybe.
Type Annotation
ap:: Maybe (a -> b) ~> Maybe a -> Maybe b

See fantasy-land/ap

Parameters
functor : Maybe<T>
Returns: Maybe

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(double).ap(Maybe.of(20));
// Maybe(40)
monads.Maybe#chain(fn)⇒Maybe
The chain method is the combination of monads.Maybe#map and monads.Maybe#join.
This method has to return a value of the same type as the chain, in this case Maybe.

It takes one argument, which has to follow these rules:

fn has to be a function. If fn is not an function, the method's behaviour is unspecified.
fn has to return the same type as the chain, in this case Maybe.
Type Annotation
chain:: Maybe a ~> (a -> Maybe b) -> Maybe b

See fantasy-land/chain

Parameters
fn : monads.Maybe.\_callbacks.chainFn
Returns: Maybe

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of({ deep: { test: true } })
.chain(safeGet('deep'))
.chain(safeGet('test'));
// Maybe(true)
monads.Maybe.empty()⇒Maybe<undefined> static
Returns a Maybe containing nothing.

Type Annotation
empty:: Nothing a => () -> Maybe a

Returns: Maybe<undefined>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.empty();
monads.Maybe.encase(throwable)⇒Maybe static
Takes a throwing function and returns either a Maybe with nothing (if thrown) or just the value in a Maybe.

Type Annotation
encase:: (a -> b) -> Maybe b

Parameters
throwable : function
Function that may throw an error

Returns: Maybe

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.encase(() => {throw new Error('Failed')});
// Maybe(nothing)
Maybe.encase(() => 5);
// Maybe(5)
monads.Maybe#equals(maybe)⇒boolean
Returns true if the Maybe values are equal. Uses the strict equal operator (===) .
Be careful with objects.

Type Annotation
equals:: Maybe a ~> Maybe a -> Boolean

See fantasy-land/equals

Parameters
maybe : Maybe<T>
Returns: boolean

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(20).equals(Maybe.of(20));
// true
Maybe.of(20).equals(Maybe.of(21));
// false
monads.Maybe#filter(predicate)⇒Maybe<T>
Takes a predicate function and returns a Maybe with either the value (if the predicate returns true) or nothing.

Type Annotation
filter:: Maybe a ~> (a -> Boolean) -> Maybe a

See fantasy-land/filter

Parameters
predicate : function
Returns: Maybe<T>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(20).filter(x => x > 10);
// Maybe(20)
Maybe.of(20).filter(x => x < 10);
// Maybe(nothing)
monads.Maybe.filterJust(maybes)⇒Array static
Takes a list of Maybe and returns only the existing values.

Type Annotation
filterJust:: [Maybe a] -> [a]

Parameters
maybes : Array<Maybe>
Returns: Array

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.filterJust([Maybe.of(4), Maybe.of(10), Maybe.empty()]);
// [4, 10]
monads.Maybe.fromNullable(x)⇒Maybe<\*> static
Takes a optional value and returns it wrapped in a Maybe, i.e. if value does not exist, it will contain nothing

Type Annotation
fromNullable:: a -> Maybe a

Parameters
x : _
Returns: Maybe<_>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.fromNullable(null);
// Maybe(nothing)
Maybe.fromNullable(4);
// Maybe(4)
monads.Maybe#getOrElse(defaultValue)⇒T|DefaultType
Returns the value if it isn't nothing, otherwise will return the given default value.

Type Annotation
getOrElse:: Maybe a ~> a -> a

Parameters
defaultValue : DefaultType
Returns: T|DefaultType

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(Maybe.nothing).getOrElse('Default');
// 'Default'
monads.Maybe#ifJust(sideEffect)⇒Maybe<T>
Used to invoke a side effect, if the Maybe contains a value.
Returns the same instance as used.

Type Annotation
ifJust:: Maybe a ~> (a -> b) -> Maybe a

Parameters
sideEffect : function
Returns: Maybe<T>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(20).ifJust(x => console.log(x)); // Will log the value
// Maybe(20)
Maybe.empty().ifJust(x => console.log('Will not be invoked'));
// Maybe(20)
monads.Maybe#ifNothing(sideEffect)⇒Maybe<T>
Used to invoke a side effect, if the Maybe does not contain a value.
Returns the same instance as used.
Since the value is nothing the side effect is invoked without any parameters.

Type Annotation
ifNothing:: Maybe a ~> (a -> b) -> Maybe a

Parameters
sideEffect : function
Returns: Maybe<T>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(20).ifNothing(() => console.log('Will not be invoked'));
// Maybe(20)
Maybe.empty().ifNothing(() => console.log('Maybe is empty')); // Will be invoked
// Maybe(nothing)
monads.Maybe#isJust: readonly
Checks if the Maybe value is not nothing.

Type Annotation
isJust:: Boolean

Returns: Boolean

Example

import { Maybe } from '@dzug/transit/monads';
const maybe = Maybe.of(10);
maybe.isJust ? branchA() : branchB();
monads.Maybe#isNothing: readonly
Checks if the Maybe value is nothing.

Type Annotation
isNothing:: Boolean

Returns: Boolean

Example

import { Maybe } from '@dzug/transit/monads';
const maybe = Maybe.of(10);
maybe.isNothing ? branchA() : branchB();
monads.Maybe#join()⇒T
Used to retrieve the value of the Maybe container.

Type Annotation
join:: Maybe a ~> () -> b

Returns: T

Example

import { Maybe } from '@dzug/transit/monads';
const composition = Maybe.of({ deep: { test: 'abc' } })
.chain(safeGet('deep'))
.chain(safeGet('test'))
.join();
composition === 'abc'; // true
monads.Maybe#map(fn)⇒Maybe
This method applies a given function to the Maybe's value. If the value is nothing, the function will not be invoked.
Returns a new Maybe Instance with the result of fn(maybeValue) or Maybe.nothing.

The paramter fn has to follow this rules:

fn has to be a function. If fn is not an function, the method's behaviour is unspecified.
fn can return any value.
Type Annotation
map:: Maybe a ~> (a -> b) -> Maybe b

See fantasy-land/map

Parameters
fn : monads.Maybe.\_callbacks.mapFn
Returns: Maybe

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(10).map(double);
// Maybe(20)
monads.Maybe.nothing: static readonly
The nothing value used by this Monad. In this case it is undefined.

Type Annotation
nothing:: undefined

Returns: undefined

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.nothing;
monads.Maybe.of(value)⇒Maybe<T> static
This static method enables the instantiation of a Maybe monad without using the new keyword.

Type Annotation
of:: a -> Maybe a

See fantasy-land/of

Parameters
value : T
Returns: Maybe<T>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(10);
monads.Maybe#toEither(error)⇒Either<Error, T>
Casts a Maybe to an Either.
If the containing value of Maybe is nothing, will return a Left with provided error value. Otherwise it will return a Right with the value of the Maybe.

Type Annotation
toEither:: Maybe a ~> e -> Either e a

Parameters
error : Error
Returns: Either<Error, T>

Example

import { Maybe } from '@dzug/transit/monads';
Maybe.of(20).toEither(new Error('No value contained'));
// Either.Right(20)
Maybe.empty().toEither(new Error('No value contained'));
// Either.Left(Error('No value contained'))
monads.Maybe#toString()⇒string
Cast the Monad to string representation.
Only reason to use this would be while debugging an application.

Type Annotation
toString:: Maybe a ~> () -> a

Returns: string

Example

import { Maybe } from '@dzug/transit/monads';
console.log(Maybe.of(19).toString());

# Either

monads.Either:class static
This is the implementation of a Either monad. It either contains a left-value or right-value.
Whereas Left is represented as the error and Right as the happy path.
The Either monad consists of two constructors, which can be used to create a Left or Right value.

It is compliant with the Fantasy-Land specification and conforms following types:

Functor
Apply
Applicative
Chain
Example

import { Either } from '@dzug/transit/monads':
new monads.Either(value) static constructor
Initializes a new instance of Either.
value must be of instance Left or Right.
Usually you wouldn't call this constructor directly, but use Either.Left or Either.Right.
Refer to Either.of, to easily create a right valued Either.

Parameters
value : Left|Right
Contains value of the Either.Left or Either.Right.

Returns: Either<Left, Right>

monads.Either.\_callbacks static
monads.Either.\_callbacks.chainFn:function static
The function parameter of the Either#chain method.

Parameters
value : T
Returns: Either<Left, U>

monads.Either.\_callbacks.mapFn:function static
The function parameter of the Either#map method.

Parameters
value : T
Returns: Either<Left, U>

monads.Either#ap(functor)⇒Either<Left, Right>
Applies the function contained in the instance of a Right to the value contained in the provided Right, producing a Right containing the result. If the instance is Left, the result will be the Left instance.
If the instance is Right and the provided either is Left, the result will be the provided Left.

Type Annotation
ap:: Either a (b -> c) ~> Either a b -> Either a c

See fantasy-land/ap

Parameters
functor : Either
Returns: Either<Left, Right>

Example

import { Either } from '@dzug/transit/monads';
Either.of(double).ap(Either.of(10));
// Either.Right(20)
monads.Either#chain(fn)⇒Either<Left, Right>
The chain method is the combination of monads.Either#map and monads.Either#join.
This method has to return a value of the same type as the chain, in this case Either.

It takes one argument, which has to follow these rules:

fn has to be a function. If fn is not an function, the method's behaviour is unspecified.
fn has to return the same type as the chain, in this case Either.
Type Annotation
chain:: Either a b ~> (a -> Either a c) -> Either a c

See fantasy-land/chain

Parameters
fn : monads.Either.\_callbacks.chainFn
Returns: Either<Left, Right>

Example

import { Either } from '@dzug/transit/monads';
Either.of({ deep: { test: true } })
.chain(safeGet('deep'))
.chain(safeGet('test'));
// Either.Right(true)
monads.Either#either(leftFn, rightFn)⇒FnResult
Used to extract the value out of an Either by providing a function to handle the types of values contained in both Left and Right.

Type Annotation
either:: Either a b ~> (a -> c) -> (b -> c) -> c

Parameters
leftFn : function
Function that gets executed if the value is Left (error)

rightFn : function
Function that gets executed if the value is Right (happy path)

Returns: FnResult —

Resulting type of the Left or right fn

Example

import { Either } from '@dzug/transit/monads';
Either.of(10).either(leftFn, rightFn);
// rightFn(10)
monads.Either.encase(throwable)⇒Either<Error, Right> static
Takes an throwing function and returns an Either containing either the error as Left or the return value as Right.

Type Annotation
encase:: (a -> b) -> Either e b

Parameters
throwable : function
Function that may throw an error

Returns: Either<Error, Right>

Example

import { Either } from '@dzug/transit/monads';
Either.encase(() => {throw new Error('Failed')});
// Either.Left(Error('Failed'))
Either.encase(() => 5);
// Either.Right(5)
monads.Either#ifLeft(sideEffect)⇒Either<Left, Right>
Used to invoke a side effect, if the Either is a Left.
Returns the same instance as used.
The side effect function will be invoked with the value of Left.

Type Annotation
ifLeft:: Either a b ~> (a -> c) -> Either a b

Parameters
sideEffect : function
Returns: Either<Left, Right>

Example

import { Either } from '@dzug/transit/monads';
Either.of(20).ifLeft(err => console.log('Will not be invoked'));
// Either.Right(20)
new Either.Left(new Error('Failed')).ifLeft(err => console.log(err)); // Will be invoked
// Either.Left(Error('Failed'))
monads.Either#ifRight(sideEffect)⇒Either<Left, Right>
Used to invoke a side effect, if the Either is a Right.
Returns the same instance as used.
The side effect function will be invoked with the value of Right.

Type Annotation
ifRight:: Either a b ~> (b -> c) -> Either a b

Parameters
sideEffect : function
Returns: Either<Left, Right>

Example

import { Either } from '@dzug/transit/monads';
Either.of(20).ifRight(x => console.log(`Value is ${x}`));
// Either.Right(20)
new Either.Left(new Error('Failed')).ifRight(err => console.log(err)); // Won't be invoked
// Either.Left(Error('Failed'))
monads.Either#isLeft: readonly
Checks if the Either value is a Left.

Type Annotation
isLeft:: Boolean

Returns: Boolean

Example

import { Either } from '@dzug/transit/monads';
const either = Either.of(10);
either.isLeft ? branchA() : branchB();
monads.Either#isRight: readonly
Checks if the Either value is a Right.

Type Annotation
isRight:: Boolean

Returns: Boolean

Example

import { Either } from '@dzug/transit/monads';
const either = Either.of(10);
either.isRight ? branchA() : branchB();
monads.Either#join()⇒Left|Right
Used to retrieve the value of the Either container. Be careful since you'll lose the information if the value is either Left or Right.

Type Annotation
join:: Either a b ~> () -> a|b

Returns: Left|Right

Example

import { Either } from '@dzug/transit/monads';
const composition = Either.of({ deep: { test: 'abc' } })
.chain(safeGet('deep'))
.chain(safeGet('test'))
.join();
composition === 'abc'; // true
monads.Either.Left:class static
A Left container always represents the error value.
Any further mapping or chaining will simply carry the error on, until you inspect it.
This allows for fail-fast programming.

Example

import { Either } from '@dzug/transit/monads';
const either = Either.of(10).chain(unsuccessfulFn);
either.isLeft === true; // true
monads.Either.lefts(eithers)⇒Array<Left> static
Takes a list of Either instances an returns only the Left values.

Type Annotation
lefts:: [Either a b] -> [a]

Parameters
eithers : Array<Either>
List of Either instances

Returns: Array<Left>

Example

import { Either } from '@dzug/transit/monads';
Either.lefts([Either.of(10), new Either.Left(new Error('Failed'))]);
// [Error('Failed')]
monads.Either#map(fn)⇒Either<Left, Right>
This method applies a given function to the Either's value. If the value is Left, the function will not be invoked.
Otherwise returns a new Right instance with the result of fn(eitherValue).

The paramter fn has to follow this rules:

fn has to be a function. If fn is not an function, the method's behaviour is unspecified.
fn can return any value.
Type Annotation
map:: Either a b ~> (b -> c) -> Either a c

See fantasy-land/map

Parameters
fn : monads.Either.\_callbacks.mapFn
Returns: Either<Left, Right>

Example

import { Either } from '@dzug/transit/monads';
Either.of(10).map(double);
// Either.Right(20)
monads.Either.of(value)⇒Right static
Acts as alias for the Either.Right constructor. Returns a Right (happy path) instance for branching.

Type Annotation
of:: b -> Either a b

Parameters
value : T
Returns: Right

Example

import { Either } from '@dzug/transit/monads';
Either.of(10);
monads.Either.Right:class static
A Right container always represents the happy path value.
Any mapping or chaining function will be invoked on the value.

Example

import { Either } from '@dzug/transit/monads';
const either = Either.of(10).chain(successfulFn);
either.isRight === true; // true
monads.Either.rights(eithers)⇒Array<Right> static
Takes a list of Either instances an returns only the Right values.

Type Annotation
rights:: [Either a b] -> [b]

Parameters
eithers : Array<Either>
List of Either instances

Returns: Array<Right>

Example

import { Either } from '@dzug/transit/monads';
Either.rights([Either.of(10), new Either.Left(new Error('Failed'))]);
// [10]
monads.Either#toMaybe()⇒Maybe
Casts an Either to a Maybe.
If the value is Left the Maybe will contain nothing.
If the value is Right the Maybe will contain the value of it.

Type Annotation
toMaybe:: Either a b ~> Maybe b

Returns: Maybe

Example

import { Either } from '@dzug/transit/monads';
Either.of(5).toMaybe();
// Maybe(5)
new Either.Left(new Error('Failed')).toMaybe();
// Maybe(nothing)
monads.Either#toString()⇒string
Cast the Monad to string representation.
Only reason to use this would be while debugging an application.

Type Annotation
toString:: Either a b ~> () -> String

Returns: string

Example

import { Either } from '@dzug/transit/monads';
console.log(Either.of(19).toString());

# Future

monads.Future:class static
This implementation of Future essentially is a native JS promise which conforms some rules given by Fantasy-Land.
Essentially, this is mainly creating aliases for .then of a Promise.

It is compliant with the Fantasy-Land specification and conforms following types:

Functor
Apply
Applicative
Chain
Example

import { Future } from '@dzug/transit/monads':
monads.Future#ap(fn)⇒Future<Err, Resolved>
Apply the function contained by the first Future to another given Future.

Parameters
fn : function
Returns: Future<Err, Resolved>

monads.Future#chain(fn)⇒Future<Err, Resolved>
Alias for Promise#then

Parameters
fn : function
Returns: Future<Err, Resolved>

monads.Future#fork(reject, resolve)⇒Future<Err, Resolved>
Forking a Future is used to provide functions for each rejected and resolved value.

Type Annotation
fork:: Future e a ~> (e -> d) -> (a -> c) -> Future d c

Parameters
reject : function
resolve : function
Returns: Future<Err, Resolved>

Example

import { Futur } from '@dzug/transit/monads';
Future.fromPromise(aJsPromise).fork(rejectFn, resolveFn);
monads.Future.fromPromise(promise)⇒Future<Err, Resolved> static
Create an Future from a native JS Promise.

Type Annotation
fromPromise:: Promise a -> Future e a

Parameters
promise : Promise
Returns: Future<Err, Resolved>

Example

import { Futur } from '@dzug/transit/monads';
Future.fromPromise(aJsPromise);
monads.Future#map(fn)⇒Future<Err, Resolved>
Alias for Promise#then

Parameters
fn : function
Returns: Future<Err, Resolved>

monads.Future.of(fn)⇒void static
This static method enables the instantiation of a Future monad without using the new keyword.

Type Annotation
of:: a -> Future e a

Parameters
fn : function
