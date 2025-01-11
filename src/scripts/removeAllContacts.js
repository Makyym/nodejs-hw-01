import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    const clearData = JSON.stringify([]);
    try {
        await fs.writeFile(PATH_DB, clearData, 'utf8');
        console.log('Data successfully cleared.');
    } catch (error) {
        console.error('Error clearing data in a file:', error);
    };
};

removeAllContacts();
