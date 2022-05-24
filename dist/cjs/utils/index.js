"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = async (ms) => {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(() => {
                console.log("delay ends");
            });
        }, ms);
    });
};
exports.delay = delay;
