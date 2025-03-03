const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const Restaurant = require('./schema.js')

const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT||5000

app.get('/item.menu',(req,res)=>{
    res.status(200).json({message:'Restaurant found'})
})

app.post('/item.menu', async(req,res)=>{
    try{
const {name, description, price} = req.body
if(!name || !description || !price === undefined)
    return res.status(404).json('Restaurant not found')
return res.status(200).json({message:'Restaurant'})
const Restaurant = new restuarant({name,description,price})
 await Restaurant.save();
}catch(e){
    console.log(e)
}

})

 const db =  async()=>{
    try{
await mongoose.connect(process.env.MODULE_URL)
  console.log('MongoDB Server Connected')}

catch(e){
  console.log(e)
}
 }
 db();

app.put("/Restaurant/:id", async(req,res) =>{
    try {
      const updateRestaurant = await Restaurant.findByIdAndUpdate(
        req.params.id, 
       req.body,
        { new: true }
      );
      if (!updatedRestaurant) 
        return res.status(400).json({ error: "Validation failed: [field] is required" });
      res.json(updatedItem);
    } catch (err) {
        console.log(err)
        }
  });
  
  app.delete("/Restaurant/:id", async(req,res) =>{
    try {
      const deletedRestaurant = await restaurant.findByIdAndDelete(req.params.id);

      if (!deletedItem)
         return res.status(500).json({ error: "Something went wrong" });
      res.json({ message: "deletedItem" });
    } catch (error) {
      console.log(error)
    }
  });

  app.listen(port,()=>{
       console.log(`Connected Successfully: http://localhost:${port}`);
  });






































































