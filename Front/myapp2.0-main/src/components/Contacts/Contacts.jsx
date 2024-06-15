import React, { Component } from "react";
import ContactInfoComponent from "./ContactInfoComponent";

import "./contactsStyle.css";

export default function Contacts() {
  return (
    <div className="contact contact-blue-yellow-textblock">
      <div className="contact-type-wrapper">
        <div className="contact-name textblock yellow-black-textblock">
          ALL CONTACTS
        </div>
      </div>
      <div className="contact-main-wrapper">
        <ContactInfoComponent
          nameOfContact="Customer Support:"
          contactInfo="customer.support@gmail.com"
        />
        <ContactInfoComponent
          nameOfContact="Book room via Phone/Email:"
          contactInfo="book.room@gmail.com +38093123456789"
        />
        <ContactInfoComponent
          nameOfContact="Carrier center:"
          contactInfo="carrier.center@gmail.com"
        />
      </div>
    </div>
  );
}
