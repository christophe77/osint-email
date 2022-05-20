import { EmailResponse } from '../types/emailResponse';
declare const search: (email: string) => Promise<EmailResponse>;
export default search;
