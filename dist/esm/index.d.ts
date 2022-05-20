declare const osintEmail: {
    search: (email: string) => Promise<import("./types/emailResponse").EmailResponse>;
};
export default osintEmail;
