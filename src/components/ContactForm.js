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

class ContactForm extends Component {
  render() {
    return (
      <StyledForm name="contact" method="POST" data-netlify="true">
        <div className="name-row">
          <div className="input-group">
            <label>First name:</label>
            <input type="text" name="first-name" />
          </div>
          <div className="input-group">
            <label>Last name:</label>
            <input type="text" name="last-name" />
          </div>
        </div>
        <div className="input-group">
          <label>Subject:</label>
          <input type="text" name="subject" />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea rows="6" name="subject" />
        </div>
        <div className="button-container">
          <Button type="submit">Send message</Button>
        </div>
      </StyledForm>
    );
  }
}

export default ContactForm;
