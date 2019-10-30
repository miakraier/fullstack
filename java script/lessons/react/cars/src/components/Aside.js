import React from 'react';
import {Link} from 'react-router-dom'

const Aside = () => {
    return (<div>
            <Link className="navs" to="/add">Add</Link>
            <Link className="navs" to="/cars">Cars</Link>
            </div>
        )
}

export default Aside;

