import React from 'react';
import './logo.css';

export const Logo = props =>
<div>
    <span>
        <img className='logo_img' alt='logo_img' {...props}/>
    </span>
    <span className='purple'>OPTUS</span><span className='orange'>RH</span>
</div>;