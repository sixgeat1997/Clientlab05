import React, { useState } from 'react';
import "./Card.css"



function Ccard(props) {


    return (
        <>
            <div className="size ">
                <h1>title : {props.lst.title}</h1>
                <img src={props.lst.img} />
                <button onClick={()=>props.showModal(props.index)}>update</button>
                <button onClick={()=>props.deleteList(props.index)}>delete</button>

            </div>
        </>
    );
}

export default Ccard;
