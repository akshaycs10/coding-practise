let coins = [10, 5, 20, 15, 50]
let sum = 102, coinSum = 0
let coinCombination = {};
coins = coins.sort(function (a, b) { return b - a });

for (let i = 0; i < coins.length; i++) {
    let quotient = (sum - coinSum) / coins[i]

    if (coinSum <= sum) {
        if (quotient >= 1) {
            coinSum = coinSum + parseInt(quotient) * coins[i]
            coinCombination[`${coins[i]}`] = parseInt(quotient)
        }
        else if (quotient <= 0)
            coinCombination[`${coins[i]}`] = parseInt(quotient)

    }
    else
        break;
}
if (coinSum == sum)
    console.log("Possible coins combination:", coinCombination)
else
    console.log("Coins sum not possible, max sum and combination:", coinSum, coinCombination)