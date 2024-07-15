import React, { useEffect, useState } from 'react'

function JobListings() {
    const [jobs, setJobs] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://testrepoforexpress.vercel.app/api/jobs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                setError(error.toString())

            } finally {
                setLoading(false)
            }
        }

        fetchJobs();
    }, [])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job =>(
                    <li key = {job._id}>
                        <h2>{job.title}</h2>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <a href={job.url} target="_blank" rel="noopener noreferrer">View Job</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobListings