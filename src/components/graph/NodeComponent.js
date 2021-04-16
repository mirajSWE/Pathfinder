import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

function NodeComponent(props) {
    const {node,...otherProps } = props;

    const [status, setStatus] = useState(node.status);
    const [cost, setCost] = useState(node.cost);
    let [stepNumber, setStepNumber] = useState(node.stepNumber);
    const [stateNode, _setStateNode] = useState(node);

    useEffect(() => {
        setStatus(node.status);
        setStepNumber(node.stepNumber);
    });

    const setStateNodeStatus = (stateNode, newStatus) => {
        stateNode.status = newStatus;

        _setStateNode(stateNode);
    }

    // * status = 1 means it is an open, unconsidered node
    // * status = 2 means it is an open, already considered node
    // * status = 3 means it is a node taken for the path
    // * status = 4 means it is a blockade
    // * status = 5 means it is a start block
    // * status = 6 means it is the destination

    function toggleNodeBlockade(e) {
        e.preventDefault()

        if (status === 4) {
            setStatus(1);
            setStateNodeStatus(node, 1)
            // RUN ALGORITHM AGAIN? OR WILL IT RE RENDER
        } else {
            setStatus(4);
            setStateNodeStatus(node, 4);
        }
    }

    let color = '#FFFFFF'
    if (status === 1) {
        stepNumber = null;
    } else if (status === 2) {
        color = '#5BC1B3'
        stepNumber = null;
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
            <g>
                <rect x="0" y="0" width="50" height="50" style={{fill: color, stroke:'#000000'}} onClick={(e) => toggleNodeBlockade(e)}/>
                <text x="25" y="25" fill="black">{stepNumber}</text>
                <text x="25" y="50" fill="black">{cost}</text>
            </g>
        </svg>
    );
}

export default NodeComponent;