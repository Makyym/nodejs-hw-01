import {PATH_DB} from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    const array = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(array);
    return contacts;
};

console.log(await getAllContacts());
