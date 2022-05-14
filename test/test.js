let server = require('../index');
let chai=require('chai');
let chaiHttp=require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
describe('Api Test',()=>{
    describe('Test Create Account',()=>{
        it('It should return a account',(done)=>{
            chai.request('http://localhost:5050')
            .post('/account')
            .send({accountNumber:'123',currencyCode:'TRY',accountType:'individual',ownerName:'Yaşar Emre Doğru'})
            .end((err,res)=>{
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body.Success.ownerName).to.equal('Yaşar Emre Doğru');
              done();
            })
        })
        it('It should return a account',(done)=>{
          chai.request('http://localhost:5050')
          .post('/account')
          .send({accountNumber:'1234',currencyCode:'TRY',accountType:'individual',ownerName:'Yaşar Emre Doğru'})
          .end((err,res)=>{
              expect(res).to.have.status(201);
              expect(res.body).to.be.an('object');
              expect(res.body.Success.ownerName).to.equal('Yaşar Emre Doğru');
            done();
          })
      })
        it('Its failed',(done)=>{
            chai.request('http://localhost:5050')
            .post('/account')
            .send({accountNumber:'123a',currencyCode:'TRY',accountType:'individual',ownerName:'Yaşar Emre Doğru'})
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('Failed.');
              done();
            })
        })
        it('Its failed',(done)=>{
            chai.request('http://localhost:5050')
            .post('/account')
            .send({accountNumber:'123a',currencyCode:'TRY1',accountType:'individual',ownerName:'Yaşar Emre Doğru'})
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('Failed.');
              done();
            })
        })
        it('Its failed',(done)=>{
            chai.request('http://localhost:5050')
            .post('/account')
            .send({accountNumber:'12345',currencyCode:'TRY',accountType:'individual1',ownerName:'Yaşar Emre Doğru'})
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('Failed.');
              done();
            })
        })
        it('Its failed',(done)=>{
            chai.request('http://localhost:5050')
            .get('/account/123456')
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('Account not found.Please check your account number.');
                

              done();
            })
        })
        
    })
    describe('Transaction',()=>{
        it('Its failed',(done)=>{
            chai.request('http://localhost:5050')
            .get('/accounting/12345')
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('The account number is incorrect.');
              done();
            })
        })
        it('Its success',(done)=>{
            chai.request('http://localhost:5050')
            .get('/accounting/123')
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
              done();
            })
        })
    })
    describe('Deposit',()=>{
        it('Success deposit',(done)=>{
            chai.request('http://localhost:5050')
            .post('/deposit')
            .send({accountNumber:'123',amount:10})
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res.body.newAmount).to.equal('10.00');
              done();
            })
        })
        it('Failed deposit',(done)=>{
            chai.request('http://localhost:5050')
            .post('/deposit')
            .send({accountNumber:'12345',amount:10})
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('The account number is incorrect.');
              done();
            })
        })
    })
    describe('Withdraw',()=>{
        it('Success withdraw',(done)=>{
            chai.request('http://localhost:5050')
            .post('/withdraw')
            .send({accountNumber:'123',amount:5})
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal('5.00');
              done();
            })
        })
        it('Failed withdraw',(done)=>{
            chai.request('http://localhost:5050')
            .post('/withdraw')
            .send({accountNumber:'123',amount:50})
            .end((err,res)=>{
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal('Insufficient account balance.');
                
              done();
            })
        })
    })
    describe('Payment',()=>{
      it('Payment Failed, because senders money is not enough',(done)=>{
        chai.request('http://localhost:5050')
        .post('/payment')
        .send({senderAccount:'123',receiverAccount:'123',amount:10})
        .end((err,res)=>{
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal('The sending account does not have sufficient balance.');
          done();
        })
    })
      it('Success payment',(done)=>{
          chai.request('http://localhost:5050')
          .post('/payment')
          .send({senderAccount:'123',receiverAccount:'1234',amount:5})
          .end((err,res)=>{
              expect(res).to.have.status(200);
              expect(res.body.message).to.equal('Success');
            done();
          })
      })
      it('Failed payment',(done)=>{
          chai.request('http://localhost:5050')
          .post('/payment')
          .send({senderAccount:'123',receiverAccount:'1234',amount:555})
          .end((err,res)=>{
              expect(res).to.have.status(400);
              expect(res.body.message).to.equal('The sending account does not have sufficient balance.');
            done();
          })
      })
      it('Failed payment',(done)=>{
        chai.request('http://localhost:5050')
        .post('/payment')
        .send({senderAccount:'123',receiverAccount:'12345',amount:555})
        .end((err,res)=>{
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal('No sender or recipient account found.');
          done();
        })
    })
      it('Failed payment',(done)=>{
        chai.request('http://localhost:5050')
        .post('/payment')
        .send({senderAccount:'123',receiverAccount:'123',amount:555})
        .end((err,res)=>{
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal('The sending account does not have sufficient balance.');
          done();
        })
    })
  })
})