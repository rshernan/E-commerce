import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({title, imageUrl, size}) =>(
    <div style={{
        bakcgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>
            {title.toUppercase()}
            </h1>
            <span className='subtitle'>
            SHOP NOW
            </span>
        </div>
     </div>
);

export default MenuItem;