const NodeCache = require( "node-cache" );
const { parse } = require("path/posix");
const { use } = require("../routes/accountRoute");
const transactionController = require("./transactionController");
exports.createAccount=async(req,res,next)=>{
    !myCache.get(req.body.accountNumber) ? (transactionController.newAccount(req.body.accountNumber,req.body.currencyCode,req.body.accountType,req.body.ownerName))?
    res.status(201).json({Success:myCache.get(req.body.accountNumber)}):
    res.status(400).json({message:'Failed.'}): 
    res.status(400).json({message:'You already have an account.'});

    
}
exports.accountInfo=async(req,res,next)=>{
    if(!myCache.get(req.params.id)){
        res.status(400)
        .json({message:'Account not found.Please check your account number.'});
    }
    else{
        res.status(200).json({
            response:myCache.get(req.params.id)
        })
    }
}
exports.payment=async(req,res,next)=>{
    if(myCache.get(req.body.senderAccount) && myCache.get(req.body.receiverAccount)){
        var sender = myCache.get(req.body.senderAccount);
        var receiver = myCache.get(req.body.receiverAccount);
        parseFloat(sender.amount) >= parseFloat(req.body.amount) ? 
        (transactionController.doTransaction(sender,receiver,parseFloat(req.body.amount).toFixed(2)))?
        res.status(200).json({message:'Success'}):
        res.status(400).json({message:'Failed'}) :
         res.status(400).json({message:'The sending account does not have sufficient balance.'});
    }
    else{
        res.status(400).json({message:'No sender or recipient account found.'})
    }
}

exports.deposit=async(req,res,next)=>{
    
    var account =myCache.get(req.body.accountNumber)
    account ? (transactionController.depositAmount(account,req.body.amount))?
    res.status(200).json({newAmount:account.amount}):
    res.status(400).json({message:'Failed.'}) :
    res.status(400).json({message:'The account number is incorrect.'});

}
exports.withdraw=async(req,res,next)=>{
    
    var feed = {createdAt:Date.now(),type:'withdraw',amount:parseFloat(req.body.amount).toFixed(2)}
    var account =myCache.get(req.body.accountNumber);
    account ? (transactionController.withdrawAmount(account,req.body.amount,feed))?
    res.status(200).json({message:parseFloat(account.amount).toFixed(2)}):
    res.status(400).json({message:'Insufficient account balance.'}):
    res.status(400).json({message:'The account number is incorrect.'});
    

}
exports.transactionHistory=async(req,res,next)=>{
    var result;
    function response(){
        result = transactionController.transactions(req.params.id)
        return true;
    }
    myCache.get(req.params.id)?response()?
    res.status(200).json({response:result}):
    res.status(400).json({message:'Failed.'}):
    res.status(400).json({message:'The account number is incorrect.'});
    
    
    
}