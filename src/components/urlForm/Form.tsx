import "./form.css";
import React,{useEffect, useState} from 'react'
import {BiCopy} from "react-icons/bi";
import {BsCheck} from "react-icons/bs";
import {formPropsType} from "../../interfaces/index";

const Form: React.FC<formPropsType> = ({submitFunction,header,result}) => {
  const [value,setValue] = useState("");
  const [copyResult,setCopyResult] = useState(true);

  useEffect(() => {
   setTimeout(() => {
    setCopyResult(true);
   },1000)
  },[copyResult])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFunction(value);
  }

  return (
    <div className='form-container' >
       <p className='header'>{header}</p>
       <form className='form' onSubmit={submitHandler}>
        <input  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setValue(e.target.value)} name="url" className='form-input' type="url" required/>
        <button   className='formButton'>encode</button>
       </form>
       <div className='result-conteiner'>
        <p className="hides">result:</p>
        <div className='link-conteiner'>{result.length <= 30 ? result : `${result.substring(0, 30)}...`}</div>
       { copyResult ? 
       <div onClick={() => {setCopyResult(false); navigator.clipboard.writeText(result);}} className='icons-conteiner'><BiCopy className='icon' /></div> : 
       <div  className='icons-conteiner'><BsCheck className='secondIcon' /></div>
       }
       </div>
    </div>
  )
}

export default Form;