import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <ContactEditor />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </>
    </HelmetProvider>
  );
}
