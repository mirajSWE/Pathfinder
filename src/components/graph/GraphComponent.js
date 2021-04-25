import React, { useState, useEffect } from 'react';
import NodeComponent from "./NodeComponent";
import { Column, Row } from 'simple-flexbox';

function GraphComponent(props) {

    const [graph, setGraph] = useState(props.graph);
    const [step, setStep] = useState(props.appStep);

    useEffect(() => {
        setStep(props.appStep);
    });

    // const { graph, nodeOnClick, ...otherProps } = props;
    // const xSize = graph.length;
    // const ySize = graph[0].length;
    return (
        <div>
            {graph.map((innerArray) => {
                return (
                    <Row>
                        {innerArray.map((node) => {
                            return (
                                <Column style= {{ width: 50, height: 50 }}>
                                    <NodeComponent node={node} appStep={step}/>
                                </Column>
                            )
                        })}
                    </Row>
                )
            })}
        </div>
    );
}

export default GraphComponent;