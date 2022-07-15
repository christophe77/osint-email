# osint-email

Gather informations from an email adress.

## Providers

- Google
- Pastebin
- Havebeenpown

## Install

    yarn add osint-email
    //
    npm install osint-email

## Example

    const osintEmail = require('osint-email').default;
    // or
    import osintEmail from 'osint-email';

    async function getDatas(email) {
        const response = await osintEmail.search(email);
        console.log(response)
    }
    getDatas("exemple@gmail.com");

## Result type

    type Google = {
        title?: string;
        link?: string;
    } | undefined;

    type Pastebin = {
        title?: string;
        link?: string;
    } | undefined;

    type HaveIBeenPowned = {
        Breaches: {
            Name: string;
            Title: string;
            Domain: string;
            BreachDate: string;
            AddedDate: string;
            ModifiedDate: string;
            PwnCount: number;
            Description: string;
            LogoPath: string;
            DataClasses: string[];
            IsVerified: boolean;
            IsFabricated: boolean;
            IsSensitive: boolean;
            IsRetired: boolean;
            IsSpamList: boolean;
            IsMalware: boolean;
        }[];

        Pastes: {
            Id: string;
            Source: string;
            Title: string;
            Date: string;
            EmailCount: number;
        }[];
    };
