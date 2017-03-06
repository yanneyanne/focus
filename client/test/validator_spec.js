import {expect} from 'chai'

import {validateWeb} from '../app/lib/validator'

describe ('Validator', () => {
	describe ('web', () => {
		it ('identifies incorrect www sites', () => {
			const site = "ww.fi.com"
			var result = validateWeb(site)
			result.then((result) => {
				expect(result).to.equal(false)
			})
		})
		it ('identifies incorrect .-something', () => {
			const site = "www.facebook.xxxxxxxyyyyyyy"
			var result = validateWeb(site)
			result.then((result) => {
				expect(result).to.equal(false)
			})
		})
		it('identifies non-existant website', () => {
			const site = "www.falajsflkjasdlfkjasdlkfjlaskdjfalkskalklas.com"
			var result = validateWeb(site)
			result.then((result) => {
				expect(result).to.equal(false)
			})
		})
		it('identifies existing site', () => {
			const site = "http://www.github.com"
			var result = validateWeb(site)
			result.then((result) => {
				expect(result).to.equal(true)
				done()
			})
		})
	})
})
