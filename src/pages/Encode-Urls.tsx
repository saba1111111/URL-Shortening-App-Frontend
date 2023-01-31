import React,{useState} from "react"
import Form from '../components/urlForm/Form';
import axios from "axios";

function Encode() {
  const [result,setResult] = useState('');

  const submitFunction = async (value: string) => {
    try {
     const postUrl = await axios.post('http://localhost:4000/encode',{url: value});
     setResult(postUrl.data.urlInfo.link)
    }catch(error) {
      console.log(error);
    }
  } 

  return (
     <Form header='Shorten your link' submitFunction={submitFunction} result={result} />
  )
}

export default Encode
