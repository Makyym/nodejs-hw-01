import fs from 'node:fs/promises';
import { getAllContacts } from './getAllContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    const contactsArray = await getAllContacts();
    if(!contactsArray.length) return;
    const lastContactIndex = contactsArray.length - 1;
    contactsArray.splice(lastContactIndex, 1);
    try {
        const data = JSON.stringify(contactsArray);
        await fs.writeFile(PATH_DB, data, 'utf8');
        console.log('Last contact successfully deleted from file.');
        } catch (error) {
            console.error('Error deleting contact from a file:', error);
        };
};

removeLastContact();
