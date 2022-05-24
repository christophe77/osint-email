import providers from './providers';
const { google } = providers;
const search = async (email) => {
    const googleDatas = await google(email);
    const response = { google: googleDatas };
    return response;
};
export default search;
