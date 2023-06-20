import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCart = ({ news }) => {
    // console.log(news);
    const { author, _id, total_view, title, thumbnail_url, rating, details } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            className='me-3'
                            roundedCircle
                            src={author.img}
                            style={
                                { width: '50px' },
                                { height: '50px' }
                            }
                        ></Image>
                        <div>
                            <p className='mb-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2' />
                        <FaShareAlt />

                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={thumbnail_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + '...'}   <Link to={`/news/${_id}`}>See more</Link>
                                </>
                                :
                                <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <FaStar className='text-warning me-2' />
                            <span>{rating?.number}</span>
                        </div>

                        <div>
                            <FaEye className='me-2' />
                            <span>{total_view}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCart;