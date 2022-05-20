import { EmailResponse } from "./types/emailResponse";

export interface OsintEmail {
    search: (email: string) => Promise<EmailResponse>;
}
