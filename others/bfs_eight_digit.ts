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
    let queue: string[] = [hashCode(mat)];
    let isContinue = true;
    let currentMats = [mat];
    while (isContinue) {
      let arr = [];
      currentMats.forEach((matrix) => {
      spread(matrix)
      })
    }

    return 1;
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
  [1, 2, 3],
  [8, 0, 4],
  [7, 6, 5],
];
const target: Matrix = [
    [1, 2, 3],
    [8, 0, 4],
    [7, 6, 5],
];

console.log("Result: ", bfs(test, target));
