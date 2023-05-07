import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactCard from '../ContactCard/ContactCard';
const shortid = require('shortid');


export default function ContactList( { list, removeCard }) {
  
  return (
    <ul className={css.contactList}>
      {list.map(item => {
        return (
          <ContactCard
            name={item.name}
            number={item.number}
            id={item.id}
            key={shortid.generate()}
            deleteCard={removeCard}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  removeCard: PropTypes.func.isRequired,
};