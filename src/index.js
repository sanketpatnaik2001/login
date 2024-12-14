import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Cards 
    key={val.key}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className="heading">TOP 5 POPULAR SERIES</h1>
  {Sdata.map(ncard)}
  </>
);