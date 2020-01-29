import { browser, element, by } from 'protractor'
import * as fs from 'fs';

// Based on http://elementalselenium.com/tips/39-drag-and-drop
let script = fs.readFileSync('excercsises/7-actions/dnd.js')

describe('Protractor workshop app', function () {

	it('should greet the named user', async function () {
		await browser.get('https://the-internet.herokuapp.com/drag_and_drop');
		let a = element(by.css('#column-a'))
		let b = element(by.css('#column-b'))
		await browser.actions().dragAndDrop(a,b).perform();
		expect( await element(by.css('#column-a')).getText()).toBe ("B")
	});

	it('should greet the named user', async function () {
		await browser.get('https://the-internet.herokuapp.com/drag_and_drop');
		await browser.executeScript(script.toString() + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")
		let a = element(by.css('#column-a'))
		expect( await element(by.css('#column-a')).getText()).toBe ("B")
	});


});
