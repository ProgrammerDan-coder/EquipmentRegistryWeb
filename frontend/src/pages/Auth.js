import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
//import {LOGIN_ROUTE, REGISTRATION_ROUTE, TASK_ROUTE} from "../utils/consts";
// import {logIn, registration} from "../http/userAPI";
// import {observer} from "mobx-react-lite";
import {Context} from "../index";

// const Auth = observer(() => {
   function Auth() {
  
    const [login, setLogin ] = useState('')
    const [password, setPassword ] = useState('')
    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastName ] = useState('')

    // const click = async () => {
    //     try {
    //         let data
    //         if (isLogin) {
    //             data = await logIn(login, password)
    //         } else {
    //             data = await registration(login, password, firstName, lastName)
    //             console.log(data)
    //         }
    //          user.setUser(user)
    //          user.setIsAuth(true)
    //          history.push(TASK_ROUTE)
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }

    // }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column'>
                
                        <div>
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ID...'
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                            />

                            <Form.Control
                                className='mt-3'
                                placeholder='Введите Пароль...'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        :
                        <div>
                            <Form.Control
                                className='mt-3'
                                placeholder='Введите ID...'
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                type='text'
                            />

                            <Form.Control
                                className='mt-3'
                                placeholder='Введите Пароль...'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type='password'

                            />

                            <Form.Control
                                className='mt-3'
                                placeholder='Повторите Пароль...'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type='password'

                            />

                            <Form.Control
                                className='mt-3'
                                placeholder='Введите Имя...'
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                type='text'
                            />

                           
                        </div>
                    
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <Button className='mt-3' variant={'outline-success'}  >
                            Регистрация
                        </Button>
                        {/* {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь </NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите! </NavLink>
                            </div>
                        } */}
                    </Row>

                </Form>
            </Card>
        </Container>
    );
}

export default Auth;