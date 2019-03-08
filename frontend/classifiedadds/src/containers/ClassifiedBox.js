import React, { Component } from 'react';
import AdvertList from '../components/AdvertList'


class ClassifiedBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            admins: [],
            adverts: [
                {
                category: "Sports",
                description: "Super charged mega awsome mobile for cheap cheap, 16 years old, only died once, it's brown and very very disgusting looking",
                title: "Selling my car",
                askingPrice: 200
            }
            ]
        }
    }

    componentDidMount(){
        const url = "http://localhost:8080/admins"
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }


    render(){
        // console.log(this.state.admins)
        return(
        <section>
            <h1>Hi front the ClassifiedBox</h1>
            <AdvertList/>
        </section>
    )
        }  
}

export default ClassifiedBox;