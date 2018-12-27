import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-bottom: 0;

  .name-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${props => props.theme.bp_medium}) {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
    }
  }

  .button-container {
    text-align: right;
    margin-top: 24px;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.primary600};
  color: ${props => props.theme.primary900};
  padding: 8px 16px;

  &:hover {
    background: #24a2dc;
  }

  &:active {
    background: #1687bb;
  }

  @media (max-width: ${props => props.theme.bp_medium}) {
    width: 100%;
  }
`;

const Success = styled.div`
  background: ${props => props.theme.success100};
  border: 1px solid ${props => props.theme.success500};
  border-radius: 4px;
  color: ${props => props.theme.success500};
  padding: 8px;
`;

const Error = styled.div`
  background: ${props => props.theme.error100};
  border: 1px solid ${props => props.theme.error500};
  border-radius: 4px;
  color: ${props => props.theme.error500};
  padding: 8px;
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  initialState = {
    submitted: false,
    error: '',
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  state = this.initialState;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, submitted: false, error: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => this.setState({ ...this.initialState, submitted: true }))
      .catch(() => this.setState({ ...this.initialState, error: true }));
  };

  render() {
    const { submitted, error } = this.state;
    return (
      <StyledForm
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className="name-row">
          <div className="input-group">
            <label>First name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Last name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea
            rows="6"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
        </div>
        {submitted && (
          <Success>
            Thank you, your message was sent successfully. I will get in touch soon.
          </Success>
        )}
        {error && (
          <Error>
            Something went wrong. Please, try again or email me at mceuteixeira1@gmail.com.
          </Error>
        )}
        <div className="button-container">
          <Button type="submit">Send message</Button>
        </div>
      </StyledForm>
    );
  }
}

export default ContactForm;
