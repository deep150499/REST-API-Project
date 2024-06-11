// @description Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = (req,res) => {
    res.status(200).json({message : 'Get all contacts'})
}

// @description Create new contacts
// @route POST /api/contacts/
// @access public
const createContact = (req,res) => {
    console.log("The req body is :", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandatory !');
    }
    res.status(200).json({message : `Create a new contact`})
}

// @description GET contact with id
// @route GET /api/contacts/:id
// @access public
const getContact = (req,res) => {
    res.status(200).json({message : `Get contact with id : ${req.params.id}`})
}

// @description Update contact with id
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req,res) => {
    res.status(200).json({message : `Update contact detail for id : ${req.params.id}`})
}

// @description Delete contact with id
// @route Delete /api/contacts/:id
// @access public
const deleteContact = (req,res) => {
    res.status(200).json({message : `Delete contact detail for id : ${req.params.id}`})
}

module.exports  = {getContacts, createContact, getContact,updateContact,deleteContact}