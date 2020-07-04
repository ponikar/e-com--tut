import React from 'react'
import "./menu-item.style.scss"
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return(
        <section
         className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
           <div className="content">
                <h1 className="title"> { title } </h1>
                <span className="subtitle"> Shop Now </span>
            </div>
        </section> 
    );
}  

export default withRouter(MenuItem);