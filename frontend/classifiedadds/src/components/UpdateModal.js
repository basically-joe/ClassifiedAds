import React, { Component, Fragment } from 'react';
import UpdateModalTrigger from "./ModalTrigger"
import UpdateModalContent from "./UpdateModalContent"

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
                <UpdateModalTrigger
                    onOpen={this.onOpen}
                    text={triggerTextUpdate}
                    advertToUpdate={this.props.advertToUpdate}
                    handleAdUpdate={this.handleAdUpdate}
                    handleAdvertToUpdate={this.handleAdvertToUpdate}
                    advert = {this.advert}
                />
                {isOpen &&
                    <UpdateModalContent
                        onClose={this.onClose}
                        admins={this.props.admins}
                        advertToUpdate={this.props.advertToUpdate}
                        handleAdUpdate={this.props.handleAdUpdate}
                        handleAdvertToUpdate={this.handleAdvertToUpdate}

                    />
                }


            </Fragment>


        );
    }
}

export default UpdateModal;