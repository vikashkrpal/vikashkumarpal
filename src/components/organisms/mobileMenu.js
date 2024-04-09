import React from 'react';
import '@/utils/styles/MobileMenu.css'
import Image from 'next/image';
import { FaAngleLeft, FaTimes } from 'react-icons/fa';
import ThemeButton from '../atom/themeButton';
import navBarMenus from '@/utils/menuLibrary';
import MobileMenuThemeButton from '../atom/mobileMenuThemeButton';
import { bindState } from '@/utils/globalFunctions';

const MobileMenu = ({ menuState }) => {
  const [subMenuObject, setSubMenuObject] = React.useState({});
  return (
    <>
      {menuState.state && (
        <div className='modalOverlay' onClick={()=>menuState.setState(!menuState.state)}>
          <div className='modalContent' onClick={(e) => e.stopPropagation()}>

            <div className='bg-dark py-1'>
              
              <div className="row d-flex align-items-center my-2">
                
                <div className="col ">
                            
                  <Image
                    src={require('../../asserts/logos/Vikash-Logo-Black-BG.png')}
                    alt='logo image'
                    height={45}
                    width={"130"}
                  />
                </div>
                <div className="col text-end me-2">
                  <button className='btn bg-black p-1' onClick={()=>{
                    setSubMenuObject({})
                    menuState.setState(!menuState.state)
                    }}>
                    <FaTimes className='text-white' size={'30'}/>
                  </button>
                </div>
                
              </div>
          
            </div>

            <div className='px-4 mt-4' style={{ overflow:'scroll', maxHeight:"75%" }}>
              
            {
              navBarMenus.map((parentLinks,index) =><div key={index} style={{ display: (Object.keys(subMenuObject).length > 0 ) ? 'none' :'inline' }}> <MobileMenuThemeButton link={parentLinks} subMenuState={bindState(subMenuObject,setSubMenuObject)} /> </div>)
            }

            {
              (Object.keys(subMenuObject).length > 0 && (subMenuObject.childLinks).length > 0) && <span style={{ fontSize:18, fontFamily:'Gt walsheim bold', cursor:'pointer' }} className='text-light' 
              onClick={()=>setSubMenuObject({})}
              ><FaAngleLeft size={22} className='mb-1' /> {subMenuObject.title}</span>
            }
            {
              (Object.keys(subMenuObject).length > 0 && (subMenuObject.childLinks).length > 0) && (subMenuObject.childLinks).map((menu,index) => <div key={index} style={{ display: Object.keys(subMenuObject).length > 0 ? 'inline' :'none' }}> <MobileMenuThemeButton link={menu} /> </div>)
            }
              
           
              
            </div>
            <div style={{ position: 'absolute', bottom: '5%', left: '60%', transform: 'translateX(-50%)', width: '100%' }}>
                <ThemeButton text={"Book a Strategy Call"} addStyle={{ width: '80%' }} />
              </div>

          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;