import "./styles.scss";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import {
  delItem,
  findContact,
  getAllContacts,
  saveContact,
  searchContacts,
} from "../../utils/helpers";
import Header from "../../components/Header";

function Contact() {
  const [listContacts, setListContacts] = useState([]);
  const [textCardNewContact, setTextCardNewContact] = useState("+");

  const [nameText, setNameText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [emailText, setEmailText] = useState("");

  const [textSearch, setTextSearch] = useState("");

  function showOrHiddenContactContainer() {
    const contactContainer = document.querySelector(
      ".add-new-contact-container"
    );

    if (textCardNewContact == "+") {
      contactContainer.classList.add("show-contact-container");
      setTextCardNewContact("x");
    } else {
      contactContainer.classList.remove("show-contact-container");
      setTextCardNewContact("+");
    }
  }

  function checkInfo(e) {
    e.preventDefault();

    const regexPhone = /^(?:\(\d{2}\)\s?)?(?:\d{2}\s?)?\d{4,5}-?\d{4}$/;

    if (phoneText && regexPhone.test(phoneText) && !findContact(phoneText)) {
      setListContacts(
        saveContact(listContacts, nameText, phoneText, emailText)
      );

      /* Clear info */
      setNameText("");
      setPhoneText("");
      setEmailText("");

      showOrHiddenContactContainer();
    } else {
      setPhoneText("");
    }
  }

  useEffect(() => {
    if (getAllContacts()) {
      setListContacts(getAllContacts());
    }
  }, []);

  useEffect(() => {
    searchName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  function searchName() {
    setListContacts(searchContacts(textSearch));
  }

  return (
    <div className="contacts">
      <Header title={"Contact"} />
      <form id="search-form" onSubmit={searchName}>
        <input
          type="text"
          placeholder="Search here"
          value={textSearch}
          onChange={(e) => {
            setTextSearch(e.target.value);
            searchName();
          }}
        />
        <input type="submit" value="Search" />
      </form>

      <div className="all-contacts">
        {listContacts.map((value, index) => (
          <Card
            nameCard={value.name}
            phoneContact={value.phone}
            key={index}
            delItemCard={() => setListContacts(delItem(index))}
          />
        ))}
      </div>

      <div
        className="add-new-contact-card"
        onClick={showOrHiddenContactContainer}
      >
        <p>{textCardNewContact}</p>
      </div>

      <div className="add-new-contact-container">
        <h2>New contact</h2>

        <form onSubmit={checkInfo}>
          <input
            type="text"
            placeholder="Type your name"
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Type your phone"
            value={phoneText}
            onChange={(e) => setPhoneText(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Type your email"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
          />

          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
