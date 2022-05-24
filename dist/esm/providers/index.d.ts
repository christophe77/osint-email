declare const providers: {
    google: (email: string) => Promise<import("../types/google").default[]>;
    haveIBeenPowned: (email: string) => Promise<import("../types/haveIBeenPowned").default>;
    pastebin: (email: string) => Promise<import("../types/pastebin").default[]>;
};
export default providers;
