interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = [];

function addContact(contact: Contact): void {
    contacts.push(contact);
    console.log(`Contact added: ${contact.name}`)
}

function listContacts(): void {
    console.log("Contact list:");

    contacts.forEach(contact => {
        console.log(
            `ID: ${contact.id}, Name: ${contact.name} Email: ${contact.email ?? "N/A"}, Phone: ${contact.phone ?? "N/A"}`
        );
    });
}

function findByName(name: string): Contact[] {
    const matches = contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
    );

    console.log(`Found ${matches.length} contact(s) matching "${name}"`);
    return matches;
}

function removeById(id: number): boolean {
    const index = contacts.findIndex(contact => contact.id === id);

    if (index === -1) {
        console.log(`No contact found with ID ${id}`);
        return false;
    }

    contacts.splice(index, 1);
    console.log(`Contact with ID ${id} removed`);
    return true;
}

addContact({ id: 1, name: "Elias", email: "elias@test,com", phone: "123" });
addContact({ id: 2, name: "Bob", email: "bob@test,com" });
addContact({ id: 3, name: "Charlie", phone: "321" });

listContacts();
findByName("bo");
removeById(2);
listContacts();