const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true,
        unique: true,
    },
    parent: {
        type: Number,
        index: true,
    },
    superParent: {
        type: Number,
        required:true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: {
            latitude: {
                type: Number,
            },
            longitude: {
                type: Number,
            },
        },
    },
    description: {
        type: [String],
    },
    nestedList: {
        type: [{
            nestedItemId: {
                type: Number,
            },
            nestedItemName: {
                type: String,
            },
        }],
    },
    clickCount:{
        type: Number,        
    },
    }, 
);
const FormModel = mongoose.model('Form', formSchema);
module.exports = FormModel;

/*Schema Fields 
1. Primary ID
2. Parent ID
3. Super Parent ID
4. Name
5. Location
6. Description
7. Nested list
8. Click Count
*/