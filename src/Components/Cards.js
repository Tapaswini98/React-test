import { Card, Col, Row } from 'antd';
import React from "react";
import './Cards.css'
import image3 from './asset/2.png';
import image4 from './asset/3.png';
import image5 from './asset/4.png';
const { Meta } = Card;


export default class Cards extends React.Component {
    render() {
        const myStyle1 = {
            marginLeft:"300px",
            boxSizing: "content-box"
          };
          const myStyle2 = {
            marginLeft:"150px",
            boxSizing: "content-box"
          };
          const myStyle3= {
            boxSizing: "content-box"
          };
        return (
            <Row>
                <Col span={8}>
                    <div style={myStyle1}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image3} />}
                       >
                        <Meta title="Blog Post One" description="Lorem ipsum dolor sit amet, 
                           consectetur adipiscing elit, sed
                         do eiusmod." />
                         <div className="Read-More">Read More</div>
                         <hr className="Line"/>
                    </Card>
                    </div>
                </Col>
                <Col span={8}>
                <div style={myStyle2}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image4} />}
                       >
                        <Meta title="Blog Post One" description="Lorem ipsum dolor sit amet, 
                           consectetur adipiscing elit, sed
                         do eiusmod." />
                         <div className="Read-More">Read More</div>
                         <hr className="Line"/>
                    </Card>
                </div> 
                </Col>
                <Col span={8}>
                  <div style={myStyle3}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image5} />}
                       >
                        <Meta title="Blog Post One" description="Lorem ipsum dolor sit amet, 
                           consectetur adipiscing elit, sed
                         do eiusmod" />
                         <div className="Read-More">Read More</div>
                         <hr className="Line"/>
                    </Card>
                    </div>
                </Col>

            </Row>
        )
    }
}
