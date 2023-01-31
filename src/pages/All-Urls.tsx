import React,{useEffect,useState} from 'react'
import axios from "axios";
import AllUrlsTable from '../components/all-utls-table/All-Urls-Table';
import {UrlInfoType} from ".././interfaces/index";

function Allurls() {
  const [allUrls,setAllUrls] = useState<UrlInfoType[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/allUrls').then((datas) => setAllUrls(datas.data.urls)).catch(err => console.log(err));
  },[])
 
  return (
    <div style={{margin: 5}}>
     <AllUrlsTable allUrls={allUrls} />
    </div>
  )
}

export default Allurls
