let  chai=require('chai')
let chaihttp=require('chai-http')
let expect=chai.expect

chai.use(chaihttp)

describe('Testing my rest api',function(){
    it('should return status as 200',function(done){
        chai.request('http://localhost:7800')
        .get('/health')
        .then(function(res){
            expect(res).to.have.status(200)
            done()
        })
        .catch(function(err){
            throw err
        })
    })
    it('should return status as 200',function(done){
        chai.request('http://localhost:7800')
        .get('/location')
        .then(function(res){
            expect(res).to.have.status(200)
            done()
        })
        .catch(function(err){
            throw err
        })
    })
   
})