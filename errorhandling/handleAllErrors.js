const error ={
    notFound: async(req,res, next)=>{
res.status(404).json({message: "Resource not found." });
next();
    }, 
server: async(req,res,next)=>{
    res.status(500).json({message: "Internal Server Error"});
    next();
},
otherError: async(err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message: 'Something went wrong, try again'})
}}
export default error;