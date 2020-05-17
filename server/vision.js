const express = require('express');

//Cloud Vision
descriptions = [];
// Performs label detection on the image file
async function image(req,res){
    const vision = require('@google-cloud/vision');
  // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'API-vision.json'
    });
    
    const [result] = await client.labelDetection('./meme.png');
    const labels = result.labelAnnotations;
  //Stores result into array
    labels.forEach(label => descriptions.push(label.description));
    console.log(descriptions)
    }
  //Call function
  image();

module.export = 'vision.js'