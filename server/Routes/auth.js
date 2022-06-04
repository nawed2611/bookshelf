const router = require('express').Router();
const User = require('../Models/User');

//Register a Book
router.post("/book", async (req, res) => {

    if(!req.body.bookName){
        res.status(400).send({ message: "Book Name cannot be empty!"});
        return;
    }

    const newBook = await new User({
        bookName: req.body.bookName,
        author: req.body.author,
    })

    try {
        const user = await newBook.save({ timestamps: true });
        res.status(200).json(user);

    }
    
    catch (err) {
        console.log(err);
        res.status(500).send(err);    
    }
});

//Delete a Book
router.delete("/book/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const book = await User.findByIdAndDelete(id)
    

    if(!book){
        res.status(404).send("No Item Found");
    }

    res.status(200).send();

} catch(err){
    res.status(500).send(err);    
    console.log(err);
}


})
//Update a Book
router.patch("/book/:id", async (req,res) => {
     try{
         await User.findByIdAndUpdate(req.params.id, req.body);
         await User.save();
         res.status(200).send(User);
     } catch(err){
        res.status(500).send(err);    
     }
})
//Get all Books
router.get("/books" , async (req, res) => {
    const books = await User.find({});

    try{
        res.status(200).send(books);
    } catch(err) {
        console.log(err);
    }
})


module.exports = router;