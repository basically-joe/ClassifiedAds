import React, { Component } from 'react';
import AdvertList from '../components/AdvertList'


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
            <h1>Hi from the ClassifiedBox</h1>
            <AdvertList adverts = {this.state.advertsDB}/>
        </section>
    )
        }  
}

export default ClassifiedBox;