import React, { Component } from 'react';

const ModalTrigger = ({
    onOpen,
    text
}) => <button className="c-btn" onClick={onOpen}>{text}</button>;

export default ModalTrigger;