import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email} = contactDetails;
  return (
    <main className="container mx-auto max-w-md section">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-gradient font-semibold md:font-bold pt-2 md:pt-4 md:pb-2">
        <a href={`mailto:${email}`} className="text-lg md:text-xl lg:text-2xl">
          {email}
        </a>
      </h3>
      
    </main>
  );
}

export default Contact;
