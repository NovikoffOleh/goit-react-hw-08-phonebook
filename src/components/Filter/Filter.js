import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/contacts/contacts.slice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = query => {
    dispatch(setQuery(query));
  };

  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <h2 className={styles.label}>Контакт</h2>
        <h3 className={styles.label}>Знайти контакт</h3>
        <input
          type="text"
          className={styles.input}
          name="filter"
          placeholder="Знайти"
          onChange={e => onChangeFilter(e.target.value)}
        />
      </form>
    </div>
  );
};
