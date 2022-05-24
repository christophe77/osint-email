"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
async function browserInstance() {
    let browser;
    try {
        console.log('Opening the browser......');
        browser = await puppeteer_1.default.launch({
            headless: false,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
        });
    }
    catch (err) {
        console.log('Could not create a browser instance => : ', err);
    }
    return browser;
}
exports.default = browserInstance;
