import Result from "./types/result";

export interface OsintEmail {
    search: (email: string) => Promise<Result>;
}
