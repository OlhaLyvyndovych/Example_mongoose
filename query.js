const { Example } = require('./Example');


// MONGOOSE tutorial

//Created a nested object (with an array of objects)
const create = async () => {
    try{
        const example = new Example({ storage: [{ age: 45}, { age: 32 }, { age: 24 }, { age: 16 }, { age: 54 } ]});
        await example.save();
    } catch (err) {
        console.log(err.message);
    }
}
//create();

//Edit - to get the object with the age: 45 and change it to the age: 99. 
const edit = async() => {
    try {
        const example = await Example.find();
        let found; 
        example[0].storage.forEach(age => {
            for (let key in age) {
                if (age[key] == 45) {
                    
                    found = Example.findOneAndUpdate({ "example[0].storage.age[key]": 45 },{$set: {"example[0].storage.age[key]": 99}});

                    console.log("FOUND: ");
                    console.log(found);
                    
                }
            }
        });
        console.log(example[0].storage);
        console.log("FOUND: ");
        console.log(found);
    } catch(err) {
        console.log(err.message);
    }
}

edit();