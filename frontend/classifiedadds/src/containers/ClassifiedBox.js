import React, { Component} from 'react';
import Advert from '../components/Advert'
import AdForm from "../components/AdForm"
import CategorySelector from "../components/CategorySelector"
import UpdateForm from "../components/UpdateForm"



class ClassifiedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: [],
            adverts: [],
            renderUpdateComponent: false,
            advertToUpdate: {}
        }

        this.handleAdSubmit = this.handleAdSubmit.bind(this)
        this.handleAdvertSelect = this.handleAdvertSelect.bind(this)
        this.handleAdUpdate = this.handleAdUpdate.bind(this)
        this.handleAdvertToUpdate = this.handleAdvertToUpdate.bind(this)

    }

    componentDidMount() {
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)
            .then(res => res.json())
       

        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ adverts: data._embedded.adverts })

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


    handleAdUpdate(updatedAdvert){
        const dataToUpdate = JSON.stringify(updatedAdvert)

        fetch("http://localhost:8080/adverts/{id}", {
            method: 'PUT',
            body: dataToUpdate,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const advertsWithUpdatedAd = [...this.state.adverts, updatedAdvert]
        this.setState({adverts: advertsWithUpdatedAd})
    }
  


    handleAdvertSelect(categoryToFilterBy){
        const selectedAdverts = this.state.adverts.filter(advert => advert.category === categoryToFilterBy);
        console.log(selectedAdverts)
        this.setState({adverts: selectedAdverts})
    }

    handleAdvertToUpdate(advert){
        console.log(advert)
        this.setState({advertToUpdate: advert, renderUpdateComponent: true})
    }

    render() {

        return (
             <div>
                <AdForm onAdSubmit = {this.handleAdSubmit}/>
                <CategorySelector adverts={this.state.adverts} onCategorySelected = {this.handleAdvertSelect}/>
                <Advert adverts={this.state.adverts}  handleAdvertToUpdate={this.handleAdvertToUpdate}/>
                {this.state.renderUpdateComponent && (
                     <UpdateForm advert={this.state.advertToUpdate} onUpdateSubmit = {this.handleAdUpdate}/>
                )}
                
            </div>
        )
    }
}

export default ClassifiedBox;