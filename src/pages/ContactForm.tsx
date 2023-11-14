import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FormContainer,
  Form,
  Input,
  TextArea,
  SubmitButton,
  InnerContainer,
  InfoCard,
} from "../styles/contact";
import { Header } from "../styles/general";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
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
    console.log("Form Data:", formData);
  };

  return (
    <FormContainer className="Contact">
      <Header>Interested to work together? Let's talk</Header>
      <InnerContainer>
        <InfoCard>
          <p>Tareez Ghandour</p>
          <p>052-4837648</p>
          <p>tareezghandour15@gmail.com</p>
        </InfoCard>
        <Form onSubmit={handleContactSubmit}>
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
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </InnerContainer>
    </FormContainer>
  );
};

export default ContactForm;
