import {List, Map} from 'immutable';
import {expect} from 'chai';

import {validateWeb} from '../src/validator'

describe ('Validator', () => {
	describe ('correctly validates', () => {
		it ('incorrect www sites', () => {
  			const site = "ww.fi.com"
  			var result = validateWeb(site)
  			result.then((result) => {
  			 	expect(result).to.equal(false)
           	})
  		})
  		it ('incorrect .-something', () => {
  			const site = "www.facebook.xxxxxxxyyyyyyy"
  			var result = validateWeb(site)
  			result.then((result) => {
  			 	expect(result).to.equal(false)
       	    })
  		})
		it('non-existant website', () => {
			const site = "www.falajsflkjasdlfkjasdlkfjlaskdjfalkskalklas.com"
			var result = validateWeb(site)
			result.then((result) => {
			 	expect(result).to.equal(false)
            })
		})
		it('existing site', () => {
			const site = "http://www.google.com"
            var result = validateWeb(site)
			result.then((result) => {
			 	expect(result).to.equal(true)
				done()
            })
        })
	})
})
