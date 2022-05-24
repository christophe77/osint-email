"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = __importDefault(require("./google"));
const haveIBeenPowned_1 = __importDefault(require("./haveIBeenPowned"));
const providers = {
    google: google_1.default,
    haveIBeenPowned: haveIBeenPowned_1.default
};
exports.default = providers;
