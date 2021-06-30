import React from 'react'
import {Link} from "react-router-dom";
import "./Home.css"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className="home">
            <div className="home_header">

            
    <div className="header_left">
            <Link to="/about" > About </Link>
            <a href="https://store.google.com/" >Store</a>
           
    </div>
    <div className="header_right">
    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >Gmail</a>
    <a href="https://photos.google.com/" >Images</a>
    <AppsIcon/>
    <Avatar/>
    </div>
    </div>
    <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                alt=""/>
        <div className="home_inputcontainetr">
            <Search />
        </div>
    </div>
    </div>
        
    )
}

export default Home
