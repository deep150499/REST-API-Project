const asyncHandler = require('express-async-handler');

// @description Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({message : 'Get all contacts'})
});

// @description Create new contacts
// @route POST /api/contacts/
// @access public
const createContact = asyncHandler(async (req,res) => {
    console.log("The req body is :", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandatory !');
    }
    res.status(200).json({message : `Create a new contact`})
});

// @description GET contact with id
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({message : `Get contact with id : ${req.params.id}`})
});

// @description Update contact with id
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({message : `Update contact detail for id : ${req.params.id}`})
});

// @description Delete contact with id
// @route Delete /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({message : `Delete contact detail for id : ${req.params.id}`})
});

module.exports  = {getContacts, createContact, getContact,updateContact,deleteContact}