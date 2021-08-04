const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title:{
		type: String,
        required:[true,"Product title is mandatory!"]  
    },
	price:{
		 
		type: Number,
        required:[true,"Product title is mandatory!"]
	},

	description:{
		type: String,
        required:[true,"Product title is mandatory!"]
	}
}
	, { timestamps: true });



	const Product = mongoose.model("Product", ProductSchema);
	
	module.exports = Product;
