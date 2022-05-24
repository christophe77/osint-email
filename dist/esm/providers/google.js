import browserInstance from '../browserInstance';
import { delay } from '../utils';
const google = async (email) => {
    const defaultResponse = [];
    const fileTypeList = [
        'txt',
        'pdf',
        'doc',
        'docx',
        'xls',
        'xlsx',
        'json',
        'xml',
        'html',
        'html',
        'php',
    ];
    const dork = `intext:"${email}" filetype:${fileTypeList.join('+OR+')}`;
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
            await page.waitForSelector('.yuRUbf', {
                visible: true,
                timeout: 1000,
            });
            const searchResults = await page.$$eval('a', (as) => as.map((a) => {
                if (!a.href.includes('google') && a.href !== '') {
                    return {
                        title: String(a.title) || '',
                        link: String(a.href),
                    };
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
export default google;
