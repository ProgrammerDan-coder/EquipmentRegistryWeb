import React from "react";
import "../styles/App.css";
import companyLogo from '../images/BSTUImg.jpg'


const Header = () => {
    return (
     
        
        <div className="post">
          <img className='img_log' src={companyLogo} alt="BSTU logo"/>
            
              <h1 className='reestr'>Реестр оборудования БГТУ</h1>
           
              {/* <div className='block'>
                <div className='registr'>Регистрация</div>
              </div>
              <div className='block_2'>
              <div className='auth'>Вход</div>
              </div>
               */}
    
              <div className='block'>
                <button className='registr' >Регистрация</button>
              </div>
              <div className='block_2'>
              <button className='auth'>Вход</button>
              </div>
              
        </div>
      
    )
}

export default Header;