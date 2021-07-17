import { Row, Col,Rate, Button ,Input } from 'antd';

import React from 'react';
import './Front.css'

import image1 from './asset/Group 228.png';
import image2 from './asset/Group 195.png';
import image3 from './asset/Group 114.png';
import image4 from './asset/Group 86.png';
import image7 from './asset/Group 134.png';
import image5 from './asset/1.png';


import Product from './Product';
import About from './About';
const { Search } = Input;


export default class Front extends React.Component {
    render() {
        return (
            <div className="Front">
                <Row gutter={[48, 32]}>
                    <Col span={4}></Col>
                    <Col span={8} className="front-image-grid mb-30">
                        <div className="">
                            <h3><b className="healthy">Healthy life with</b></h3>
                            <h1><b className="nature">Nature Organic</b></h1>
                            <div className="vegetable">Vegetables are the edible parts of a plant
                                that is used in cooking or can be eaten now.
                            </div>
                            <Button className="explore">Explore Now</Button>
                        </div>
                    </Col>
                    <Col span={12} className="front-image-grid1 mb-30">
                        <div className="image-grid">
                            {/* <div className="image-grid-top"> */}
                                <img src={image2} alt="front image" className="image-grid-top"/>
                            {/* </div> */}
                            <div className="image-grid-bottom1">
                                <img src={image1} alt="front image" className="image-grid-bottom"/>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} className="nature-grid mb-30">
                        <img src={image3} alt="front image" />
                        <h1 className="heading-text"><b>Welcome to Nature</b></h1>
                        <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                           <p className="para-text">incididunt ut labore et dolore magna aliqua.</p> 
                    </Col>
                    <Col span={24} className="mb-30" >
                        <Product />
                    </Col>
                    <Col span={24} className="proud-grid mb-30">
                        <h1 className="heading-text"><b>Proudly presented by</b></h1>
                        <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          <p className="para-text">  incididunt ut labore et dolore magna aliqua.</p>
                        
                    </Col>
                    <Col span={24} className="mb-30">
                        <About />
                    </Col>
                    <Col span={24} className="jane-grid mb-30">
                    <img src={image4} alt="jane image" />
                    {/* <div className="back-image"><img src={image7} alt="jane image" /></div> */}
                     <div className="round"><img src={image5} alt="jane image" /></div>
                        <h1 className="heading-text"><b>Jane Doe</b></h1>
                        <div className="rate"><Rate/></div>
                        <p className="para-text">Thank you for all the amazing produce and products you deliver each week…</p>
                          <p className="para-text"> you make my life so easy an bring goodness into our family eating. </p>
                          <p className="para-text"> I’ve been roasting a lot of brussel sprouts and</p>
                    </Col>
                    <Col span={24} className="sub-grid mb-30">
                        <h1 className="heading-text"><b>Subscribe to Our Newsletter</b></h1>
                        <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          <p className="para-text">  incididunt ut labore et dolore magna aliqua.</p>
                        <input className="email" placeholder="Enter Your Email " width={100} />
                        <span><Button className="subscribe">Subscribe</Button></span>
                    </Col>
                    <Col span={24} className="read-grid mb-30">
                    <img src={image3} alt="front image" />
                        <h1 className="heading-text"><b>Read Our Blog</b></h1>
                        <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                          <p className="para-text">  incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
            </div>
        )
    }
}