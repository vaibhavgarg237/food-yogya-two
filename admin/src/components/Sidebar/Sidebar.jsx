import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebaroption">
            <img src={assets.add_icon} alt="" />
            <p className="add-items">Add items</p>
        </NavLink>
        <NavLink to='/List' className="sidebaroption">
            <img src={assets.order_icon} alt="" />
            <p className="list-items">List items</p>
        </NavLink>
        <NavLink to='/Orders' className="sidebaroption">
            <img src={assets.add_icon} alt="" />
            <p className="Order">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default sidebar
