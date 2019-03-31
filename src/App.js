import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const divStyle={
//   color:'red',
//   fontSize:'2em'
// }

// const divStyleMessage={
//   color:'lightblue',
//   fontSize:'3em',
//   textAlign:'center'
// }

const user ={
  firstName:'Loi',
  lastName:'Tran',
  email:'phuocloi2203@gmail.com',
}
//array user
const users = [
  {firstName:'Loi', lastName:'Tran', email:'phuocloi@gmail.com'},
  {firstName:'A', lastName:'Tran', email:'phuocA@gmail.com'},
  {firstName:'B', lastName:'Tran', email:'phuocB@gmail.com'},
  {firstName:'B', lastName:'Tran'},
]

//check mail
// function checkMail(email){
//   const mailErro
//   if(email===undefined)
//     {
//        mailErro = (
//         <div style={{color:'grey'}}>{"No email"}</div>
//       )
//     }
//     else
//     {
//        mailErro = (
//         <div style={{color:'grey'}}>{email}</div>)
//     }
// }

function User(props) {
  const user=props.user
  //if(!user.email) {user.email='Khong co mail'}
  const element = (
    <div>
      <div style={{fontSize:22}}>{getFullName(user.firstName, user.lastName)}</div>
      <div style={{color:user.email ?'grey':'red', fontStyle: user.mail ? 'initinal':'italic' }}> {user.email||'Khong co mail'}</div> 
      {/* <div>{user.checkMail(user.email)}</div> */}
    </div>
  )
    return element
}

function getFullName(firstName, lastName){
  return firstName +' '+ lastName
}
const App = () => {
  const element = users.map(x => {
    return <User user={x}/>
  })
    // const firstName ="Loi"
    // const lastName = " Tran"
    // const element = <div style={divStyle}>Hello {getFullName(firstName, lastName)}</div>
    // const welcome = <div style={divStyleMessage}
    //   style={{
    //     color:'white',
    //     backgroundColor:'black',
    //     padding:8,
    //     margin:'20px 0'
    //   }}
    // > welcome message{element}</div>
    // const showName=<div>{user.firstName +' '+ user.lastName}</div>
    // const showEmail=<div className="App-header">{showName} {user.email}</div>
    return element
}

export default App;
