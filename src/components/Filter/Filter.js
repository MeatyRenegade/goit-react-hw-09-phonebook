import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterChange } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleChange = useCallback(
    e => {
      dispatch(handleFilterChange(e.target.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.filter_box}>
      <h2>- Contacts -</h2>
      <form>
        <div className={styles.user_box}>
          <input
            className={styles.input}
            type="text"
            name="search"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={filter}
            onChange={handleChange}
          ></input>
          <label htmlFor="search">Search</label>
        </div>
      </form>
    </div>
  );
};

export default Filter;
