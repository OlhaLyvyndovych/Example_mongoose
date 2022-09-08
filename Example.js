const { Schema, mongoose } = require('mongoose');

const exampleSchema = new Schema({
    storage: [
        {
            name: String,
            skills: [String]
        }],
    tags: { type: [String], index: true}
})

exampleSchema.index({ hobbies: 1 });

const Example = mongoose.model('Example', exampleSchema);



module.exports = { Example }