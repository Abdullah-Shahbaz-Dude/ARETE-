import React from "react";
import "./CSS/Contact.css";
import img from "../assets/images/contactUs/contact us.jpg";

const Contact = () => {
  return (
    <section>
      <div className="contact-hero">
        <h1>Contact US For Booking Your Therapy</h1>
      </div>

      <iframe
        className="map-img"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424953.29658916796!2d73.04788476093296!3d33.68442020613186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740345081957!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
