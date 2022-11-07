import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { NewsModel } from '../model/NewsModel';

export function AddNews(): ReactElement {
    const [open, setOpen] = useState<boolean>(false);
    const [inputsValues, setInputValues] = useState<NewsModel>({
        title: '',
        text: '',
        category: '',
        date: new Date().toISOString().slice(0, 10),
    });

    const toggleOpen = (): void => {
        setOpen(!open);
        setInputValues({
            title: '',
            text: '',
            category: '',
            date: new Date().toISOString().slice(0, 10),
        });
    };

    const handleInputValues = (inputName: string, inputValue: string): void => {
        setInputValues({
            ...inputsValues,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
        console.log('Test requirement --> Log the inputs values:', inputsValues);
    };

    return (
        <>
            <header className="header-container">
                <button className="button-style" onClick={() => toggleOpen()}>
                    Ajouter une news
                </button>
            </header>
            <div className={`modal-style ${open ? 'fadeIn' : 'fadeOut'}`}>
                <form>
                    <div className="input-container">
                        <button type="button" onClick={() => toggleOpen()} className="close-button">
                            <figure>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/window-close.png`}
                                    alt="modal close"
                                    className="close-img"
                                />
                            </figure>
                        </button>
                        <label htmlFor="title">Titre</label>
                        <input
                            value={inputsValues.title}
                            type="text"
                            className="input-style"
                            required={true}
                            maxLength={50}
                            placeholder="Titre"
                            onChange={e => handleInputValues('title', e.target.value)}
                        />
                        <label htmlFor="category">Catégorie</label>
                        <input
                            value={inputsValues.category}
                            type="text"
                            className="input-style"
                            required={true}
                            maxLength={50}
                            placeholder="Catégorie"
                            onChange={e => handleInputValues('category', e.target.value)}
                        />
                        <label htmlFor="description">Contenu</label>
                        <textarea
                            value={inputsValues.text}
                            onChange={e => handleInputValues('text', e.target.value)}
                            className="textarea-style"
                            required={true}
                            placeholder="Description"
                            rows={8}
                        />
                    </div>
                    <button type="submit" onClick={e => handleSubmit(e)}>
                        Envoyer
                    </button>
                </form>
            </div>
        </>
    );
}
