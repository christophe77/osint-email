import puppeteer from 'puppeteer';
declare function browserInstance(): Promise<puppeteer.Browser | undefined>;
export default browserInstance;
