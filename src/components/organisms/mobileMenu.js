import React from 'react';
import '../../utils/styles/MobileMenu.css'

const MobileMenu = ({ menuState }) => {
  return (
    <>
      {menuState.state && (
        <div className='modalOverlay' onClick={()=>menuState.setState(!menuState.state)}>
          <div className='modalContent' onClick={(e) => e.stopPropagation()}>
            <h2>This is a full-screen modal</h2>
            <p>You can put any content here.</p>
            <button onClick={()=>menuState.setState(!menuState.state)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;