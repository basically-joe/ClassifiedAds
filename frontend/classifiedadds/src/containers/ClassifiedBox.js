import React, { Component, Fragment } from 'react';
import AdvertList from '../components/AdvertList'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class ClassifiedBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            admins: [],
            advertsDB: []
        }
    }

    componentDidMount(){
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        
        fetch(url2)
        .then(res => res.json())
        .then(data => {
            this.setState({advertsDB: data})
            console.log(this.state.advertsDB._embedded);
        })
    }

    render(){
        return(
        <section>
            <AdvertList adverts = {this.state.advertsDB}/>
        </section>
    )
        }  
}

export default ClassifiedBox;