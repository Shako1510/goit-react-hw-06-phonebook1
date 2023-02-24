import PropTypes from 'prop-types';
import { ListContacts, ButtonDel } from './ContactsStyled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contacts = () => {
    const filters = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const contactFiltering = () => {

        const normalizedFilter = filters.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    }

    const visibleContacts = contactFiltering();



    return (
        <ListContacts>
            {visibleContacts.map(({ id, name, number }) =>
                <li key={id}>
                    {name}: {number}
                    <ButtonDel type='button' onClick={() => dispatch(deleteContact(contacts.id))}>Delete</ButtonDel>
                </li>)
            }

        </ListContacts>
    )
}


export default Contacts;

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import { ListContacts, ButtonDel } from './ContactsStyled';
// import { getContacts } from 'redux/selectors';
// import { useSelector } from 'react-redux';

// const Contacts = ({ contacts, onClick }) => {
//     return (
//         <ListContacts>
//             {contacts.map(({ id, name, number }) =>
//                 <li key={id}>
//                     {name}: {number}
//                     <ButtonDel type='button' onClick={() => onClick(id)}>Delete</ButtonDel>
//                 </li>)
//             }

//         </ListContacts>
//     )
// }


// export default Contacts;

// Contacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onClick: PropTypes.func.isRequired,
// };