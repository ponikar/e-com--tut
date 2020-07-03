import React from 'react'
import "./menu-item.style.scss"


export const MenuItem = ({ section: { title, imageUrl, id, size } }) => {
    return(
        <section
         className={`${size} menu-item`}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
           <div className="content">
                <h1 className="title"> { title } </h1>
                <span className="subtitle"> Shop Now </span>
            </div>
        </section>
    );
}  