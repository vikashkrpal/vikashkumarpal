import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const MobileMenuThemeButton = ({ link, subMenuState={} }) => {
    if(subMenuState.hasOwnProperty("setState")){
        if(link.childLinks.length > 0){
            return <div className="row d-flex align-items-center bg-black p-2 mt-3 " style={{ borderRadius:10, cursor:'pointer' }} onClick={()=>subMenuState.setState(link)}>
            <div className='col-1' >
           <span style={{color:'white' }} >
               {link.icon}
           </span>
       </div>
       <div className='col-9 mt-1' >
           <span style={{ fontSize:18, fontFamily:'Gt walsheim bold' }}>{link.title}</span>
       </div>
       <div className='col' >
           <FaAngleRight className='text-white'  />
       </div>
       </div>
        }else{
            return <Link className="row d-flex align-items-center bg-black p-2 mt-3 text-light" style={{ borderRadius:10, cursor:'pointer' }} href={link.link}>
            <div className='col-1' >
           <span style={{color:'white' }} >
               {link.icon}
           </span>
       </div>
       <div className='col-9 mt-1' >
           <span style={{ fontSize:18, fontFamily:'Gt walsheim bold' }}>{link.title}</span>
       </div>
       <div className='col' >
           <FaAngleRight className='text-white'  />
       </div>
       </Link>
        }
        
    }else {
        if(link.hasOwnProperty("sublinks")){
            return <>
            <hr className="text-light mt-4" />
            <span style={{ fontSize:18, fontFamily:'Gt walsheim bold' }} className='text-light' 
              > {link.name}</span>
              {
                (link.sublinks).map((sublink,i) => {
                    return <div className="bg-black p-1 px-2 my-1 my-md-2 my-lg-3" style={{ borderRadius:10 }} key={i}><Link  href={sublink.link} className="text-light  " >{sublink.title}</Link></div>
                })
              }
            </>

        }else{
            return <Link className="row d-flex align-items-center bg-black p-2 mt-3 text-light" style={{ borderRadius:10, cursor:'pointer' }} href={link.link}>
                    <div className='col-1' >
                        <span style={{color:'white' }} >
                            {link.icon}
                        </span>
                    </div>
                    <div className='col-9 mt-1' >
                        <span style={{ fontSize:16, fontFamily:'Gt walsheim bold' }}>{link.name}</span>
                        <div style={{ marginTop:-5 }}>
                        <span style={{ fontSize:15, fontFamily:'Gt walsheim pro' }}>{link.des}</span>
                        </div>

                    </div>
                    <div className='col' >
                        <FaAngleRight className='text-white' />
                    </div>
                </Link>
        }
    }
}

export default MobileMenuThemeButton;