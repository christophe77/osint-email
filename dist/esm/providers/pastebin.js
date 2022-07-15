import browserInstance from '../browserInstance';
import { delay } from '../utils';
const pastebin = async (email) => {
    const defaultResponse = [];
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
            const searchResults = await page.$$eval('a', (as) => as.map((a) => {
                if (!a.href.includes('google') && a.href !== '') {
                    return String(a.href);
                }
            }));
            await browser.close();
            const googleResults = searchResults.filter((result) => result);
            return googleResults || defaultResponse;
        }
    }
    catch (_a) {
        await (browser === null || browser === void 0 ? void 0 : browser.close());
        return defaultResponse;
    }
    return defaultResponse;
};
export default pastebin;
