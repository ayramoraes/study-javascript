// receber um array de números e devolvo a média
'use strict';

function calAvarage(a, b, c) {
    return (a + b + c) / 3
}

const scoreTimeAlpha = calAvarage(44, 35, 71)
const scoreTimeBeta = calAvarage(65, 54, 49)

const checkWinner = function(avgAlpha, avgBeta) {
    if (avgAlpha >= 2 * avgBeta) {
        return 'Alpha win'
    } else if ( avgBeta >= 2* avgAlpha) {
        return 'Beta win'
    } else {
       return 'No team wins'
    }
}
console.log(checkWinner(scoreTimeAlpha, scoreTimeBeta))