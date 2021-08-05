import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  duplicateContactCheck = (array, name) => {
    return array.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { onSubmit, contacts } = this.props;

    const duplicateContact = this.duplicateContactCheck(contacts, name);

    duplicateContact
      ? alert(`${name} is already in contacts`)
      : onSubmit(this.state);

    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.contact_box}>
        <h1>Phonebook</h1>

        <form onSubmit={this.handleSubmit}>
          <div className={styles.user_box}>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
            />
            <label>Contact</label>
          </div>
          <div className={styles.user_box}>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может 
             с +"
              required
              value={number}
              onChange={this.handleChange}
            />
            <label>Number</label>
          </div>

          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: allContacts => dispatch(addContact(allContacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
