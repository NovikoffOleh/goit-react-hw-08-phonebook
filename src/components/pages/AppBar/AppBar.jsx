import { selectIsAuth } from 'components/redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import s from '../AppBar/AppBar.module.css';

export const AppBar = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <header>
      <ul className={s.list}>
        <li className={s.items}>
          <Link to="/">До дому</Link>
        </li>

        {!isAuth && (
          <li className={s.items}>
            <NavLink to="/register">Реєструйся</NavLink>
          </li>
        )}
        {isAuth && (
          <li className={s.items}>
            <NavLink to="/contacts">Контакти</NavLink>
          </li>
        )}
        {!isAuth && (
          <li className={s.items}>
            <NavLink to="/login">Логін</NavLink>
          </li>
        )}
        {isAuth && <UserMenu />}
      </ul>
    </header>
  );
};
