Cash Register: 

SOLUTION:


function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let curUnit = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05];
  let arr = [];
  let totalInRegister = 0;
  for (let i = 0; i < cid.length; i++){
    totalInRegister += cid[i][1];
  };
  if (totalInRegister < change){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (totalInRegister == change){
    return {status: "CLOSED", change: cid}
  };

  for (let i = 0; i < curUnit.length; i++){
    let arr1 = [];
    let num = 0;
    while(change >= curUnit[i] && cid[cid.length-1-i][1] != 0){
      change -= curUnit[i];
      cid[cid.length-1-i][1] -= curUnit[i];
      num += curUnit[i];
      arr1 = [cid[cid.length-1-i][0], num];
    };
    if (arr1.length == 2){
      arr.push(arr1)
    };
    if (change < 0.05 && change >= 0.01 && cid[0][1] > change){
      arr.push([cid[0][0], parseFloat(change.toFixed(2))]);
      cid[0][1] -= parseFloat(change.toFixed(2));
      change -= change;
    };
  };console.log(change)
  if (change != 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if(change == 0){
    return {status: "OPEN", change: arr}
  }; 

};
