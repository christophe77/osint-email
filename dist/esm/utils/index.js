export const delay = async (ms) => {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(() => {
                console.log("delay ends");
            });
        }, ms);
    });
};
