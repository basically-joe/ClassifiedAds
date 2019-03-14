import React from 'react';

const UpdateModalTrigger = ({
    onOpen,
    text,
    handleAdvertToUpdate,
    advertToUpdate,
    advert

}) => <button className="c-btn" onClick= {onOpen && handleAdvertToUpdate(advertToUpdate)}>{text}</button>;

export default UpdateModalTrigger;