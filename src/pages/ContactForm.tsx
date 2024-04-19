import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
      toast.error(`${t("emailEmpty")}`, {
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
          toast.success(`${t("emailSend")}`, {
            position: "top-center",
            hideProgressBar: true,
          });
        })
        .catch((error: any) => {
          toast.error(`${t("emailFail")}`, {
            position: "top-center",
            hideProgressBar: true,
          });
        });
    }
  };

  return (
    <SectionContainer id={`${t("contact.id")}`}>
      <SectionTitle>{t("contact.title")}</SectionTitle>
      <SectionDescription>{t("contact.description")}</SectionDescription>
      <InnerContainer>
        <Form ref={form} onSubmit={handleContactSubmit}>
          <Input
            type="text"
            name="name"
            placeholder={`${t("contact.name")}`}
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder={`${t("contact.email")}`}
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextArea
            name="message"
            placeholder={`${t("contact.message")}`}
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
          />
          <SubmitButton type="submit">{t("contact.button")}</SubmitButton>
        </Form>
      </InnerContainer>
    </SectionContainer>
  );
};

export default ContactForm;
