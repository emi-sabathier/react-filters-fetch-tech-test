import React, { ReactElement, SyntheticEvent } from 'react';
import { NewsModel } from '../model/NewsModel';
import '../styles/app.css';
import { defaultImagePath } from '../constants/constants';

type NewsCardProps = {
    newsItem: NewsModel;
};

export const NewsCard = ({ newsItem }: NewsCardProps): ReactElement => {
    const { images } = newsItem;
    const defaultImage = (e: SyntheticEvent<HTMLImageElement>) => {
        (e.target as HTMLImageElement).src = defaultImagePath;
    };
    const { title, text, category } = newsItem;

    return (
        <article className="card-style">
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p>{text}</p>
            {images && images.length > 0 ? (
                <figure>
                    {images.map((image: string, index: number) => (
                        <img
                            key={index}
                            src={`${process.env.PUBLIC_URL}/assets${image}`}
                            onError={(e: SyntheticEvent<HTMLImageElement>) => defaultImage(e)}
                            className="card-img-style"
                            alt={newsItem.title}
                        />
                    ))}
                </figure>
            ) : null}
        </article>
    );
};
