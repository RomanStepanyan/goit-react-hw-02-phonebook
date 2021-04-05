import PropTypes from 'prop-types';
import s from './FilterContacts.module.css';

const FilterContacts = ({ filter, onChange }) => {
  return (
    <input
      className={s.input}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Search contact"
    />
  );
};
export default FilterContacts;

FilterContacts.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
