import axios from 'axios';
const emailRepIo = async (email) => {
    try {
        const resp = await axios.get(`https://emailrep.io/query/${email}`);
        return resp.data;
    }
    catch (error) {
        console.log(error);
        throw new Error('error emailRepIo');
    }
};
export default emailRepIo;
