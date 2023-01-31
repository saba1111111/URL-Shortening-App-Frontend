import React from 'react'
import "./url-table.css";
import {UrlInfoType} from "../.././interfaces/index";

const  AllUrlsTable: React.FC<{allUrls: UrlInfoType[]}> = ({allUrls}) => {
  return (
    <table className=''>
    <thead>
      <tr>
        <th>Full URL</th>
        <th>Short URL</th>
      </tr>
    </thead>
    <tbody>
      {allUrls.length > 0 ? 
        <>
      {allUrls.map(urlInfos => {
        return (
        <tr key={urlInfos.id}>
        <td><div className='break-word margin'><a style={{textDecoration: "none",color: "#40407a"}} href={urlInfos.long_url} target="_blank" rel="noreferrer">{urlInfos.long_url}</a></div></td>
        <td><div className='break-word'><a style={{textDecoration: "none",color: "#40407a"}} href={urlInfos.long_url} target="_blank" rel="noreferrer">{urlInfos.link}</a></div></td>
        </tr>
        )
      })}
      </>
      :
      <tr style={{height: 65}}>
        <td colSpan={2} style={{textAlign: "center",color: "black",fontSize: 21}}>No url Found!</td>
      </tr>
    }
    </tbody>
   </table>
  )
}

export default AllUrlsTable
