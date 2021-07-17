
import React from "react";
import { Row, Col } from 'antd';
import './Footer.css'
import image1 from './asset/Group 225.png';
import image2 from './asset/Group 99.png';
import image3 from './asset/Group 105.png';
import image4 from './asset/Group 100.png';



export default class FooterApp extends React.Component {
    render(){
        return(
            <div className="footer">
                <Row gutter={[32, 40]}>
                    <Col span={8}>
                    <img src={image1}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor </p>
                    <hr/>
                <h4 className="heading"><b>© Copyright 2020 Nature</b></h4>
                    </Col>
                    <Col span={8}>
                        <h1 className="heading">Information</h1>
                        <hr/>
                        <ul>
                        <li>
                          About Us  
                        </li>
                        <li>
                             Product
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Terms of Service
                        </li>
                        </ul>
                        
                    </Col>
                    <Col span={8}>
                        <h1 className="heading">Follow Us</h1>
                        <hr/>
                        <Row className="footer-box">
                            <Col span={6}>
                            <img src={image2}/>
                            </Col>
                            <Col span={6}>
                            <img src={image3}/>
                            </Col>
                            <Col span={6}>
                            <img src={image4}/>
                            </Col>
                            <Col span={6}>
                            <img src={image4}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                {/* <div style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</div> */}
            </div>
        )
    }
}