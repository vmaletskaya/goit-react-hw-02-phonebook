import css from './Filter.module.css';
import PropTypes from 'prop-types';

 const Filter = ({ filterValue, onChange }) => {
   return (
     <label className={css.label}>
       <input
         type="text"
         className={css.filterField}
         value={filterValue}
         onChange={onChange}
       />
     </label>
   );

};
 
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
   

export default Filter