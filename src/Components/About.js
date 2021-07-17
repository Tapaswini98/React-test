import { List ,Row,Col} from 'antd';
import React from "react";
import { Image } from 'antd';


import image6 from './asset/Group 39.png';
import image7 from './asset/Group 64.png';
import image8 from './asset/Group 55.png';

export default class About extends React.Component {
    render() {
        const data = [
           (image6),(image7),(image8),(image7),(image6)
        ];
        const mystyle = {
            marginLeft:"130px",
            boxSizing: "content-box"
          };
          const mystyle1 = {
            marginLeft:"200px",
            boxSizing: "content-box"
          };
          const mystyle2 = {
            marginLeft:"150px",
            boxSizing: "content-box"
          };
        return (
            // <List
            //     grid={{ gutter: 16, column: 6 }}
            //     dataSource={data}
            //     renderItem={item => (
            //       <div style={mystyle}>
            //         <List.Item>
            //             <Image src={item} width={200}/>
            //         </List.Item>
            //         </div>   
            //     )}
            // />
            <Row>
                <Col span={4}> <div style={mystyle1}><img src={image6}  /></div></Col>
                <Col span={4}><div style={mystyle2}><img src={image7} /></div></Col>
                <Col span={4}><div style={mystyle}><img src={image8} /></div></Col>
                <Col span={4}><div style={mystyle}><img src={image7}/></div></Col>
                <Col span={4}><div style={mystyle}><img src={image6}/></div></Col>
            </Row>
        )
    }
}