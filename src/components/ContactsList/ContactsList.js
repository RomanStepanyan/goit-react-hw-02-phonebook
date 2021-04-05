import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import s from './ContactsList.module.css';

const ContactsListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={s.contact}>
      {name}: {phone} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem key={uuid()} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func,
};
