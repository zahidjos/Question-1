import React from 'react';
import './Information.css'

const Information = (props) => {
    const{name,email,number}=props.singleData;
    return (
        <div className='information_part'>
            <h3>name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone Number: {number}</p>
        </div>
    );
};

export default Information;