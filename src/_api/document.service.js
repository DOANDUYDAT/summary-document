import axios from 'axios';
import config from 'config';

export const docService = {
    summaryDoc
};

async function summaryDoc(inputData) {
    const options = {
        method: 'post',
        url: `${config.apiUrl}/doc/summary`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            inputData
        }
    }

    try {
        const response = await axios(options);
        if (response.data) {
            return response.data
        }
    } catch (error) {
        throw error;
    }
}