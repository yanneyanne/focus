import {List, Map} from 'immutable';
import {expect} from 'chai';

import {validateWeb} from '../src/validator'

describe('Validator', () => {
	describe('correctly validates websites', () => {
		it('validates websites', () => {
			const result = validateWeb()
			expect(result).to.equal(true)		
		})
	})
})
