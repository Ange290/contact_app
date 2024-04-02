const error ={
    notFound: async(req,res, next)=>{
res.status(200).json({message: "Resource not found." });
next();
    }
}
export default error;