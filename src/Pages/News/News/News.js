import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const News = () => {
    const news = useLoaderData();
    const { title, thumbnail_url, details, category_id } = news;
    return (
        <div>
            {/* <h2>This is news id: {news._id}</h2> */}
            <Card>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/categories/${category_id}`}>
                        <Button variant="primary">All news on this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;