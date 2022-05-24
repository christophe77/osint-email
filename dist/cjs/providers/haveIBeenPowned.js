"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserInstance_1 = __importDefault(require("../browserInstance"));
const haveIBeenPowned = async (email) => {
    const defaultResponse = {
        Breaches: [],
        Pastes: [],
    };
    const searchUrl = encodeURI(`https://haveibeenpwned.com/unifiedsearch/${email}`);
    const browser = await (0, browserInstance_1.default)();
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
exports.default = haveIBeenPowned;
