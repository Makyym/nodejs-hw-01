import {PATH_DB} from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const valueDb = await fs.readFile(PATH_DB, 'utf8');
        let array = [];
        if (valueDb) {
            array = JSON.parse(valueDb);
        };
        const contact = createFakeContact();
        array.push(contact);
        try {
                const data = JSON.stringify(array);
                await fs.writeFile(PATH_DB, data, 'utf8');
                console.log('Data successfully added to file.');
            } catch (error) {
                console.error('Error adding data to a file:', error);
            };
};

addOneContact();
