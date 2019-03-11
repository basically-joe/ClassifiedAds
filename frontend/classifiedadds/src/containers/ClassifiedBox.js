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
            selectedAdvert: null
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
        console.log(newAdvert)
        
        const dataToPost = JSON.stringify(newAdvert)

        fetch("http://localhost:8080/adverts", {
            method: 'POST',
            body: dataToPost,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updatedAds = [...this.state.adverts, newAdvert]
        this.setState({adverts: updatedAds})
    }
  

    handleAdvertSelect(categoryToFilterBy){
        const selectedAdverts = this.state.adverts.filter(advert => advert.category === categoryToFilterBy);
        console.log(selectedAdverts)
        this.setState({adverts: selectedAdverts})
    }

    render() {

        return (
             <div>
                <AdForm onAdSubmit = {this.handleAdSubmit}/>
                <CategorySelector adverts={this.state.adverts} onCategorySelected = {this.handleAdvertSelect}/>
                <Advert adverts={this.state.adverts}/>
        
                
            </div>
        )
    }
}

export default ClassifiedBox;