const router = require('express').Router();
const path = require('path');
//const apiRoutes = require('/api');

//router.use('/api', apiRoutes);
//TO DO: MAKE THIS ROUTE ACCESS THE INFORMATION FROM THE PERSONAL TABLE
// MAKE TABLE WITH ID, TEXT, AUTHOR. AUTHOR WILL BE ID THAT WILL LINK TO A USER INSIDE TABLE. 
//WHEN YOU LOG IN YOUR SERVER WILL SEND BACK AUTHENTICATE CORRECT, LOGIN NAME ETC
//SERVER WILL GIVE USER ID
//WHEN CLICKING SAVE, IT WILL SEND USER ID AND POST TO SERVER <- MAKE SOMETHING THAT DOES THAT
//MAYBE LOCAL OR SESSION STORAGE?? 
//MAKE SCRIPT FOR GET USER ID

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../index.html"));
    
});

router.get("/sign-in", function(req,res){
    res.sendFile(path.join(__dirname,"../sign-in.html"))
})

router.get("/sign-up", function(req,res){
    res.sendFile(path.join__dirname,"../sign-up.html")
})
router.get("/dashboard", function(req,res){
    res.sendFile(path.join(__dirname,"../dashboard.html"))
})



module.exports = router;
