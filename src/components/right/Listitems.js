import './listitems.css'
import React from 'react'

const Listitems = ({ el, title, value, w }) => {
    // console.log(el)

    let classL = w ? 'l-list' : 'left-list';
    let classR = w ? 'r-list' : 'right-list'
    let tit = "", val = "";
    if (el) {
        tit = el.title;
        val = el.value;
        // console.log("available");
    } else {
        tit = title
        val = value
    }
    return (

        <div className='list-item'>
            <div className={classL}>
                <span>{tit}</span>

            </div>
            <div className={classR}>
                <span>{val}</span>
            </div>
        </div>

    )
}

export default Listitems;