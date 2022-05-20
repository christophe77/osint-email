import providers from './providers';
const { gravatar } = providers;
const search = async (email) => {
    const gravatarDatas = await gravatar(email);
    const response = { gravatar: gravatarDatas };
    return response;
};
export default search;
