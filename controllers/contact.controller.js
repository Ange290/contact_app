// Contact controllers here

import contactModel from "../models/contact.model";


const bookController ={
    createContact: async(req,res)=>{
        try {
            const newContact = await contactModel.create(req.body);
            res.status(201).json({message:'Created Successfully', contacts: newContact})
        } catch (error) {
            res.status(500).json({message:'Error in creating Contact', Error: error.message})
        }
    }
}
export default bookController;