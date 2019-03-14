import React, {Component} from 'react';

class UpdateForm extends Component{
    
    constructor(props){

        super(props);
        this.state = {
            image: this.props.advert.image,
            askingPrice: this.props.advert.askingPrice,
            category: this.props.advert.category,
            description: this.props.advert.description,
            title: this.props.advert.title,
            id: this.props.advert.id
        }

        this.handleaskingPriceChange = this.handleaskingPriceChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleCategory1Change = this.handleCategory1Change.bind(this)  
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
    }

handleImageChange(e){
    this.setState({image: e.target.value})
 }

handleaskingPriceChange(e) {
    this.setState({ askingPrice: parseInt(e.target.value) })
}

handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
}

handleTitleChange(e) {
    this.setState({ title: e.target.value })
}

handleCategory1Change(e) {
    this.setState({ category: e.target.value })
}

handleUpdate(e){
    e.preventDefault()
    this.props.handleAdUpdate(this.state)

}


render() {
      
        return (
            <React.Fragment>
            
            <form className="content-update-form">
                <label>Image:      </label>
            <input
                type="text"
                placeholder="Enter a URL"
                value = {this.state.image}
                onChange={this.handleImageChange}
            /><br/>
                <label>Price(£):   </label>
                <input
                    type="number"
                    placeholder="Asking price..."
                    value={this.state.askingPrice}
                    onChange={this.handleaskingPriceChange}
                /><br/>
                <label>Description:</label>
                <input
                    type="text"
                    placeholder="Description..."
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                /><br/>
                <label>Title:      </label>
                <input
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                /><br/>
                <div className="radio-buttons">
                <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Beauty"}
                        value="Beauty"
                        name="radio1" />
                    Beauty </label>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Automobile"}
                        value="Automobile"
                        name="radio2" />
                    Automobile </label><br/>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Clothing"}
                        value="Clothing"
                        name="radio3" />
                    Clothing </label>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Tech"}
                        value="Tech"
                        name="radio4" />
                    Tech </label><br/>

                    <label>
                    <input type="radio" onChange={this.handleCategory1Change.bind(this)}
                        checked={this.state.category === "Furniture"}
                        value="Furniture"
                        name="radio5" />
                    Furniture </label><br/>
                    </div>

                <button onClick={this.handleUpdate} >Update</button>


            </form>
            </React.Fragment>
            
        )
    }



}

export default UpdateForm;