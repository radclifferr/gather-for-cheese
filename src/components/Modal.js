import "../styles/Modal.css"

const Modal = ({hideModal, modalStatus}) => {
    const showHideClassName = modalStatus ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
          <section className="modal-main">
            <div>This item has been added to your cart</div>
            <button type="button" className="general-button" onClick={hideModal}>Close</button>
          </section>
        </div>
      );
}

export default Modal