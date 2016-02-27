'use strict';
var equal = require('array-equal');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function cloneArr(arr) {
	var ret = [];
	var len = arr.length;
	while (--len >= 0) {
		ret[len] = arr[len];
	}

	return ret;
}

function init(count) {
	var cards = [];
	while (count > 0) {
		cards.push(count--);
	}

	return cards;
}

function drawOne(cards) {
	var index = getRandomInt(0, cards.length);
	return cards.splice(index, 1)[0];
}

function shuffle(cards) {
	var deck = cloneArr(cards);
	var ret = [];

	while (deck.length) {
		ret.push(drawOne(deck));
	}

	return ret;
}

function start(count) {
	if (typeof count !== 'number') {
		throw new TypeError('count must be a number.');
	}

	var cards = init(count);
	var results = [shuffle(cards)];

	while (true) { // eslint-disable-line no-constant-condition
		var result = shuffle(cards);

		for (var i = 0; i < results.length; i++) {
			if (equal(result, results[i])) {
				results.push(result);
				return results;
			}
		}

		results.push(result);
	}
}

module.exports = start;
