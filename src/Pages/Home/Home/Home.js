import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    const totalNews = useLoaderData();
    return (
        <div>
            <h2>Daily news home page : {totalNews.length}</h2>

            {
                totalNews.map(news => <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;