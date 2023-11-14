import React from 'react'

import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span>Loading...</span>
            <p>{progress.toFixed(2)}%</p>
        </Html>
)
}

export default Loader;