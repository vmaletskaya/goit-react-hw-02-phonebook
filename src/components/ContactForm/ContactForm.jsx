import css from './ContactForm.module.css';
import { Component } from 'react';



export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlerOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {

    const { name, number } = this.state;
    return (
      <form action="" className={css.form} onSubmit={this.handlerOnSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onInputValue}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onInputValue}
          />
        </label>
        <button type="submit" className={css.addContact}>
          Add Contact
        </button>
      </form>
    );
  }
}