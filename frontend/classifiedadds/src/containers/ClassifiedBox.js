
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
            advertsDB: [],
            advertsToShow: [],
            renderUpdateComponent: false,
            advertToUpdate: {}
        }

        this.handleAdSubmit = this.handleAdSubmit.bind(this)
        this.handleAdvertSelect = this.handleAdvertSelect.bind(this)
        this.handleAdUpdate = this.handleAdUpdate.bind(this)
        this.handleAdvertToUpdate = this.handleAdvertToUpdate.bind(this)
        this.handleAdDelete = this.handleAdDelete.bind(this)
        this.updateAdvertsArray = this.updateAdvertsArray.bind(this)

    }

    componentDidMount() {
        const url = "http://localhost:8080/admins"
        const url2 = "http://localhost:8080/adverts"

        fetch(url)

            .then(res => res.json())



        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ advertsDB: data._embedded.adverts })

            })
    }

    handleAdSubmit(newAdvert){

        const dataToPost = JSON.stringify(newAdvert)

        fetch("http://localhost:8080/adverts", {
            method: 'POST',
            body: dataToPost,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updatedAds = [...this.state.advertsDB, newAdvert]
        this.setState({advertsDB: updatedAds})
    }

    updateAdvertsArray(idToCheck){

        let objectToUse = this.state.advertsDB.find((advert) => {
            return advert.id === idToCheck
    })

        return this.state.advertsDB.indexOf(objectToUse)
    }

    handleAdDelete(itemId){

        const indexToDelete = this.updateAdvertsArray(itemId);
        let newAdverts = [...this.state.advertsDB]
        newAdverts.splice(indexToDelete, 1)

        this.setState({advertsDB: newAdverts})

        fetch(`http://localhost:8080/adverts/${itemId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

    }

    handleAdUpdate(updatedAdvert){
        // debugger;
        const dataToUpdate = JSON.stringify(updatedAdvert)
        console.log(dataToUpdate);
        fetch("http://localhost:8080/adverts/{id}", {
            method: 'PUT',
            body: dataToUpdate,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const advertsWithUpdatedAd = [...this.state.advertsDB, updatedAdvert]
        this.setState({advertsDB: advertsWithUpdatedAd})
    }

    handleAdvertToUpdate(advert){
        console.log(advert)
        this.setState({advertToUpdate: advert, renderUpdateComponent: true})
    }

    handleAdvertSelect(categoryToFilterBy){
        const selectedAdverts = this.state.adverts.filter(advert => advert.category === categoryToFilterBy);
        console.log(selectedAdverts)
        this.setState({advertsDB: selectedAdverts})
    }


    render() {
        console.log(this.state.advertToUpdate)
        return (


             <div>
                <AdForm onAdSubmit = {this.handleAdSubmit}/>
                <CategorySelector adverts={this.state.advertsDB} onCategorySelected = {this.handleAdvertSelect}/>
                <Advert adverts={this.state.advertsDB}  handleAdvertToUpdate={this.handleAdvertToUpdate} onAdDelete={this.handleAdDelete}/>
                {this.state.renderUpdateComponent && (
                     <UpdateForm advert={this.state.advertToUpdate} handleAdUpdate = {this.handleAdUpdate}/>
                )}

            </div>

        )
    }
}

export default ClassifiedBox;
