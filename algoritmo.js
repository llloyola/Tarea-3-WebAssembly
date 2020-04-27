/* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/?ref=rp */

function isSubsetSum(set, n, sum) {
    if (sum === 0) {
        return true;
    }
    if (n === 0 && sum !== 0) {
        return false;
    }

    if (set[n - 1] > sum) {
        return isSubsetSum(set, n - 1, sum);
    }
    return isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1]);
}

function run1(){
let initialTime = performance.now();
lista =[]

for (x = 0 ; x <= 1000; x++){
    lista.push(x)
}

sum = 150
n = lista.length
if (isSubsetSum(lista, n, sum) === true) {
    var element = document.getElementById('jsoutput1');
    let endTime = performance.now();
    let final = endTime - initialTime
    element.innerHTML = "Found a subset with given sum\n" + parseFloat(final);
    return "Found a subset with given sum" 
}
else {
    var element = document.getElementById('jsoutput1');
    let endTime = performance.now();
    let final = endTime - initialTime
    element.innerHTML = "No subset with given sum\n" + parseFloat(final);
    return "No subset with given sum" 
}
};      