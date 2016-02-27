# Vsauce Math Magic [![Build Status](https://travis-ci.org/stevemao/vsauce-math-magic.svg?branch=master)](https://travis-ci.org/stevemao/vsauce-math-magic)

> Demo of https://www.youtube.com/watch?v=ObiqJzfyACM

> Every time you shuffle a deck of cards well, smush it for a few minutes, or refel itself a few more times. Chances are, you have put those playing cards into an order that they have never been in in the entire history of cards or humans or the universe.

# SERIOUSLY!

> -- Michael Stevens

When the program starts, it will keep randomly ordering a deck of cards and remembers it. Once the order has appear before, it stops.
This program demonstrates how long it would take to achieve it. In fact, the program would start to take significant amount of time if there are 12 cards. So if you put 13 cards, chances are your program is going to freeze for a while. `13!` is already QUITE BIG!!

Please checkout the [awesome video](https://www.youtube.com/watch?v=ObiqJzfyACM) and the links provided by the video!


## Install

```
$ npm install --save vsauce-math-magic
```


## Usage

```js
const vsauceMathMagic = require('vsauce-math-magic');

vsauceMathMagic(3);
//=> [ [ 2, 3, 1 ], [ 2, 1, 3 ], [ 2, 3, 1 ] ]
```


## API

### vsauceMathMagic(count)

#### count

Type: `number`


## CLI

```
$ npm install --global vsauce-math-magic
$ vsauce-math-magic 3
```


## License

MIT © [Steve Mao](https://github.com/stevemao)
