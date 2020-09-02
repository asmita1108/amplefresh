import React, { Component } from "react";

import Field from "../common/field";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        id: "name",
        placeholder: "Your good name",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        id: "name",
        placeholder: "Your email",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        id: "name",
        placeholder: "Your phone number",
      },
    ],
    [
      {
        name: "msg",
        elementName: "textarea",
        type: "text",
        id: "name",
        placeholder: "Type your message",
      },
    ],
  ],
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      msg: "",
    };
  }

  submtForm = (e) => {
    e.preventDefault();
    alert("Thankyouy !! Sumbitted your request successfuly.");
  };
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form
            id="contactForm"
            onSubmit={(e) => this.submtForm(e)}
            name="sentMessage"
            novalidate="novalidate"
          >
            <div className="row align-items-stretch mb-5">
              {fields.sections.map((section, sectionindex) => {
                return (
                  <div className="col-md-6" key={sectionindex}>
                    {section.map((field, i) => {
                      return (
                        <Field
                          {...field}
                          key={i}
                          value={this.state[field.name]}
                          onChange={(e) =>
                            this.setState({
                              [field.name]: e.target.value,
                            })
                          }
                        />
                      );
                    })}
                  </div>
                );
              })}
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
            s
          </form>
        </div>
      </section>
    );
  }
}
export default Contact;
