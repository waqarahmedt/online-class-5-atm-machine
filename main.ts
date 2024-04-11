#! /usr/bin/env node

import inquirer from "inquirer"

let totalBalance: number = 10000 // Dollar;
const pinNumber: number = 1998


let pinEntered = await inquirer.prompt(
  [
    {

  name:"pin",
  message:"Enter your pin number",
  type:"number",
   

}
]
)
// console.log(pinEntered.pin);
if(pinEntered.pin == pinNumber){

  let atmQuestions =await inquirer.prompt([
    {
      name: "accountType",
      message: "select your account type",
      type: "list",
      choices: [
        "current account",
        "saving account",
      ]
    },
    {
      name: "transMethod",
      message: "select your transaction method",
      type: "list",
      choices: [
        "cash withdrawal",
        "fast cash"

      ]
    }
  ]);

if(atmQuestions.transMethod == "cash withdrawal")
  {

  let cashwithdrawAmount = await inquirer.prompt([
    {
      name: "withdrawal",
      message: "Enter the amount you want to withdraw",
      type: "number",

    }
  ]);
  // Greater than or equals to operator;
  if (totalBalance >= cashwithdrawAmount.withdrawal)
    {

    totalBalance -= cashwithdrawAmount.withdrawal//totalBlance = totalBlance -cashwithdrawAmount
    console.log(`Your Total Blance is :${totalBalance}`)
  }
  else (
    console.log("Insufficient Balance")
   )
}
else{
  let fastCashAmount = await inquirer.prompt(
    [
  {
    name: "fastCash",
    message: "Select the amount you want to withdraw",
    type: "list",
    choices:[
      "1000",
      "3000",
      "5000"
    ]


  }
    ]
)
  if (totalBalance >= fastCashAmount.fastCash){
    totalBalance -= fastCashAmount.fastCash// totalBalance = totalBalance -cashwithdrawAmount
    console.log(`Your Total Balance is :${totalBalance}`)
  }
  else (
    console.log("Insufficient Balance")
  )
}


}
