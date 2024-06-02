import React from 'react'
import "./styles.css"
import MenuList from './menu-list'

const Tree = ({menus = []}) => {
  return (
    <MenuList list={menus} />
  )
}

export default Tree