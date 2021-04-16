import React, { useState } from 'react';


function DescriptionComponent(props) {
    console.log(props);
    // const { graph, nodeOnClick, ...otherProps } = props;
    // const xSize = graph.length;
    // const ySize = graph[0].length;
    let textDescription = '';

    if (props.algorithmToRun) {
        textDescription = 'This algorithm does this....'
    }
    return (
        <div>
            <text>
                <b>
                    {props.algorithmToRun}
                </b>
                <br/>
                {textDescription}
            </text>
        </div>
    );

}

export default DescriptionComponent;