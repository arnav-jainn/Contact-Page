import React from "react";
import "../css/ContactForm.css";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [text,setText] = useState();

  const onSubmit = (event) => {

    event.preventDefault();         //prevents from reloading the page on every submit

    setName(event.target[0].value);         //extracting the value from the form
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }

  return (
    <div className="ContactForm">
      <div className="ContentForm">
        <div className="topBtn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
          text="VIA CALL" 
          icon={<MdOutlineCall fontSize="24px" />} />
        </div>
        <Button
          IsOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className="form_control">
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>
            Name: {name}
          </div>
          <div>
          Email: {email}
          </div>
        </form>
        <div>
        Text: {text}
        </div>
      </div>

      <div className="ContactImg">
        <img src="contact.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
