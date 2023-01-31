import React,{useState} from "react"
import Form from '../components/urlForm/Form';
import axios from "axios";

function Decode() {
  const [result,setResult] = useState('');

  const submitFunction = async (value: string) => {
    try {
     const postUrl = await axios.post('http://localhost:4000/decode',{link: value});
     setResult(postUrl.data.result.long_url)
    }catch(error) {
      console.log(error);
    }
  } 

  return (
     <Form header='Lengthen your link' submitFunction={submitFunction} result={result} />
  )
}

export default Decode
