"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const providers_1 = __importDefault(require("./providers"));
const { gravatar } = providers_1.default;
const search = async (email) => {
    const gravatarDatas = await gravatar(email);
    const response = { gravatar: gravatarDatas };
    return response;
};
exports.default = search;
