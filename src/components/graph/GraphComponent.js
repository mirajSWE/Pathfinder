import React from 'react';
import NodeComponent from "./NodeComponent";
import { Column, Row } from 'simple-flexbox';


function GraphComponent(props) {
    const { graph, ...otherProps } = props;
    // const xSize = graph.length;
    // const ySize = graph[0].length;
    console.log(graph);

    return (
        graph.map((innerArray) => {
            <Row>
                {innerArray.map((node) => {
                    <Column>
                        <NodeComponent status={node.status} />
                    </Column>
                })}
            </Row>
        })
    );
}

export default GraphComponent;