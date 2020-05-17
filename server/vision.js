// const express = require('express');

// //Cloud Vision


// // Performs label detection on the image file
// async function image(req,res){
//     descriptions = [];
//     const vision = require('@google-cloud/vision');
//   // Creates a client
//     const client = new vision.ImageAnnotatorClient({
//       keyFilename: 'API-vision.json'
//     });
    
//     const [result] = await client.labelDetection('Fried Rice.jpg');
//     const labels = result.labelAnnotations;
//   //Stores result into array
//     labels.forEach(label => descriptions.push(label.description));
//     console.log(JSON.stringify(descriptions))
//     }
    
// //Function call
//   image()

// module.export = 'vision.js'