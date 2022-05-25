"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browserInstance_1 = __importDefault(require("../browserInstance"));
const firefoxMonitor = async (email) => {
    const defaultResponse = {
        Breaches: [],
        Pastes: [],
    };
    const browser = await (0, browserInstance_1.default)();
    if (browser) {
        const page = await browser.newPage();
        let results = defaultResponse;
        await page.goto('https://monitor.firefox.com', {
            waitUntil: 'networkidle2',
        });
        await page.click('input#scan-email', { delay: 200 });
        await page.keyboard.type(`${email}\n`);
        await page.waitForNavigation();
        await page.waitForSelector('.scan-res-breaches', {
            visible: true,
            timeout: 1000,
        });
        const rawBreaches = await page.evaluate(() => {
            const data = [];
            const elements = document.getElementsByClassName('flx flx-col');
            for (const element of elements) {
                const breachTitleRaw = element.getElementsByClassName('breach-title');
                const breachKeyRaw = element.getElementsByClassName('breach-key');
                const breachValueRaw = element.getElementsByClassName('breach-value');
                data.push({
                    title: breachTitleRaw[0].innerHTML,
                    values: [
                        {
                            name: breachKeyRaw[0].innerHTML,
                            value: breachValueRaw[0].innerHTML,
                        },
                        {
                            name: breachKeyRaw[1].innerHTML,
                            value: breachValueRaw[1].innerHTML,
                        },
                    ],
                });
            }
            return data;
        });
        console.log(JSON.stringify(rawBreaches));
        await browser.close();
        return results;
    }
    return defaultResponse;
};
exports.default = firefoxMonitor;
