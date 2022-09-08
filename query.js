const { Example } = require('./Example');


// MONGOOSE tutorial

//Created a nested object (with an array of objects)
const create = async () => {
    try{
        const example = new Example({ storage: [{ name: "Jill", skills: ["C", "JS"]}, { name: "Sam", skills: ["HTML", "CSS"]}, { name: "Anna", skills: ["HTML"]}, { name: "Matthew", skills: ["MERN"]}, { name: "Chris", skills: ["HTML", "CSS"]}]});
        await example.save();
    } catch (err) {
        console.log(err.message);
    }
}
//create();

//Edit - to get the field of the nested object and update its value or insert a new field with the value
const edit = async() => {
    try {

        //WORKING ---------
        //Update the field of the nested object
        await Example.updateOne({
            "storage._id": "6319f46b550019b160fb86c4"
        },
        {
            $set: {
                "storage.$.name": "Matthew"
            }
        })

        await Example.updateOne({
            "storage._id": "6319f6560d0b40b5c51d9528"
        }, 
        {
            $set: {
                "storage.$.name": "Anna"
            }
        })
        //-----------
        
        //$push and $each operator to insert fields with values into existing doc
        
        await Example.updateOne({
          //query
          _id: "6319c1ccaa56fe2f54365a2c"
        }, 
        //update
        {
          $push: {storage: {$each: [{ name: "Giulia"}, {name: "Zoe"}]}}
        });
        

        // Insert filds into existing docs
        await Example.updateOne({
          //query
          _id: "6319c1ccaa56fe2f54365a2c", "storage.name": "Zoe"
        }, {
          //update skills array field
          $set: {"storage.$.skills": ["One", "Two"]}
        });
        
        
      
    } catch(err) {
        console.log(err.message);
    }
}

edit();