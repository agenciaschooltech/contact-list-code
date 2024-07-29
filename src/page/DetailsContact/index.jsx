import { useParams } from "react-router-dom";
import "./styles.scss";
import { useState } from "react";
import { findContact, updateContact } from "../../utils/helpers";

function DetailsContact() {
  const params = useParams();
  const dataContact = findContact(params.contact);
  console.log(dataContact.name);

  const [phonePlaceholderText] = useState(dataContact.phone);
  const [namePlaceholderText] = useState(dataContact.name);
  const [emailPlaceholderText] = useState(dataContact.email);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  return (
    <div className="details-contact">
      <h2>Contact Details</h2>

      <form>
        <div className="data-update-database">
          <label htmlFor="name-input">Contact name</label>

          <input
            type="text"
            placeholder={namePlaceholderText}
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
            placeholder={emailPlaceholderText}
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
            placeholder={phonePlaceholderText}
            id="phone-input"
            name="phone-input"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </div>
      </form>

      {/* Button to save data input */}
      <button
        onClick={() => {
          if (!findContact(phoneInput)) {
            updateContact(params.contact, nameInput, emailInput, phoneInput);
            window.open("/", "_self");
          } else {
            setPhoneInput("");
          }
        }}
      >
        Save & Back
      </button>
    </div>
  );
}

export default DetailsContact;
