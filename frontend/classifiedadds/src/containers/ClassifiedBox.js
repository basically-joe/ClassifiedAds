import React, { Component, Fragment } from 'react';
import Advert from '../components/Advert'
import AdForm from "../components/AdForm"
import CategorySelector from "../components/CategorySelector"
import UpdateForm from "../components/UpdateForm"
import NavBar from "../components/NavBar"
import Modal from "../components/Modal"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class ClassifiedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admins: [],
            advertsDB: [],
            advertsToShow: [],
            renderUpdateComponent: false,
            advertToUpdate: {},
            triggerText: "Post new Ad",
            triggerTextUpdate: "Update Ad"
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
            .then(data => {
                this.setState({ admins: data._embedded.admins })
            })


        fetch(url2)
            .then(res => res.json())
            .then(data => {
                this.setState({ advertsDB: data._embedded.adverts })

            })
    }

    handleAdSubmit(newAdvert) {


        const dataToPost = JSON.stringify(newAdvert)

        fetch("http://localhost:8080/adverts", {
            method: 'POST',
            body: dataToPost,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updatedAds = [...this.state.advertsDB, newAdvert]
        this.setState({ advertsDB: updatedAds })
    }

    updateAdvertsArray(idToCheck) {

        let objectToUse = this.state.advertsDB.find((advert) => {
            return advert.id === idToCheck
        })

        return this.state.advertsDB.indexOf(objectToUse)
    }

    handleAdDelete(itemId) {


        const indexToDelete = this.updateAdvertsArray(itemId);

        let newAdverts = [...this.state.advertsDB]

        newAdverts.splice(indexToDelete, 1)

        this.setState({ advertsDB: newAdverts })

        fetch(`http://localhost:8080/adverts/${itemId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

    }

    handleAdUpdate(updatedAdvert) {

        const id = updatedAdvert.id;

        console.log(id)
        const dataToUpdate = JSON.stringify(updatedAdvert)


        fetch(`http://localhost:8080/adverts/${id}`, {
            method: 'PUT',
            body: dataToUpdate,
            headers: {
                "Content-Type": "application/json",
            },
        });


        const indexToDelete = this.updateAdvertsArray(id);
        let newAdverts = [...this.state.advertsDB]

        newAdverts.splice(indexToDelete, 1)
        newAdverts.push(updatedAdvert)

        this.setState({ advertsDB: newAdverts })
        this.setState({ renderUpdateComponent: false })
    }

    handleAdvertToUpdate(advert) {
        this.setState({ advertToUpdate: advert, renderUpdateComponent: false })
    }



    handleAdvertSelect(categoryToFilterBy) {
        const selectedAdverts = this.state.advertsDB.filter(advert => advert.category === categoryToFilterBy);
        this.setState({ advertsToShow: selectedAdverts })
    }



    render() {

        if (this.state.admins.length && this.state.advertsDB) {
            return (
                <Router>
                    <Fragment>
                        <NavBar />
                        <Switch>
                            <Route
                                path="/createad"
                                render={() =>
                                    <Fragment>
                                        <Modal triggerText={this.state.triggerText} onAdSubmit={this.handleAdSubmit} admins={this.state.admins} />
                                        <AdForm onAdSubmit={this.handleAdSubmit} admins={this.state.admins} />
                                        <CategorySelector adverts={this.state.advertsDB} onCategorySelected={this.handleAdvertSelect} />
                                        <Advert advertToUpdate={this.state.advertToUpdate} handleAdUpdate={this.handleAdUpdate} adverts={this.state.advertsDB} triggerTextUpdate={this.state.triggerTextUpdate} advertsToShow={this.state.advertsToShow} handleAdvertToUpdate={this.handleAdvertToUpdate} onAdDelete={this.handleAdDelete} admins={this.state.admins} />
                                        {this.state.renderUpdateComponent && (
                                            <UpdateForm advert={this.state.advertToUpdate} handleAdUpdate={this.handleAdUpdate} />
                                        )}
                                    </Fragment>
                                }
                            />
                            <Route
                                path="/"
                                render={() =>
                                    <Fragment>
                                        <Modal triggerText={this.state.triggerText} onAdSubmit={this.handleAdSubmit} admins={this.state.admins} />
                                        <CategorySelector adverts={this.state.advertsDB} onCategorySelected={this.handleAdvertSelect} />
                                        <Advert advertToUpdate={this.state.advertToUpdate} handleAdUpdate={this.handleAdUpdate} triggerTextUpdate={this.state.triggerTextUpdate} adverts={this.state.advertsDB} triggerTextUpdate={this.state.triggerTextUpdate} advertsToShow={this.state.advertsToShow} handleAdvertToUpdate={this.handleAdvertToUpdate} onAdDelete={this.handleAdDelete} admins={this.state.admins} />
                                        {this.state.renderUpdateComponent && (
                                            <UpdateForm advert={this.state.advertToUpdate} handleAdUpdate={this.handleAdUpdate} />
                                        )}
                                    </Fragment>
                                }
                            />
                        </Switch>
                    </Fragment>
                </Router>
            )
        }
        else {
            return <div>"BE PATIENT, I AM LOADING"</div>
        }
    }



}

export default ClassifiedBox;
