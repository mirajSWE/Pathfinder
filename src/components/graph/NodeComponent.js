import React from 'react';

function NodeComponent(props) {
    const { status, ...otherProps } = props;
    // * status = 1 means it is an open, unconsidered node
    // * status = 2 means it is an open, already considered node
    // * status = 3 means it is a node taken for the path
    // * status = 4 means it is a blockade
    let color = '#FFFFFF'
    if (status === 2) {
        color = '#5BC1B3'
    } else if (status === 3) {
        color = '#08730A'
    } else if (status === 4) {
        color = '#000000'
    } else if (status === 5) {
        color = '#B00CCC'
    } else if (status === 6) {
        color = '#160CCC'
    }
    return (
        <svg>
            <rect width="50" height="50" style={{fill: color, stroke:'#000000'}} />
        </svg>
    );
}

export default NodeComponent;