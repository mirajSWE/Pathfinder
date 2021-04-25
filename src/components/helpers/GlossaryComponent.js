import React, {useState, useEffect} from 'react';
import NodeComponent from "../graph/NodeComponent";
import ReactDOM from 'react-dom';

function GlossaryComponent(props) {
    const {nodes} = props;

    // * status = 1 means it is an open, unconsidered node
    // * status = 2 means it is an open, already considered node
    // * status = 3 means it is a node taken for the path
    // * status = 4 means it is a blockade
    // * status = 5 means it is a start block
    // * status = 6 means it is the destination

    const descriptions = [];
    descriptions[1] = 'An open, unconsidered node';
    descriptions[2] = 'An open, already considered node';
    descriptions[3] = 'A node taken for the path';
    descriptions[4] = 'A blockade'
    descriptions[5] = 'The starting block';
    descriptions[6] = 'The destination block';
    return (
        <container>
            {nodes.map((node) => {
                return (
                    <div style={{height: '100px', display:'flex', alignItems: 'center'}}>
                        <row>
                            <NodeComponent node={node} appStep={1000000}/>
                            <text> {descriptions[node.status]} </text>
                        </row>
                    </div>
                );
            })
            }
        </container>
    );
}

export default GlossaryComponent;