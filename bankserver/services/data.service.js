database= {
    1000: { accno: 1000, acname: "nikhil", pswd: 1000, balance: 1232,transaction:[] },
    1001: { accno: 1001, acname: "akhil", pswd: 1001, balance: 2332,transaction:[] },
    1002: { accno: 1002, acname: "joe", pswd: 1002, balance: 1212,transaction:[] },

  }

//REGISTER
  const register=(acname, accno, pswd)=> {

    if (accno in database) {

      // alert("account exists")
      return {
        statusCode:401,
        status:false,
        message:"account already exists"
      }
    }

    else {
      //add database
      database[accno] = {
        accno,
        acname,
        pswd,
        balance: 0,
        transaction:[]
      }
      console.log(database);
      return {
        statusCode:200,
        status:true,
        message:"succesfully registered"
      }
      

    }

  }

  //LOGIN
   const login = (accno,pswd)=>{

 

      if (accno in database) {
  
        if (pswd == database[accno]["pswd"]) {
  
          this.user=database[accno]["acname"]
          return {
            statusCode:200,
            ststus:true,
            message:"Login Successfull"
          }
        }
        else {
         
          return {
            statusCode:422,
            ststus:false,
            message:"Invalid PAssword"
          }
        }
      }
      else {
  
        
        return {
          statusCode:422,
          ststus:false,
          message:"User doesnot exists"
        }
      }
  
    }


//DEPOSIT

const deposit=(accno, pswd, amount1)=> {
  let amount = parseInt(amount1)
  {
    if (accno in database) {
      if (pswd == database[accno]["pswd"]) {
        database[accno]["balance"] += amount
        database[accno]["transaction"].push({
          type:"CREDIT",
          amount:amount
        })
        
        return {
          statusCode:200,
          status:true,
          message: amount+"successfully deposited... new balance is"+database[accno]["balance"]

        }}
      else {
        
        return {
          statusCode:422,
          status:false,
          message:"amount insufficient"


        }
      }
    }
    else {
      
      return {
        statusCode:400,
        status:false,
        message:"user does not exists"

      }
    }
  }
}


  module.exports=
  {
      register,
      login,
      deposit
  }