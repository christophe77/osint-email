import browserInstance from '../browserInstance';
import HaveIBeenPowned from '../types/haveIBeenPowned';

const haveIBeenPowned = async (email: string): Promise<HaveIBeenPowned> => {
	const defaultResponse: HaveIBeenPowned = {
		Breaches: [],
		Pastes: [],
	};
	const searchUrl = encodeURI(
		`https://haveibeenpwned.com/unifiedsearch/${email}`,
	);
	const browser = await browserInstance();
	if (browser) {
		const page = await browser.newPage();
		let results = defaultResponse;
		page.on('response', async (response) => {
			if (response.url().includes('unifiedsearch')) {
				results = await response.json();
			}
		});
		await page.goto(searchUrl, {
			waitUntil: 'networkidle2',
		});
		await browser.close();
		return results;
	}
	return defaultResponse;
};
export default haveIBeenPowned;
