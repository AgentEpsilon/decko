# decko [![NPM Version](https://img.shields.io/npm/v/@agentepsilon/decko.svg?style=flat)](https://npmjs.com/package/@agentepsilon/decko) [![Build Status](https://travis-ci.org/agentepsilon/decko.svg?branch=master)](https://travis-ci.org/agentepsilon/decko)

## This is a fork of [developit's decko](https://github.com/developit/decko) that renames the incorrectly named "debounce" to "throttle", and adds an actual "debounce".

A concise implementation of the ~~three~~ **four** most useful [decorators](https://github.com/wycats/javascript-decorators):

- `@bind`: make the value of `this` constant within a method
- `@throttle`: throttle calls to a method
- `@debounce`: debounce calls to a method
- `@memoize`: cache return values based on arguments

Decorators help simplify code by replacing the noise of common patterns with declarative annotations.
Conversely, decorators can also be overused and create obscurity.
Decko establishes ~~3~~ **4** standard decorators that are immediately recognizable, so you can avoid creating decorators in your own codebase.

> 💡 **Tip:** decko is particularly well-suited to [**Preact Classful Components**](https://github.com/developit/preact).
>
> 💫 **Note:**
> - For Babel 6+, be sure to install [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy).
> - For Typescript, be sure to enable `{"experimentalDecorators": true}` in your tsconfig.json.

## Installation

Available on [npm](https://npmjs.com/package/@agentepsilon/decko):

```sh
npm i -S @agentepsilon/decko
```


## Usage

Each decorator method is available as a named import.

```js
import { bind, memoize, throttle, debounce } from '@agentepsilon/decko';
```


### `@bind`

```js
class Example {
	@bind
	foo() {
		// the value of `this` is always the object from which foo() was referenced.
		return this;
	}
}

let e = new Example();
assert.equal(e.foo.call(null), e);
```



### `@memoize`

> Cache values returned from the decorated function.
> Uses the first argument as a cache key.
> _Cache keys are always converted to strings._
>
> ##### Options:
>
> `caseSensitive: false` - _Makes cache keys case-insensitive_
>
> `cache: {}` - _Presupply cache storage, for seeding or sharing entries_

```js
class Example {
	@memoize
	expensive(key) {
		let start = Date.now();
		while (Date.now()-start < 500) key++;
		return key;
	}
}

let e = new Example();

// this takes 500ms
let one = e.expensive(1);

// this takes 0ms
let two = e.expensive(1);

// this takes 500ms
let three = e.expensive(2);
```



### `@throttle`

> Throttle calls to the decorated function. To throttle means "call this at most once per N ms".
> All outward function calls get collated into a single inward call, and only the latest (most recent) arguments as passed on to the throttled function.
>
> ##### Options:
>
> `delay: 0` - _The number of milliseconds to buffer calls for._

```js
class Example {
	@throttle
	foo() {
		return this;
	}
}

let e = new Example();

// this will only call foo() once:
for (let i=1000; i--) e.foo();
```




### `@debounce`

> Debounce calls to the decorated function. To debounce means "call this only after it has not been called for N ms".
> All outward function calls clear any currently queued calls, then schedule a new call, effectively delaying the call further.
> As in `@throttle`, only the most recent arguments are passed on.
> 
> ##### Options:
> `delay: 0` - _The number of milliseconds to wait for repeat calls for._

```js
class Example {
	@debounce
	foo() {
		return this;
	}
}
``

---

License
-------

MIT
