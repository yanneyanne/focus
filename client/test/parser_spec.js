import {expect} from 'chai'

import {isWebsite} from '../lib/parser.js'

describe ('Parser', () => {
	describe('web', () => {
		it ('identifies fully correct website url', () => {
			const site = "http://www.github.com"	
			var result = isWebsite(site)
			expect(result).to.equal(true)
		})	
		it ('identifies correct website url', () => {
			const site = "www.github.com"	
			var result = isWebsite(site)
			expect(result).to.equal(true)
		})
		it ('identifies minimal website url', () => {
			const site = "github.com"
			var result = isWebsite(site)
			expect(result).to.equal(true)
		})
		it ('identifies non-url', () => {
			const notSite = "github"
			var result = isWebsite(notSite)
			expect(result).to.equal(false)
		})
	})
})
