import React, { useState } from 'react'
import MenuList from './menu-list'
import menus from './data'

const MenuItem = ({item}) => {
    const[displayChildren,setDisplayChildren] = useState({})
    const handleToggleChild = (getCurrentLabel)=>{
            setDisplayChildren({...displayChildren,[getCurrentLabel]:!displayChildren[getCurrentLabel]})
    }

  return  <li className='tree-view'>
         <div style={{display:'flex',gap:'20px'}}>
        <p>  {item.label} </p> 

            {
                item && item.children && item.children.length ? <span onClick={()=>handleToggleChild(item.label)}>{
                    displayChildren[item.label] ? "-" : "+"
                }</span> :null
            }
        </div>
        {
            item && item.children && item.children.length>0 && displayChildren[item.label] ?
            <MenuList list={item.children} />
            :null

        }
    </li>
  
}

export default MenuItem