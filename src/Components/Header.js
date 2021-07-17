import React from "react";
import 'antd/dist/antd.css'
import {Menu } from 'antd';
import { Button } from 'antd';
import './Header.css'
import image1 from './asset/Group 228.png';


export default class HeaderApp extends React.Component {
    render() {
        return (
            <div className="conatiner-fluid" >
                <div className="header" >
                    <div className="logo">
                       <img src={image1} alt="logo"/>
                       <a href="/"className="organic">Organic</a>
                    </div>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Product</Menu.Item>
                        <Menu.Item key="3">Blog</Menu.Item>
                        <Menu.Item key="4">About Us</Menu.Item>
                        <Menu.Item  key="5" ><Button className="contact-btn">Contact</Button></Menu.Item>
                    </Menu>
                </div>
            </div>

        )
    }
}