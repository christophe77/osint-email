import axios from 'axios';
const gravatar = async (email) => {
    try {
        const resp = await axios.get(`https://en.gravatar.com/site/check/${email}`);
        console.log(resp.data);
        return resp.data;
    }
    catch (error) {
        console.log(error);
        throw new Error('error gravatar');
    }
};
export default gravatar;
