import { useState } from "react";
import "./styles.scss";
import { findContact, getAllContacts, saveContact } from "../../utils/helpers";
import Header from "../../components/Header";

function NewContact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  function checkInfo(e) {
    e.preventDefault();

    const regexPhone = /^(?:\(\d{2}\)\s?)?(?:\d{2}\s?)?\d{4,5}-?\d{4}$/;

    if (phoneInput && regexPhone.test(phoneInput) && !findContact(phoneInput)) {
      saveContact(getAllContacts(), nameInput, phoneInput, emailInput);

      /* Clear info */
      setNameInput("");
      setPhoneInput("");
      setEmailInput("");

      open("/", "_self");
    } else {
      setPhoneInput("");
    }
  }

  return (
    <div className="newcontact-screen">
      <Header title={"New Contact"} />

      <form>
        <div className="data-update-database">
          <label htmlFor="name-input">Contact name</label>

          <input
            type="text"
            placeholder="Type name of contact"
            id="name-input"
            name="name-input"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div className="data-update-database">
          <label htmlFor="email-input">Contact e-mail</label>
          <input
            type="email"
            placeholder="Type email of contact"
            id="email-input"
            name="email-input"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>

        <div className="data-update-database">
          <label htmlFor="phone-input">Contact phone</label>
          <input
            type="tel"
            placeholder="Type phone of contact"
            id="phone-input"
            name="phone-input"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </div>
      </form>

      {/* Button to save data input */}
      <button onClick={checkInfo}>Save & Back</button>
    </div>
  );
}

export default NewContact;
