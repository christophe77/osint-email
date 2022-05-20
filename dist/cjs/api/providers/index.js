"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gravatar_1 = __importDefault(require("./gravatar"));
const providers = {
    gravatar: gravatar_1.default,
};
exports.default = providers;
