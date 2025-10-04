import React from 'react';
import './css/Onglet.css';

const Onglet = ({ menuDisabled, label, arrowDisabled, lastMenu, onClick }) => {
  return (
    <div className={`box_onglet ${menuDisabled && 'disabled'}`} onClick={onClick}>
    <div className='onglet'>
        {label}
    </div>
    {!lastMenu && <div className={`fleche ${arrowDisabled ? 'disabled' : ''}`}></div>}
</div>
  )
}

export default Onglet