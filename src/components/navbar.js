import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Navbar  = () => {
  const [activeItem, setActiveItem] = useState({activeItem: 'home'})

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

  return (
    <Menu secondary>
      <Menu.Item
        name='home'
        style={{color:'#fff'}}
        active={activeItem === 'home'}
        onClick={(e, name='home') => handleItemClick}
      />
      <Menu.Item
        name='about us'
        style={{color:'#fff'}}
        active={activeItem === 'messages'}
        onClick={(e, name='messages') => handleItemClick}
      />
      <Menu.Item
        name='our values'
        style={{color:'#fff'}}
        active={activeItem === 'friends'}
        onClick={(e, name='friends') => handleItemClick}
      />
    </Menu>
  )
}

export default Navbar