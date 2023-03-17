import React from "react";
import Modal from "Modal.js";
import Modal from "Modal.css";

function Modal() {
  return (
    <div className="modal">
      <h2>Modal Example</h2>

      <button id="myBtn">Open Modal</button>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
