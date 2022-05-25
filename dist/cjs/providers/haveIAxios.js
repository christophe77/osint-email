"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryToScrape = void 0;
const axios_1 = __importDefault(require("axios"));
const defaultOptions = {
    baseURL: 'https://haveibeenpwned.com/api/v2',
    headers: {
        withCredentials: true,
        'Content-Type': 'application/json',
        accept: 'application/vnd.haveibeenpwned.v2+json',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        referer: 'https://haveibeenpwned.com/',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': 'Android',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Mobile Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    },
};
// Create instance
const axiosInstanceInstance = axios_1.default.create(defaultOptions);
const tryToScrape = async (email) => {
    const encodeEmail = encodeURI(email);
    const result = await axiosInstanceInstance.get(`/breachedaccount/${encodeEmail}`);
    return result.data;
};
exports.tryToScrape = tryToScrape;
