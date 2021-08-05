import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleChange } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.filter_box}>
    <h2>- Contacts -</h2>
    <form>
      <div className={styles.user_box}>
        <input
          className={styles.input}
          type="text"
          name="search"
          required
          value={value}
          onChange={onChange}
        ></input>
        <label>Search</label>
      </div>
    </form>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(handleChange(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
