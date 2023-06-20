import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Categories = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>This is Categories have news: {allNews.length}</h2>

            {
                allNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Categories;