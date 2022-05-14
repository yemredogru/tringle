function depositAmount(account,amount){
    var feed = {createdAt:Date.now(),type:'deposit',amount:parseFloat(amount).toFixed(2)}
    account.amount=parseFloat(parseInt(account.amount)+parseInt(amount)).toFixed(2);
    myCache.del(account.accountNumber);
    
    var data=[];
    
    data.push(feed);
    if(!account.transactions){
        account.transactions=(data);
    }
    else{
        account.transactions.push(feed);
    }
    myCache.set(account.accountNumber, account);
    return true;
}
 function withdrawAmount(account,amount,feed){
     if( parseFloat(amount) <= parseFloat(account.amount)){
        account.amount=parseFloat(parseInt(account.amount)-parseInt(amount));
        myCache.del(account.accountNumber);
        var data=[];
    
    data.push(feed);
    if(!account.transactions){
        account.transactions=(data);
    }
    else{
        account.transactions.push(feed);
    }
        myCache.set(account.accountNumber, account);
        return true;
     }
    else{
        return false;
    }
    
}
function doTransaction(user,user2,amount){
    var feed = {createdAt:Date.now(),type:'payment',amount:parseFloat(amount).toFixed(2)}
    user.amount=parseFloat(parseFloat(user.amount)-parseFloat(amount)).toFixed(2);
    var data=[];

data.push(feed);
if(!user.transactions){
    user.transactions=(data);
}
else{
    user.transactions.push(feed);
}
if(!user2.transactions){
    user2.transactions=(data);
}
else{
    user2.transactions.push(feed);
}
    user2.amount = user2.amount+amount;
    myCache.del(user.accountNumber);
    myCache.del(user2.accountNumber);
    myCache.set(user.accountNumber,user);
    myCache.set(user2.accountNumber,user2);
    return true;
    
}
function newAccount(accountNumber,currencyCode,accountType,ownerName){
    var currency=['TRY','EUR','USD'];
    var accType=['individual','corporate'];
    if(!currency.includes(currencyCode)){
        return false;
    }
    else if(!accType.includes(accountType))
    {
        return false;
    }
    else{
        if(/^\d+$/.test(accountNumber)){
            const accountInfo={accountNumber:accountNumber,currencyCode:currencyCode,ownerName:ownerName,accountType:accountType,amount:0.00}
         myCache.set(accountNumber,accountInfo)
        return true;
        }
        else{
            return false;
        }
        
    }
}

function transactions(id){
    var feed=[];
    var account=myCache.get(id);
    if(account.transactions){
        for(var i=0;i<account.transactions.length;i++){
            acc={"accountNumber":id,"date":account.transactions[i].createdAt,"transactionType":account.transactions[i].type,"amount":account.transactions[i].amount}
            feed[i]=acc;
    }
    }
    
return feed;
}
module.exports={depositAmount,withdrawAmount,doTransaction,newAccount,transactions};