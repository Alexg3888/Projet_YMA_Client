import React from 'react';
import Alert from './Utils/Alert';

const Error = ({ error }) => (
    error && <Alert type="danger" message={error.message} />
);

export default Error;