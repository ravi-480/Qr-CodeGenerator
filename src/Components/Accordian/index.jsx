import React from "react";
import data from "./data";
import "./styles.css"
import { useState } from "react";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiple,setEnableMultiple] = useState(false);
  const [multiple,setMultiple] = useState([]);
  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id)
  };

  const handleMultiSelection=(id)=>{
      const cpyMultiple = [...multiple];
      const findIndexOf = cpyMultiple.indexOf(id)
      if(findIndexOf === -1) cpyMultiple.push(id)
      else cpyMultiple.splice(findIndexOf,1)
    setMultiple(cpyMultiple)
  }
  console.log(selected,multiple)

  return (
    <div className="wrapper">
      <div className="accordian">
      <button className="multiBtn" onClick={()=>setEnableMultiple(!false)}>setEnableMultiSelection</button>

        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => enableMultiple ?
                  handleMultiSelection(dataItem.id)
                  : handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
               enableMultiple ?(
               multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div> 
               ):null
              ) :
               selected === dataItem.id ?
               <div className="content">
                   {dataItem.answer}
               </div>
               :null
              }
            </div>
          ))
        ) : (
          <div> No data found! </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
