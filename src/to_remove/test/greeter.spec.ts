import 'mocha';

import {expect} from 'chai';

import {greeter} from '../greeter';

describe('greeting', () => {
    it('should return hello "name"', () => {
        const name = 'jo';
        const expected = 'Hello jo';
        expect(greeter(name)).to.equal(expected);
    });
});