import React, { Component } from "react";

export class ContactInfoComponent extends Component {
  render() {
    return (
      <div className="contact-textbox">
        <div className="contact-textbox-size contact-textblock yellow-black-textblock">
          {this.props.nameOfContact}
          <div className="contact-textbox-size contact-textblock-info ">
            {this.props.contactInfo}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfoComponent;
