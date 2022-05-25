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

    const osintEmail = require('osint-email');
    // or
    import osintEmail from 'osint-email';

    async function getDatas(email) {
        const response = await osintEmail.search(email);
        console.log(response)
    }
    getDatas("exemple@gmail.com");

## Response

example :

    {
        google: [
            {
                title: 'the title',
                link: 'https://[.....].pdf'
            },
            {
                title: 'another title',
                link: 'https://[....].html'
            }
        ],
        pastebin: [
            "https://pastebin.com/NKj3uXn1",
            "https://pastebin.com/NKj3uXn2",
            "https://pastebin.com/NKj3uXn3"
        ],
        haveIBeenPowned:[
            {
                title: "adobe";
                values: [
                    {
                        name: "date";
    	                value: "01/01/2014";
                    },
                    {
                        name: "type";
    	                value: "email, passwords";
                    }
                ]
            }
        ]
    }
