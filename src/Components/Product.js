import { List, Card ,Row,Col} from 'antd';
import React from "react";
import { Image } from 'antd';


import image4 from './asset/Group 207.png';
import image5 from './asset/Group 205.png';

export default class Product extends React.Component {
    render() {
        const data = [
           (image4),(image5),(image4),(image4)
        ];
          const mystyle1 = {
            marginLeft:"200px",
            boxSizing: "content-box"
          };
          const mystyle2 = {
            marginLeft:"120px",
            boxSizing: "content-box"
          };
          const mystyle3 = {
            marginLeft:"45px",
            boxSizing: "content-box"
          };
        return (
            // <List
            //     grid={{column: 4 }}
            //     dataSource={data}
            //     renderItem={item => (
            //         <div style={mystyle}>
            //         <List.Item>
            //             <Image src={item} width={200}/>
            //         </List.Item>
            //         </div>
            //     )}
            // />
            <Row>
                <Col span={6}><div style={mystyle1}><img src={image4} /></div></Col>
                <Col span={6}><div style={mystyle2}><img src={image5} /></div></Col>
                <Col span={6}><div style={mystyle3}><img src={image4} /></div></Col>
                <Col span={6}><div style={mystyle3} ><img src={image4}/></div></Col>
            </Row>
        )
    }
}