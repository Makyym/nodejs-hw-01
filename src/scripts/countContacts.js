import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    const contactsArray = await getAllContacts();
    return contactsArray.length;
};

console.log(await countContacts());
