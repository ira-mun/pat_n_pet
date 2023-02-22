import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contacts.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pxr86ar",
        "template_1utapma",
        form.current,
        "kwva_rHrhaSBzbMBa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label className={styles.label} >Name</label>
        <input className={styles.input} type="text" name="user_name" />
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" name="user_email" />
        <label className={styles.label}>Message</label>
        <textarea className={styles.text} name="message" />
        <input className={styles.button} type="submit" value="Send" />
      </form>
      </div>
      </div>
  );
};

export default Contact;
