const { map } = require("jquery");

const colors = ['blue', 'green', 'red', 'black', 'brown', 'sky blue', 'blue', 'lime green', 'green', 'black', 'grey'];

getFilteredData = () => {
    let colList = new Map();
    let l = [];
    colors.forEach(col => {
        if (!colList[col]) {
            colList[col] = 1
        } else {
            colList[col] = colList[col] + 1;
        }
    })
    //    Object.keys(colList).sort()

    return Object.keys(colList).sort((a, b) => { return colList[b] - colList[a] }).map(data => {
        let x = {};
        x[data] = colList[data];
        return JSON.stringify(x);
    });
}

console.log(getFilteredData());

