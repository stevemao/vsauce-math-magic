# Vsauce Math Magic [![Build Status](https://travis-ci.org/stevemao/vsauce-math-magic.svg?branch=master)](https://travis-ci.org/stevemao/vsauce-math-magic)

Demo of [Math Magic](https://www.youtube.com/watch?v=ObiqJzfyACM#t=14m56s)

> Every time you shuffle a deck of cards well, smoosh it for a few minutes or
> riffle it seven or more times, chances are you have put those playing cards
> into an order that they have never been in in the entire history of cards, or
> humans, or the universe. **Seriously.**
> -- [Michael Stevens](https://www.youtube.com/user/Vsauce)

When the program starts, it will continuously and randomly reorder a deck of
cards, remembering each order it produces. When an order has appeared more than
once, it stops. This program demonstrates how long it would take to achieve
two identical deck orders through random shuffling. In fact, the program will
start to take a significant amount of time even if there are only 12 cards. So
if you select 13 cards, chances are your program is going to freeze for a
while. `13!` *(13 factorial)* is already **QUITE BIG!!**

Please check out the
[awesome video](https://www.youtube.com/watch?v=ObiqJzfyACM)
and the links provided in the video description!


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
