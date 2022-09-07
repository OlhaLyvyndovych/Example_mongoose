const { Schema, mongoose } = require('mongoose');

const exampleSchema = new Schema({
    storage: [Object],
    tags: { type: [String], index: true}
})

exampleSchema.index({ age: 1 });

const Example = mongoose.model('Example', exampleSchema);



module.exports = { Example }