import React from 'react';

const Rainbow = (WrappedComponent) => {

    // returns a supercharged Component1
    const colors = ['red', 'orange', 'pink', 'green', 'yellow'];
    const randomColor = 'red'
    // colors[Math.floor(Math.random() * 5)];

    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default Rainbow;