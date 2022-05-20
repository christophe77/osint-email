const osintEmail = require('./dist/cjs').default;

async function getDatas(email) {
    const response = await osintEmail.search(email);
    console.log(response)
}
getDatas("chrisb@gmx.fr")