import { useState } from "react";
import "./ContactStyle.css";
import {Form, Field, Formik, ErrorMessage } from "formik";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("You email...");
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleFielClick = () => {
    setMessage("Ej: john@gmail.com");

  }

  const form = useRef();


  const validate = (values) => {
    const errors = {};

    if (!values.gmail) {
      errors.gmail = 'Email is required ✘';

    } else if (!emailRegex.test(values.gmail)) {
      errors.gmail = 'Invalid email address ✘';
    } 

    return errors;
  };

  return (
    <div className="contact__container">
        <h2>contact me</h2>
        <Formik 
            initialValues={{gmail: ""}}
            validate={validate}
            onSubmit = {(values) => {
                console.log(values);
                setSubmit(true);
                setTimeout(() => {
                  setSubmit(false);
                },2000);

                emailjs.sendForm('service_r1g1c29', 'template_u0rwbkh', form.current, 'lbG2--i5BFw66Hs5T')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            }}
            
        >
        <Form className="submit__form" ref={form}>
            <div className="sumbit__container">
              <Field onClick={handleFielClick} name="gmail" type="gmail" placeholder={message} />
              <button className="contact__btn" type="submit">send</button>
            </div>
            <p className={submit ? "" : "invisible"}>{"Thanks for contacting me! I'll answer you later ✓"}</p>
            <ErrorMessage name="gmail" component="div" className="error__message" />
        </Form>
        </Formik>
    </div>
  )
}
