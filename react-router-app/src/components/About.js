import React from 'react';
import Rainbow from '../HOC/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center blue-text">About</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum molestias reiciendis voluptas nulla enim voluptatibus vitae tempora harum rerum ad maxime ea, quia expedita atque dolore quis qui animi eveniet?</p>
        </div>
    )
}

export default Rainbow(About);