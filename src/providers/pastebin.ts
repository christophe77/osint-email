import browserInstance from '../browserInstance';
import Pastebin from '../types/pastebin';
import { delay } from '../utils';

const pastebin = async (email: string): Promise<Pastebin[]> => {
	const defaultResponse: Pastebin[] = [];

	const dork = `site:pastebin.com intext:"${email}"}`;
	const searchUrl = encodeURI(`https://www.google.com/search?q=${dork}`);
	const browser = await browserInstance();
	try {
		if (browser) {
			const page = await browser.newPage();
			await page.goto(searchUrl, {
				waitUntil: 'networkidle2',
			});
			// bypass cookie alert
			await page.keyboard.press('Enter');
			await delay(1000);

            const searchResults: Pastebin[] = await page.$$eval('a', (as) =>
				as.map((a: any) => {
					if (!a.href.includes('google') && a.href !== '') {
						return String(a.href)
					}
				}),
			);
			await browser.close();
			const googleResults = searchResults.filter((result) => result);
			return googleResults || defaultResponse;
		}
	} catch {
		await browser?.close();
		return defaultResponse;
	}
	return defaultResponse;
};

export default pastebin;
