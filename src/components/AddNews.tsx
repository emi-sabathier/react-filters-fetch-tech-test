import React, { ReactElement, useState } from 'react';
import { AddNewsForm } from './AddNewsForm';

export function AddNews(): ReactElement {
    const [open, setOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <header className="header-container">
            <button className="button-style" onClick={toggleModal}>
                Ajouter une news
            </button>
            {open ? (
                <>
                    {/*<div className="modal-bg"></div>*/}
                    <div className="modal-style">
                        <AddNewsForm />
                    </div>
                </>
            ) : null}
        </header>
    );
}
