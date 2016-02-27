#!/usr/bin/env node
'use strict';
var meow = require('meow');
var green = require('chalk').green;
var vsauceMathMagic = require('./');

var cli = meow([
	'Usage',
	'  $ vsauce-math-magic [count]',
	'',
	'Examples',
	'  $ vsauce-math-magic',
	'  unicorns & rainbows',
	'  $ vsauce-math-magic ponies',
	'  ponies & rainbows'
]);

var startTime = new Date();
var count = cli.input[0] || 10;
var results = vsauceMathMagic(count);
console.log(results);
var finishTime = new Date();
console.log('The computer has shuffled ' + green(results.length) + ' times and it took ' + green(finishTime - startTime) + ' milliseconds to get the same order of the deck that has appear before when there are ' + green(count) + ' cards in the deck.');
