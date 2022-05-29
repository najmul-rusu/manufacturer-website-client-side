import React from 'react';

const Modal = () => {
    return (



        <div className="modal" id="btn-modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                    <a href="#" className="btn">Yay!</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;