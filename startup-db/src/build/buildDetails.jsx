import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import './buildDetails.css';

export function BuildDetails() {
    const { id } = useParams();
    const location = useLocation();
    const seededBuild = location.state?.build || null;
    const [build, setBuild] = useState(seededBuild);
    const [loading, setLoading] = useState(!seededBuild);
    const [error, setError] = useState('');

    useEffect(() => {
        if (build) return;
        fetch(`/api/builds/${id}`, { credentials: 'include' })
            .then((res) => res.ok ? res.json() : Promise.reject(new Error('build not found')))
            .then((data) => { setBuild(data); setLoading(false);})
            .catch((e) => { setError(e.message); setLoading(false); });
    }, [id, build]);

    if (loading) return <main><p>Loading build...</p></main>;
    if (error) return <main><p>{error}</p><Link to="/other_builds">Back</Link></main>;
    if (!build) return <main><p>No Build found.</p></main>;

    return (
        <main className='build-details'>
            <h2>{build.customName || `${build.race?.name || 'Race Unknown'} ${(build.class?.name || 'Class Unknown')}`}</h2>
            <p>Class: {build.class?.name || 'Unknown'}</p>
            <p>Race: {build.race?.name || 'Unknown'}</p>
            <p>Background: {build.background?.name || 'Unknown'}</p>
            <p>Feat: {build.feat?.name || 'Unknown'}</p>
            <Link to="/other_builds" className="btn btn-secondary"> Back to Builds</Link>
        </main>
    );
}
