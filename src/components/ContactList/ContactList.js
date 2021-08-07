import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { handleFilteredContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(handleFilteredContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.name}>{name}</p>
          <p className={styles.number}>{number}</p>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDeleteContact(id)}
          >
            &#x2715;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
