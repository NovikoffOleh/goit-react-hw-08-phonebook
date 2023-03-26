import { selectIsAuth } from 'components/redux/selectors';
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const Contacts = () => {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return (
      <div>
        <ContactForm />
        <h2>Контакти</h2>
        <Filter />
        <ContactList />
      </div>
    );
  } else {
  }
};

