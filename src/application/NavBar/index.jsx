import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Nav} from '@douyinfe/semi-ui';
import { IconHome, IconUser} from '@douyinfe/semi-icons';
import "./style.css"

export default function NavBar() {
    const history = useNavigate();

  return (
    <div className='navContianer'>
        <Nav
            className='navBar'
            mode={'horizontal'}
           
            items={[
                { itemKey: '/houselist', text: '房屋列表', icon: <IconHome /> },
                // { itemKey: '/userinfo', text: '个人信息', icon: <IconUser /> },
                
            ]}
            onSelect={key => {

                history(key.itemKey)
            }}
            
        />
        <Nav
            className='navBar'
          
            mode={'horizontal'}
            items={[
                // { itemKey: '/houselist', text: '房屋列表', icon: <IconHome /> },
                { itemKey: '/userinfo', text: '个人信息', icon: <IconUser /> },
                
            ]}
            onSelect={key => {

                history(key.itemKey)
            }}
            
        />
    </div>
  )
}
