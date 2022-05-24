declare const haveIBeenPowned: (email: string) => Promise<import("axios").AxiosResponse<any, any> | {
    error: any;
}>;
export default haveIBeenPowned;
