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
                description: "Super charged mega awsome 3 wheel automobile for cheap cheap, 16 years old, only died once, it's brown and very very disgusting looking",
                title: "Selling my car",
                askingPrice: 200
            },
            {
                category: "Tech",
                description: "A high end calculator from 19th centrury British empire, cedar and mohogany trim, once used Duke Harrington who was massacred at the battle of Dordoin. Going for real cheap",
                title: "19th Century Abacus",
                askingPrice: 1000
            }
            ],
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
            console.log(this.state.advertsDB._embedded.adverts);
        })
    }

    render(){
        // console.log(this.state.admins)
        return(
        <section>
            <h1>Hi from the ClassifiedBox</h1>
            <AdvertList adverts = {this.state.advertsDB}/>
        </section>
    )
        }  
}

export default ClassifiedBox;