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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  state = { submitted: false };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
      .then(() => this.setState({ submitted: true }))
      .catch(error => alert(error));
  };

  render() {
    const { submitted } = this.state;
    return submitted ? (
      <div>Thank you :)</div>
    ) : (
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
            <input type="text" name="first-name" onChange={this.handleChange} required />
          </div>
          <div className="input-group">
            <label>Last name:</label>
            <input type="text" name="last-name" onChange={this.handleChange} required />
          </div>
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={this.handleChange} required />
        </div>
        <div className="input-group">
          <label>Subject:</label>
          <input type="text" name="subject" onChange={this.handleChange} required />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea rows="6" name="subject" onChange={this.handleChange} required />
        </div>
        <div className="button-container">
          <Button type="submit">Send message</Button>
        </div>
      </StyledForm>
    );
  }
}

export default ContactForm;
