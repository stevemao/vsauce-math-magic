import test from 'ava';
import m from './';

test('title', t => {
	t.ok(m(2).length >= 2);
});
