import React, { Component } from "react";
import Field from "../common/field";
import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your good name",
      },
      {
        name: "email",
        elementName: "input",
        type: "text",
        placeholder: "Your email",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message *",
      },
    ],
  ],
};

class Contact extends Component {
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
            onSubmit={this.props.handleSubmit}
            name="sentMessage"
            noValidate="novalidate"
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
                          value={this.props.values[field.name]}
                          name={field.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[field.name]}
                          errors={this.props.errors[field.name]}
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
          </form>
        </div>
      </section>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),

  // validate: (values) => {
  //   const errors = {};

  //   Object.keys(values).map((v) => {
  //     if (!values[v]) {
  //       errors[v] = "Required";
  //     }
  //   });
  //   return errors;
  // },

  /* Validation using yup*/
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Come on bre. Your name is longer ")
      .max(8, "less")
      .required("You must give us your name"),

    email: Yup.string()
      .email("Not a valid email")
      .required("We need your email"),

    phone: Yup.string()
      .min(10, "Please provide your 10-digit phone number")
      .max(15, "Your phone number is too long")
      .required("We need your phone number to reach you"),

    message: Yup.string()
      .max(150, "Not more than 150 characters")
      .required("Please mention your query, so that we can solve that"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log("Values: ", values);
    alert("You have submitted successfully");
  },
})(Contact);
