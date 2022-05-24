declare const providers: {
    google: (email: string) => Promise<any>;
    haveIBeenPowned: (email: string) => Promise<import("axios").AxiosResponse<any, any> | {
        error: any;
    }>;
};
export default providers;
