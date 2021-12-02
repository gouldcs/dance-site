import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Navbar  = () => {
  const [activeItem, setActiveItem] = useState({activeItem: 'home'})

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

  return (
    <Menu secondary style={{justifyContent:'center'}}>
      <Menu.Item
        name='our values'
        style={{color:'#fff'}}
        active={activeItem === 'our values'}
        onClick={(e, name='our values') => handleItemClick}
        href="#values"
      />
      <Menu.Item
        name='project timeline'
        style={{color:'#fff'}}
        active={activeItem === 'project timeline'}
        onClick={(e, name='project timeline') => handleItemClick}
        href="#timeline"
      />
      <Menu.Item
        name='our team'
        style={{color:'#fff'}}
        active={activeItem === 'our team'}
        onClick={(e, name='our team') => handleItemClick}
        href="#team"
      />
    </Menu>
  )
}

export default Navbar