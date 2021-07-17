import React from "react";
import "./Home.css";
import { Layout} from 'antd';
import HeaderAPP from './Header';
import FooterApp from './Footer';
import Front from "./Front";
import Cards from "./Cards";
const { Header ,Footer} = Layout;

export default class Home extends React.Component {
    render(){
        return(
            <div className="mainLayout">
                <Layout>
                    <Header><HeaderAPP/></Header>
                    <Front/>
                    <Cards/> 
                     <Footer>
                     <FooterApp/>
                    </Footer>
                </Layout> 
            </div>
        )
    }
}