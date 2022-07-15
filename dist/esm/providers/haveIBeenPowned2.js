import browserInstance from '../browserInstance';
const haveIBeenPowned = async (email) => {
    const defaultResponse = {
        Breaches: [],
        Pastes: [],
    };
    const searchUrl = encodeURI(`https://haveibeenpwned.com/unifiedsearch/${email}`);
    const browser = await browserInstance();
    if (browser) {
        const page = await browser.newPage();
        await page.goto(searchUrl, {
            waitUntil: 'networkidle2',
        });
        const results = await page.on('response', async (response) => {
            if (response.url().includes("unifiedsearch")) {
                try {
                    return JSON.parse(await response.json());
                }
                catch (error) {
                }
            }
        });
        await browser.close();
        // @ts-ignore
        return results;
    }
    return defaultResponse;
};
export default haveIBeenPowned;
