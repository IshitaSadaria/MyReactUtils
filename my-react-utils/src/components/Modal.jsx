import React from "react";

export const Modal = ({ isOpen, onclose, children}) => {
    if(!isOpen) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button onClick={onclose}>Close</button>
                {children}
                </div>
        </div>
    );
};