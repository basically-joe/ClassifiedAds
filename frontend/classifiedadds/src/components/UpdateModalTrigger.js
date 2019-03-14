import React from 'react';

const UpdateModalTrigger = ({
    onOpen,
    text,
    handleAdvertToUpdate,
    advertToUpdate

}) => <button className="c-btn" onClick={onOpen} onClick={handleAdvertToUpdate(advertToUpdate)}>{text}</button>;

export default UpdateModalTrigger;