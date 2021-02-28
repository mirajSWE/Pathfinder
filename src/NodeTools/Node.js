class Node {

    constructor(xPos, yPos, status) {
        this._statusEnum = {'UsedInAlgo': 1, 'ConsideredInAlgo': 2, 'Blockade': 3, 'Unconsidered': 4}
        this._xPos = xPos;
        this._yPos = yPos;
        this._status = 4;
    }
}