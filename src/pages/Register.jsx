import React, { useState } from 'react'
import camera from '../img/camera.png' 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


export const Register = () => {

  const[error, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    //console.log(e.target[0].value)
    const displayName =e.target[0].value;
    const email =e.target[1].value;
    const password =e.target[2].value;
    const file =e.target[3].files[0];

    try {
      //crear usuario con correo y contraseña
      const res = await createUserWithEmailAndPassword(auth, email, password)

//hace referencia de almacenamiento para el archivo del avatar
const storageRef = ref(storage, `${displayName}-avatar`);

//subir archivo de avatar
const uploadTask = uploadBytesResumable(storageRef, file);

//observadores de la carga del archivo:
uploadTask.on(
  "state_changed",
  null,
  (error) => {
    setError(true)
  }, 
  async() => {
    try{
      //obtener URL de descarga del avatar    
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    //.then(async(downloadURL) => {
    //  console.log('File available at', downloadURL);

    //actualizar perfil del usuario con el nombre y la URL del avatar
    await updateProfile(res.user,{
      displayName, 
      photoURL: downloadURL,
    });

    //crear documento de usuario en Firestore
    await setDoc(doc(db, "users",res.user.uid), {
      uid: res.user.uid,
      displayName,   //id
      email,
      photoURL :downloadURL,
    }); 

    //crear documento de chats del usauario en firestore
    await setDoc(doc(db, "userChats", res.user.uid), {});

    //redireccionar al usuario a la pagina principal
    navigate("/");
  
} catch (error) {
  setError(true)
}
}
);
    }catch(error){
      setError(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat Gym</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Display Name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <input style={{display:'none'}} type='file' id='file'/>
          <label htmlFor='file'>
            <img src={camera} alt='' />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}
