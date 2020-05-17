const express = require('express');

//Cloud Vision


// Performs label detection on the image file
async function image(req,res){
    descriptions = [];
    const vision = require('@google-cloud/vision');
  // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'API-vision.json'
    });
    
    const [result] = await client.labelDetection('Fried Rice.jpg');
    const labels = result.labelAnnotations;
  //Stores result into array
    labels.forEach(label => descriptions.push(label.description));
    //console.log(descriptions)
    return descriptions
    }
  //Filters Label for client's to choose from
  function filter(descriptions)
  {    
      var fdescription = [];
  for (var i = 0; i < descriptions.length; i++)
  {

      if (descriptions[i] != "Food" && descriptions[i] != "Dish" && descriptions[i] != "Cuisine" && descriptions[i] != "Ingredient")
      {
          fdescription.push(descriptions[i]);
      }
      
  }
  console.log(fdescription)
  return fdescription
}

//Function call
  image()
  filter(descriptions)



module.export = 'vision.js'