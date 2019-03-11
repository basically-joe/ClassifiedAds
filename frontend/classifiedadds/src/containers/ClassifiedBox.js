import React, { Component} from 'react';
import Advert from '../components/Advert'
import AdForm from "../components/AdForm"
import CategorySelector from "../components/CategorySelector"



class ClassifiedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: [],
            adverts: [],
            filteredAdverts: []
        }

        this.handleAdSubmit = this.handleAdSubmit.bind(this)
        this.handleAdvertSelect = this.handleAdvertSelect.bind(this)

    }

    componentDidMount() {
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))

        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ adverts: data._embedded.adverts })
                // console.log(data);
            })
    }

    handleAdSubmit(newAdvert){
        const updatedAds = [...this.state.adverts, newAdvert]
        this.setState({adverts: updatedAds})
    }
  

    handleAdvertSelect(index){
        const selectedAdvert = this.state.adverts[index];
        this.setState({filteredAdverts: [{selectedAdvert}]})
    }

    render() {
        console.log(this.state.filteredAdverts)
        return (
             <div>
                <CategorySelector adverts={this.state.adverts} onCategorySelected = {this.handleAdvertSelect}/>
                <Advert adverts={this.state.adverts}/>
                <AdForm onAdSubmit = {this.handleAdSubmit}/>
                
            </div>
        )
    }
}

export default ClassifiedBox;