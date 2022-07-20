import React, {useState} from 'react';
import './styles/App.css';
import companyLogo from './images/BSTUImg.jpg'
import searchIcon from './images/search.jpg'
import euipImg from './images/equipment.jpg'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import Footer from './Components/Footer';
import Select from 'react-select';
import { tagsOptions } from './Components/tags/data.ts';
import { DeptagsOptions } from './Components/tags/dep_data.ts';
import MySelect from './Components/UI/MySelect.tsx';


function App() {



  return (
    <div className="page-container">
    
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
      <input className='input' type="text" />  &nbsp;
      <button className='button_input'>Поиск &gt;</button>
    </div>    
    <br/>
    {/* Вывод катрочек и фильтр */}
    <div className='hard'>
      <div className='equipment_card'>
        <img className='equipment_img' src={euipImg}/>
        
      </div>
    {/* Фильтр для поиска */}
      <div className='filter_search'>
        <p style={{color:'#00A0DC'}}>Фильтры</p>
        <MySelect/>
        
        <br/>
        <br/>
        <Select
          className="basic-single"
          classNamePrefix="select"
          
          name="color"
          options={DeptagsOptions}
        />

           <br/>
           <br/>
        <Select
            
            isMulti
            name="colors"
            options={tagsOptions}
            className="basic-multi-select"
            classNamePrefix="select"
  />

      </div>
    </div>
    {/* Footer */}
    <div className="content-wrap"/>
    <Footer/>
    </div>


  );
}

export default App;
