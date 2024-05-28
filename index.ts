#! /usr/bin/env node

import inquirer from "inquirer"

const currency : any = {
    USD: 1,  // Base currency
    EUR : 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    SAR : 3.75,
    JPY : 156.87
};

let user_answer = await inquirer.prompt(
   [ 
        {

            name : "from",
            message: "Enter from currency" ,
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","SAR","JPY"]
        },
        {
            
            name : "to",
            message: "Enter to currency" ,
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","SAR","JPY"]
        },
        {
            name : "amount",
            message : "Enter your amount",
            type : "number"
        }
    ]
)

let fromAmount = currency[user_answer.from] // exchange rate
let toAmount = currency[user_answer.to] // exchange rate
let amount = user_answer.amount
let baseAmount =  amount / fromAmount // USD base currency
let conertedAmount = baseAmount* toAmount
console.log(conertedAmount.toFixed(2));




