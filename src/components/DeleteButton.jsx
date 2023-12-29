import React from 'react';
import PropType from 'prop-types';
import { FiXCircle } from 'react-icons/fi';
 
function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}>
    <FiXCircle/>
  </button>
}
 
DeleteButton.propTypes = {
  id: PropType.number.isRequired,
  onDelete: PropType.func.isRequired
}

export default DeleteButton;