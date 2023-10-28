import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, selectFilterValue } from 'redux/filterSlice';
import { StyledInput } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  return (
    <StyledInput
      type="text"
      value={filterValue}
      onChange={evt => {
        dispatch(filterContacts(evt.target.value));
      }}
    />
  );
};
