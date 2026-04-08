import React, { useEffect, useState } from 'react';
import './buildsGallery.css';
import { CardGallery } from './cardGallery';
import { Link } from 'react-router-dom';

export function BuildsGallery({ mode = 'all', userName }) {
    const [builds, setBuilds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        let isActive = true;
        const endpoint = mode === 'user'
        ? '/api/builds/mine'
        : '/api/builds';

        setLoading(true);
        setError('');

        fetch(endpoint, { credentials: 'include' })
            .then(async (res) => {
                if (!res.ok) {
                    if (res.status === 401) {
                        throw new Error('You are not authorized. Please log in again.');
                    }
                    if (res.status >= 500) {
                        throw new Error('Server error while loading builds. Please try again.');
                    }

                    const body = await res.json().catch(() => ({}));
                    throw new Error(body.msg || 'Unable to load builds.');
                }

                return res.json();
            })
            .then(data => {
                if (!isActive) {
                    return;
                }
                setBuilds(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch((fetchError) => {
                if (!isActive) {
                    return;
                }
                setBuilds([]);
                setError(fetchError.message || 'Unable to load builds.');
                setLoading(false);
            });

        return () => {
            isActive = false;
        };
    }, [mode, userName, retryCount]);

    if (loading) return <div>Loading builds...</div>
    if (error) {
        return (
            <div style={{ marginBottom: '12px' }}>
                <div style={{ color: '#a33', marginBottom: '8px' }}>{error}</div>
                <button
                    type='button'
                    className='btn btn-outline-secondary btn-sm'
                    onClick={() => setRetryCount((currentCount) => currentCount + 1)}
                >
                    Retry
                </button>
            </div>
        );
    }
    if (!builds.length) return <div>No builds found yet.</div>

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
                                <p className='card-description'>
                                    {(build.background && build.background.name) || 'Background Unknown'} | {(build.feat && build.feat.name) || 'Feat Unknown'}
                                </p>
                            </div>
                        </div>
                        {/* Uncomment below when using API with image/link */}
                        {/* <img src={build.imageUrl} alt={build.title} className='card-img-top' /> */}
                        <div className='card-body'>
                            <h5 className='card-title'>
                                {(build.race && build.race.name) || 'Race Unknown'} {(build.class && build.class.name) || 'Class Unknown'}
                            </h5>
                            {/* <a href={build.link} className='btn btn-primary'>Learn more</a> */}
                            <Link to={`/build/${build.id}`} state={{ build }} className='btn btn-primary'>Learn More</Link>
                        </div>
                    </div>
                )}
            />
        )
    );
}

export default BuildsGallery;