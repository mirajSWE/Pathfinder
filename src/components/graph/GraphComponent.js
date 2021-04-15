import React from 'react';
import NodeComponent from "./NodeComponent";
import { Column, Row } from 'simple-flexbox';

function GraphComponent(props) {
    const { graph, ...otherProps } = props;
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
                                    <NodeComponent status= { node.status} stepNumber={node.stepNumber} cost={node.cost}/>
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