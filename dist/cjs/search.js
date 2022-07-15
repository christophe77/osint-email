"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = __importDefault(require("./providers"));
const { google, haveIBeenPowned, pastebin } = providers_1.default;
const search = async (email) => {
    const googleDatas = await google(email);
    const haveIBeenPownedDatas = await haveIBeenPowned(email);
    const pastebinDatas = await pastebin(email);
    const response = {
        google: googleDatas,
        haveIBeenPowned: haveIBeenPownedDatas,
        pastebin: pastebinDatas
    };
    return response;
};
exports.default = search;
