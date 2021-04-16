import React, { useState } from 'react';
import NodeComponent from "./NodeComponent";
import { Column, Row } from 'simple-flexbox';

function GraphComponent(props) {

    const [graph, setGraph] = useState(props.graph);
    console.log(graph);

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
                                    <NodeComponent node={node}/>
                                </Column>
                            )
                        })}
                    </Row>
                )
            })}
        </div>
    );
    // return (
    //     graph.map((innerArray) => {
    //         return
    //         <Row>
    //             {innerArray.map((node) => {
    //                 return
    //                 <Column>
    //                      <text>test</text>
    //                 </Column>
    //             })}
    //         </Row>
    //     })
    // );
}

export default GraphComponent;