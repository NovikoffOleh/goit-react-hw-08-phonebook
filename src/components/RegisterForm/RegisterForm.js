import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from '../RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.box}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Імʼя
          <input type="text" name="name" />
        </label>
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>
        <button className={styles.btn} type="submit">
          Реєстрація
        </button>
      </form>
    </div>
  );
};
