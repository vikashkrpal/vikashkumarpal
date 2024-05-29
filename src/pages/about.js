import React from 'react';

const About = ({ data }) => {
    return (
        <div>
            <h1>About Us</h1>
            <p>{data}</p>
        </div>
    );
};

export async function getServerSideProps() {
    // Simulating fetching data from an API
    const data = "This is the data fetched from the server.";

    return {
        props: {
            data,
        },
    };
}

export default About;