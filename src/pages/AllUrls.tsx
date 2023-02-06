import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllUrlsTable from '../components/allUrlsTable/AllUrlsTable';
import { UrlInfoType } from '../interfaces/index';

function Allurls() {
  const [allUrls, setAllUrls] = useState<UrlInfoType[]>([]);

  useEffect(() => {
    const getUrls = async () => {
      try {
        const allUrls = await axios.get('http://localhost:4000/allUrls');
        setAllUrls(allUrls.data.urls);
      } catch (error) {
        console.log(error);
      }
    };
    getUrls();
  }, []);

  return (
    <div style={{ margin: 5 }}>
      <AllUrlsTable allUrls={allUrls} />
    </div>
  );
}

export default Allurls;
