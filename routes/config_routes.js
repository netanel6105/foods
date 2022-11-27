const foodsR  = require("./foods")
const usersR = require("./users")

exports.routesInit = (app) =>{  
    app.use("/foods",foodsR);
    app.use("/users",usersR);
    
    
    
    
    
    app.use("*",(req,res) => {
        res.status(404).json({msg:"endpoint not found , 404",error:404})
      })
}

