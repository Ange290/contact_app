// Contact controllers here

const contactModel = require("../models/contact.model.js");


const contactController ={
    createContact: async(req,res)=>{
        try {
            const newContact = await contactModel.create(req.body);
            res.status(201).json({message:'Created Successfully', contacts: newContact})
        } catch (error) {
            res.status(500).json({message:'Error in creating Contact', Error: error.message})
        }
    }, 
    getContact: async(re,res)=>{
        try {
            const getConatcts =await contactModel.find()
            res.status(200).json({message: 'All Contact', contact:getConatcts})
        } catch (error) {
          res.status(500).json({message:'Error in get contact', Error: error.message})  
        }
    },
    updateContact : async (req, res) => {
        try {
          const contact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
          res.send({message:'Contact updated Sucessfullycontact', Contact:contact});
        } catch (error) {
          res.status(400).send(error.message);
        }
      },
      deleteContact : async (req, res) => {
        try {
          await contactModel.findByIdAndDelete(req.params.id);
          res.send('Contact deleted successfully');
        } catch (error) {
          res.status(400).send(error.message);
        }
      },getById: async (req,res)=>{
        try {
            const id=req.params.id;
            const byId = await contactModel.findById(id)
            res.status(200).json({message:`Contact with id: ${id}`,Contact: byId})
        } catch (error) {
            res.status(400).json(error.message)
        }
      }
}
module.exports=contactController;