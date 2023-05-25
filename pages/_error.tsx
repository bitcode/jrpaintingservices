import React from 'react';

interface ErrorProps {
    statusCode: number | null;
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
    let errorMessage = 'An error occurred on client';

    if (statusCode) {
        errorMessage = `An error ${statusCode} occurred on server`;
    }

    return (
        <p>{errorMessage}</p>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
