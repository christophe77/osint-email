import providers from './providers';
const { google, haveIBeenPowned, pastebin } = providers;
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
export default search;
