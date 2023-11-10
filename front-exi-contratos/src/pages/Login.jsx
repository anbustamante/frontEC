import React from 'react'
import Header from '../components/Header'
import InputBox from '../components/InputBox'

const Login = () => {
  return (
    <>      
        <Header title='Bienvenidos' />
        <InputBox type='user' title='Usuario' ph='jperez@exisoft.com'/>
        <InputBox type='password' title='Contraseña' ph='passw0rd' />
    
    </>
  )
}

export default Login