// json
//is a way of representing structure in a portable way
//json is slightly more strict version of js objects

//js object
const car = {
    make: 'Nissan',
    model: 'GTR',
    transmission: 'manual',
    familyFriendly: false,
    gears: 6
};

//and here is the equivalent in json
//{
//"make": "Nissan",  
//"model": "GTR",
//"transmission": "manual",  
//"familyFriendly": false,  
//"gears": 6  
//}

//the difference being that the keys in the json are wrapped in double quotes

//we can have objects store agains properties
//{
//  "make": "Nissan",
//  "model": "GTR",
//  "transmission": "manual",
//  "familyFriendly": false,
//  "gears": 6,
//  "safetyFeatures": {
//      "airbags": true,
//      "seatbelt": true,
//      "emergencyBreaking": false
//  }
//}
  

//we can also represent arrays in json like in js
//[
//  {
//  "make": "Nissan",
//  "model": "GTR",
//  "transmission": "manual",
//  "familyFriendly": false,
//  "gears": 6
//  },
//  {
//  "make": "Nissan",
//  "model": "Rogue",
//  "transmission": "automatic",
//  "familyFriendly": true,
//  "gears": 5
//  }
//]