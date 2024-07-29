export function saveContact(listContact, name, phone, email) {
  if (!name) {
    name = phone;
  }

  const newContact = [
    ...listContact,
    {
      name,
      phone,
      email,
    },
  ];

  localStorage.setItem("contact", JSON.stringify(newContact));

  return newContact;
}

export function getAllContacts() {
  const data = localStorage.getItem("contact");

  if (data) {
    return JSON.parse(data);
  }

  return [];
}

export function findContact(phone) {
  return getAllContacts().find((e) => e.phone == phone);
}

export function updateContact(keyContact, name, email, phone) {
  const allContact = getAllContacts();

  allContact.filter((e) => {
    if (e.phone == keyContact) {
      if (phone) {
        e.phone = phone;
      }

      if (name) {
        e.name = name;
      }

      if (email) {
        e.email = email;
      }

      return e;
    }
  });

  localStorage.setItem("contact", JSON.stringify(allContact));
}

export function delItem(index) {
  let allContact = getAllContacts();
  allContact.splice(index, 1);

  localStorage.setItem("contact", JSON.stringify(allContact));

  return allContact;
}

export function searchContacts(textSearch) {
  return getAllContacts().filter((e) =>
    e.name.toLowerCase().includes(textSearch.toLowerCase())
  );
}
