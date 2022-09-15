type Matrix = number[][];
type Index = {
    row: number;
    col: number;
};
function hashCode(mat): string {
    if (mat.length === 0) return "";
    let hash: string = "";
    mat.forEach((arr) => {
        arr.forEach((val) => (hash += "" + val));
    });
    return hash;
}

function bfs(mat: Matrix, target: Matrix) {
    let queue: Matrix[] = [];
    let visited: Set<string> = new Set();
    queue.push(mat);
    visited.add(hashCode(mat));
    let step: number = 0;
    while (queue.length > 0) {
        let size: number = queue.length;
        for (let i = 0; i < size; i++) {
            let cur: Matrix = queue.shift();
            if (verify(cur, target)) {console.log("step", step); return step};
            let newMats: Matrix[] = spread(cur);
            newMats.forEach((mat) => {
                let hash: string = hashCode(mat);
                if (!visited.has(hash)) {
                    queue.push(mat);
                    visited.add(hash);
                }
            });
        }
        step++;
    }
    return step;
}

function verify(mat: Matrix, target: Matrix): boolean {
    return hashCode(mat) === hashCode(target) ? true : false;
}

function spread(mat: Matrix): Matrix[] {
    let newMats: Matrix[] = [];
    let index: Index = {
        row: 0,
        col: 0,
    };
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] == 0) {
                index.row = row;
                index.col = col;
                break;
            }
        }
    }
    if (index.row > 0) {
        let newMat: Matrix = deepcopyArr(mat);
        let temp: number = newMat[index.row - 1][index.col];
        newMat[index.row - 1][index.col] = 0;
        newMat[index.row][index.col] = temp;
        newMats.push(newMat);
    }
    if (index.row < mat.length - 1) {
        let newMat: Matrix = deepcopyArr(mat);
        let temp: number = newMat[index.row + 1][index.col];
        newMat[index.row + 1][index.col] = 0;
        newMat[index.row][index.col] = temp;
        newMats.push(newMat);
    }
    if (index.col > 0) {
        let newMat: Matrix = deepcopyArr(mat);
        let temp: number = newMat[index.row][index.col - 1];
        newMat[index.row][index.col - 1] = 0;
        newMat[index.row][index.col] = temp;
        newMats.push(newMat);
    }
    if (index.col < mat[0].length - 1) {
        let newMat: Matrix = deepcopyArr(mat);
        let temp: number = newMat[index.row][index.col + 1];
        newMat[index.row][index.col + 1] = 0;
        newMat[index.row][index.col] = temp;
        newMats.push(newMat);
    }
    return newMats;
}

function deepcopyArr(arr) {
    let outarr = [],
        len = arr.length;
    for (let i = 0; i < len; i++) {
        outarr[i] = new Array();
        for (let j = 0; j < arr[i].length; j++) {
            outarr[i][j] = arr[i][j];
        }
    }
    return outarr;
}

const test: Matrix = [
    [2, 8, 3],
    [1, 6, 4],
    [7, 0, 5],
];
const target: Matrix = [
    [1, 2, 3],
    [8, 0, 4],
    [7, 6, 5],
];

console.log("Result: ", bfs(test, target));
