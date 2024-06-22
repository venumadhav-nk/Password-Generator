
import { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css"

function Passwordgenerator() {
    const [password,setPassword]= useState('');
    const [length, setLength]= useState(8);
    const [isNumbersAllowed ,setNumberAllowed]= useState(false);
    const [isSpecialCharsAllowed,setSepecialCharsAllowed] =useState(false);
    const handlecopy=()=>{
        navigator.clipboard.writeText(password)
        alert('Password was copied')
    }

    const generatePassword = () => {

        let passchars ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let pass = '';
        if (isNumbersAllowed) passchars +='0123456789';
        if (isSpecialCharsAllowed) passchars +='~!@#$%^&*()_+?';
        for (let i = 0; i < length; i++){
            pass += passchars[Math.floor(Math.random()*passchars.length)];
        }

        setPassword(pass);
    }
    useEffect(()=> {
        generatePassword();
    },[isNumbersAllowed,isSpecialCharsAllowed,length])

  return (
    <div className='mt-5'>
        <div className='card w-75 mx-auto px-2 py-4'>
            <h1 className='text-center'>PASSWORD GENERATOR</h1>
            <div className='card-body px-3 py-2'>
                <div className='input-group mb-2'>
                    <input 
                        type="text" 
                        className='form-control'
                        value={password}
                        readOnly
                    />
                    <button className='btn btn-success' onClick={handlecopy}>Copy</button>

                </div>
                <div className='d-flex align-items-center gap-3'>
                    <input 
                        type="range"
                        min={4}
                        max={20}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                     />
                    <span>length : {length}</span>
                    <div className='form-check'>
                        <input 
                            id='numbersAllowed'
                            type='checkbox'
                            className='form-check-input'
                            defaultChecked={isNumbersAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                         />
                         <label htmlFor="numbersAllowed">Number</label>
                    </div>
                    <div className='form-check'>
                        <input 
                            id='specialCharsAllowed'
                            type='checkbox'
                            className='form-check-input'
                            defaultChecked={isSpecialCharsAllowed}
                            onChange={() => setSepecialCharsAllowed((prev) => !prev)}
                         />
                         <label htmlFor="specialCharsAllowed">Special Charecters</label>
                    </div>

                </div>
            </div>

        </div>

      
    </div>
  )
}

export default Passwordgenerator


