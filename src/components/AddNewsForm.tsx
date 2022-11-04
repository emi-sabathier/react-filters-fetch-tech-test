import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import '../styles/app.css';
import { NewsModel } from '../model/NewsModel';

export const AddNewsForm = (): ReactElement => {
    const [inputsValues, setInputValues] = useState<NewsModel>({
        title: '',
        text: '',
        category: '',
        date: new Date().toISOString().slice(0, 10),
    });

    const handleInputValues = (inputName: string, inputValue: string, event: SyntheticEvent) => {
        event.preventDefault();
        setInputValues({
            ...inputsValues,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = () => {
        console.log('Requirement --> Logged input values:', inputsValues);
    };

    useEffect(() => {}, [inputsValues]);

    return (
        <form>
            <div className="input-container">
                <input type="text" />
                <TextField
                    className="input-style"
                    onChange={e => {
                        e.preventDefault();
                        handleInputValues('title', e.target.value, e);
                    }}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Titre"
                />
            </div>
            <div className="input-container">
                <TextField
                    onChange={e => handleInputValues('category', e.target.value, e)}
                    required
                    className="input-style"
                    id="outlined-required"
                    label="Required"
                    defaultValue="Catégorie"
                />
            </div>
            <div className="input-container">
                <textarea
                    onChange={e => handleInputValues('text', e.target.value, e)}
                    className="textarea-style"
                    required
                    defaultValue="Description"
                />
            </div>
            <button type="button" onClick={() => handleSubmit()}>
                Envoyer
            </button>
        </form>
    );
};
