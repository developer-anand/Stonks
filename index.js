const buyPrice = document.querySelector("#buy_price");

const noOfStocks = document.querySelector("#quantity")

const sellPrice = document.querySelector("#sell_price");

const btn = document.getElementById('btn-id')

let outPut = document.querySelector("#result");

const calculateProfitAndLoss=(buyPrice, noOfStocks, sellPrice)=>{
    if(sellPrice>buyPrice){
        let profit = (sellPrice - buyPrice)*noOfStocks;
        let diff= sellPrice - buyPrice;
        let profitPercentage = (diff/buyPrice)*100;
        showOutput(`Zambo u made a profit of ${diff*noOfStocks} Rupees and the percent gain is ${profitPercentage}%`)
        }
    else if(sellPrice<buyPrice){
        let lost = (buyPrice - sellPrice)*noOfStocks;
        let diff = buyPrice - sellPrice;
        let lostPercentage = (diff/buyPrice)*100;
        showOutput(`Oh!!! u made a loss of ${diff*noOfStocks} Rupees and the loss percent is ${lostPercentage}%`)
        }
    else{
            if(buyPrice===sellPrice)
                showOutput(`No Pain No Gain No Gain is Also No Pain`)
        }
}

btn.addEventListener('click', showResult);

function showResult(){
    let bp = buyPrice.value;
    let qunat = noOfStocks.value;
    let sp = sellPrice.value;
    calculateProfitAndLoss(bp, qunat, sp);
}


function showOutput(message){
    outPut.innerHTML = message;
}
