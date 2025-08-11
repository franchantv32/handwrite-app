import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig';

initializeApp(firebaseConfig);
const auth = getAuth();

export default function Login(){
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const onLogin = async ()=>{
    try{
      await signInWithEmailAndPassword(auth, email, pass);
      alert('Logged in');
    }catch(e){ alert('Login error: '+e.message) }
  };
  return (
    <div style={{padding:20}}>
      <h3>Login</h3>
      <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder='Password' type='password' value={pass} onChange={e=>setPass(e.target.value)} /><br/>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}
