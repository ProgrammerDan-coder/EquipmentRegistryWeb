import React, {useState} from 'react';
import './styles/App.css';
import companyLogo from './images/BSTUImg.jpg'
import searchIcon from './images/search.jpg'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="page-container">
    
    <div className="post">
      <img className='img_log' src={companyLogo} alt="BSTU logo"/>
        
          <h1 className='reestr'>Реестр оборудования БГТУ</h1>
       
          <div className='block'>
            <div className='registr'>Регистрация</div>
            <div className='auth'>Вход</div>
          </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='main_tite'>
      <p className='p'>Главная</p>
      <p className='p'> Добавить оборудования</p>
    </div>
    <div className='search_block'>
    <h2 className='equipment_text'>Оборудование</h2>
    {/* <img className='img_log' src={searchIcon} alt="BSTU logo"/> */}
    <input className='input' type="text" />
    <button className='button_input'>Поиск &gt;</button>
    </div>    
    <div className="content-wrap"/>
      
    
    <Footer/>
    </div>
  );
}

export default App;
