import React, { useEffect, useState } from 'react';
import './buildsGallery.css';
import { CardGallery } from './cardGallery';

export function BuildsGallery() {
    const [builds, setBuilds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // example: fetch from an API endpoint
        fetch('/api/builds')
            .then(res => res.json())
            .then(data => {
                setBuilds(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // useEffect(() => {
    //     // Simulate fetching builds from an API
    //     setTimeout(() => {
    //         setBuilds([
    //             { id: 1, name: 'Elven Archer', description: 'A dexterous archer with elven grace.' },
    //             { id: 2, name: 'Dwarven Warrior', description: 'A sturdy warrior with unmatched strength.' },
    //             { id: 3, name: 'Human Mage', description: 'A versatile mage with powerful spells.' },
    //         ]);
    //         setLoading(false);
    //     }, 1000);
    // }, []);

    if (loading) return <div>Loading builds...</div>

    // placeholder card JSX
    const placeholderCard = (
        <div className="card" aria-hidden="true">
            <svg className="card-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#1e4d2b"></rect>
            </svg>
            <div className="card-body">
                <div className="h5 card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </div>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                </p>
                <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6" style={{backgroundColor: '#1e4d2b'}}></a>
            </div>
        </div>
    );

    return (
        loading ? (
            <CardGallery
                items={Array(4).fill(0)}
                renderCard={() => placeholderCard}
            />
        ) : (
            <CardGallery
                items={builds}
                renderCard={build => (
                    <div className='card'>
                        <div className='card-img-wrapper'>
                            <div className='card-overlay'>
                                <p className='card-description'>{build.description}</p>
                            </div>
                        </div>
                        {/* Uncomment below when using API with image/link */}
                        {/* <img src={build.imageUrl} alt={build.title} className='card-img-top' /> */}
                        <div className='card-body'>
                            <h5 className='card-title'>{build.name}</h5>
                            {/* <a href={build.link} className='btn btn-primary'>Learn more</a> */}
                            <a href="#" className='btn btn-primary'>Learn more</a>
                        </div>
                    </div>
                )}
            />
        )
    );
}

export default BuildsGallery;