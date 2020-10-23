//require('dotenv').config() ili u pack-json u dev

const mongoose = require('mongoose')
const password = process.env.ATLAS_PASS
const dbname = 'poruke-api'

const url = `mongodb+srv://ivna_vukovic:${password}@cluster0.c2tva.mongodb.net/${dbname}?retryWrites=true&w=majority`

//tu nesto fali zbog cega ne radi

const porukaSchema = new mongoose.Schema({
    sadrzaj: {
        type: String,
        required: true,
        minlength: 5
    },
    datum: {
        type: Date,
        required: true
    },
    vazno: {
        type: Boolean,
        default: false
    }
})
porukaSchema.set('toJSON',{
    transform: (doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
        return ret
    }
})
  
module.exports = mongoose.model('Poruka', porukaSchema,'poruke')
