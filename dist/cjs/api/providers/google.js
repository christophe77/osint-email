"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserInstance_1 = __importDefault(require("../../browserInstance"));
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
        'php'
    ];
    const dork = `intext:"${email}" filetype:${fileTypeList.join('+OR+')}`;
    const searchUrl = encodeURI(`https://www.google.com/search?q=${dork}`);
    const browser = await (0, browserInstance_1.default)();
    try {
        if (browser) {
            const page = await browser.newPage();
            await page.goto(searchUrl);
            await page.waitForSelector('.yuRUbf', { visible: true });
            const searchResults = await page.$$eval('a', (as) => as.map((a) => {
                if (!a.href.includes('google') && a.href !== '') {
                    return ({
                        title: a.title || '',
                        link: a.href,
                    });
                }
            }));
            await browser.close();
            const googleResults = searchResults.filter(result => result);
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
exports.default = google;
