import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page-heading">
      <h1>Contact Page</h1>
      <Link to="/editcontact/10">Edit Your Contact</Link>
    </div>
  );
};

export default Contact;
