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
exports.default = haveIBeenPowned;
