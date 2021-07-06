import React, { Component } from 'react';
import styles from './Form.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <form className={styles.ContactForm}>
        <label className={styles.FormElem} htmlFor="">
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={styles.FormElem}
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label className={styles.FormElem} htmlFor="">
          Phone number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={styles.FormElem}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
