import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error of reading file:', error);
    }
};
