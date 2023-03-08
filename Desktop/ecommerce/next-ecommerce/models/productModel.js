import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // any white space in the title value will be automatically removed before it is saved to the database
        trim:true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    inStock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true
})

let Dataset = mongoose.models.product || mongoose.model('product', productSchema)
export default Dataset