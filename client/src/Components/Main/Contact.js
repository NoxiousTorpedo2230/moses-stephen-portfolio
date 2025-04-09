import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMapMarkerAlt,  faEnvelope,  faPhoneAlt,  faLanguage,  faClock,} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    status: null,
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({ submitting: true, status: null, message: "" });
    
    // Get current date and time for the template
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const time = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      formattedDate: `${date} at ${time}`, // Combined date and time
      currentYear: new Date().getFullYear() // Add current year
    };

    const serviceID = "service_fa6ab2t";  
    const templateID = "template_w7l8bnr";
    const userID = "FeGjRDR4LDmXDbtG4";        
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        setFormStatus({
          submitting: false,
          status: "success",
          message: "Message sent successfully! I will get back to you soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Clear status after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitting: false, status: null, message: "" });
        }, 5000);
      },
      (error) => {
        setFormStatus({
          submitting: false,
          status: "error",
          message: "Something went wrong. Please try again later.",
        });
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <div className="contact-container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center mb-5">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={5} md={6} className="mb-4 mb-md-0">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="info-content">
                  <h5>Location</h5>
                  <p>Chennai, Tamilnadu, India</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info-content">
                  <h5>Email</h5>
                  <p>moses.s2203@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="info-content">
                  <h5>Call</h5>
                  <p>+91 8682825331</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLanguage} />
                </div>
                <div className="info-content">
                  <h5>Languages</h5>
                  <p>English, Tamil, Telugu</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="info-content">
                  <h5>Working Hours</h5>
                  <p>Monday - Friday: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7} md={6}>
            <div className="contact-form-container">
              {formStatus.status && (
                <Alert
                  variant={
                    formStatus.status === "success" ? "success" : "danger"
                  }
                  className="mb-4"
                >
                  {formStatus.message}
                </Alert>
              )}

              <Form ref={form} onSubmit={handleSubmit}  style={{color:'whitesmoke'}}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!formErrors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!formErrors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    isInvalid={!!formErrors.subject}
                  />
                  <Form.Control.Feedback type="invalid" >
                    {formErrors.subject}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!formErrors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? "Send Message" : "Send Message"}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;