import css from './ContactCard.module.css';
import { Component } from 'react';

export default class ContactCard extends Component {

  handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    this.props.deleteCard(currentId);
  };

  render() {
    const { name, number, id } = this.props;
    return (
      <li className={css.cardItem} title={name} data-id={id}>
        <button
          type="button"
          className={css.button}
          onClick={this.handleDeleteCard}
        ></button>
        <p className={css.contact}>
        <span className={css.value}>{name}: {number}</span>
        </p>
      </li>
    );
  }
}