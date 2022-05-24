export const delay = async (ms: number) => {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(() => {
                console.log("delay ends");
            });
        }, ms);
    });
};