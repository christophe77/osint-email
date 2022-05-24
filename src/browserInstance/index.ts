import puppeteer from 'puppeteer';

async function browserInstance() {
	let browser;
	try {
		console.log('Opening the browser......');
		browser = await puppeteer.launch({
			headless: false,
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
		});
	} catch (err) {
		console.log('Could not create a browser instance => : ', err);
	}
	return browser;
}

export default browserInstance;
