"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const emailRepIo = async (email) => {
    try {
        const resp = await axios_1.default.get(`https://emailrep.io/query/${email}`);
        return resp.data;
    }
    catch (error) {
        console.log(error);
        throw new Error('error emailRepIo');
    }
};
exports.default = emailRepIo;
