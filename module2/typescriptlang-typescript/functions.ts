let scores: number[] =[2, 3, 4, 5];
let hihgScores: number[];

scores.filter((element, index, array) => {
 if(element > 100) {
     return true;
 }
})


postScore(5);
postScore(-1,'11');
////////////////////////////
// Functions arrow function
////////////////////////////


// convert traditional function to arrow function

function postScore(score: number, playName: string = 'MultiMath Player') {
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
}

function logError(err: string) {
    console.error(err);
}




