import css from './Filter.module.css';

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
export default Filter