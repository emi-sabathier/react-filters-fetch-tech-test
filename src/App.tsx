import React, { ChangeEvent, ReactElement, useState } from 'react';
import data from './data/news.json';
import './styles/App.css';
import { NewsCard } from './components/NewsCard';
import { AddNews } from './components/AddNews';
import { deduplicateValues } from './utils/deduplicateValues';
import { NewsModel } from './model/NewsModel';

const App = () => {
    const [catInputValue, setCatInputValue] = useState<string>('');
    const [dateInputValue, setDateInputValue] = useState<string>('');

    const newsList = data.news;
    const categoriesList: string[] = newsList.map(news => news.category);
    const datesList: string[] = newsList.map(news => news.date);

    const renderNews = (): ReactElement[] => {
        if (catInputValue.length > 0) {
            const result: NewsModel[] = newsList.filter(news => news.category === catInputValue);
            return result.map((item, index) => <NewsCard newsItem={item} key={index} />);
        }
        if (dateInputValue.length > 0) {
            const result: NewsModel[] = newsList.filter(news => news.date === dateInputValue);
            return result.map((item, index) => <NewsCard newsItem={item} key={index} />);
        }
        return newsList.map((item, index) => <NewsCard newsItem={item} key={index} />);
    };

    return (
        <>
            <AddNews />
            <div className="filter-container">
                <p>Filtrer par catégorie et date</p>
                <select
                    className="select-style"
                    value={catInputValue}
                    onChange={e => {
                        setCatInputValue(e.target.value);
                        setDateInputValue('');
                    }}>
                    <option value="">--Sélection--</option>
                    {deduplicateValues(categoriesList).map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <select
                    className="select-style date-margin"
                    value={dateInputValue}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        setDateInputValue(e.target.value);
                        setCatInputValue('');
                    }}>
                    <option value="">--Sélection--</option>
                    {deduplicateValues(datesList).map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="card-container">{renderNews()}</div>
        </>
    );
};

export default App;
