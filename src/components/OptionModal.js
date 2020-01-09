import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearModal}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    //Alternatively: props.handleClearModal
    <button onClick={() => {props.handleClearModal()}}>OK</button>
  </Modal>
)


export default OptionModal