import React, { Component, Fragment } from 'react';
import ModalTrigger from "./ModalTrigger"
import ModalContent from "./ModalContent"

class UpdateModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }



    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
      };

    render() {
        const { isOpen } = this.state;
        const { triggerTextUpdate } = this.props;

        return (
            <Fragment>
                <ModalTrigger
                    onOpen={this.onOpen}
                    text={triggerTextUpdate}
                    
                />
                {isOpen &&
                    <ModalContent
                    onClose={this.onClose}
                    onAdSubmit={this.props.onAdSubmit} 
                    admins={this.props.admins}


                    adverts={this.props.adverts}  
                    advertsToShow={this.props.advertsToShow} 
                    handleAdvertToUpdate={this.props.handleAdvertToUpdate}
                    onAdDelete={this.props.handleAdDelete} 

                  />
                }


            </Fragment>

            
        );
    }
}

export default UpdateModal;