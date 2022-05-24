import browserInstance from '../browserInstance';
import { delay } from '../utils';
const google = async (email) => {
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
            await page.waitForSelector('.yuRUbf', { visible: true });
            const searchResults = await page.$$eval('a', (as) => as.map((a) => {
                if (!a.href.includes('google') && a.href !== '') {
                    return {
                        title: a.title || '',
                        link: a.href,
                    };
                }
            }));
            await browser.close();
            const googleResults = searchResults.filter((result) => result);
            return googleResults;
        }
    }
    catch (error) {
        return [
            {
                error,
            },
        ];
    }
    return [{}];
};
export default google;
