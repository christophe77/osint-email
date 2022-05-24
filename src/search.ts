import Result from './types/result';
import providers from './providers';
const { google, haveIBeenPowned } = providers;

const search = async (email: string): Promise<Result> => {
	const googleDatas = await google(email);
	const haveIBeenPownedDatas = await haveIBeenPowned(email);
	
	const response = { 
		google: googleDatas,
		haveIBeenPowned: haveIBeenPownedDatas
	 };
	return response;
};
export default search;
