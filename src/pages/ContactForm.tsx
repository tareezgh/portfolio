import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import {
  Form,
  Input,
  TextArea,
  SubmitButton,
  InnerContainer,
} from "../styles/contact";
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "../styles/style";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
emailjs.init("KnvuHmCPhQg0PD8G7");

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const emailParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    if (!name || !email || !message) {
      toast.error("Please fill in all fields", {
        position: "top-center",
        hideProgressBar: true,
      });
    } else {
      emailjs
        .send(
          "service_vtnb7to",
          "template_rxb0tm4",
          emailParams,
          "KnvuHmCPhQg0PD8G7"
        )
        .then(() => {
          toast.success("Email sent successfully", {
            position: "top-center",
            hideProgressBar: true,
          });
        })
        .catch((error: any) => {
          toast.error("Error sending email, try again", {
            position: "top-center",
            hideProgressBar: true,
          });
        });
    }
  };

  return (
    <SectionContainer className="Contact">
      <SectionTitle>Let's Collaborate</SectionTitle>
      <SectionDescription>
        Are you interested in leveraging my expertise for your project? I am
        eager to explore innovative opportunities and contribute to the success
        of your team.
      </SectionDescription>
      <InnerContainer>
        <Form ref={form} onSubmit={handleContactSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </InnerContainer>
    </SectionContainer>
  );
};

export default ContactForm;
