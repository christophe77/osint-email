import { EmailResponse } from '../types/emailResponse';
import providers from './providers';
const { gravatar } = providers;

const search = async (email: string): Promise<EmailResponse> => {
	const gravatarDatas = await gravatar(email);
	const response = { gravatar: gravatarDatas };
	return response;
};
export default search;
