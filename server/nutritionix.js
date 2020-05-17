// const express = require('express');
// var cors = require('cors');

// var request = require('request');
// function nutrition(){
// var headers = {
//     'accept': 'application/json',
//     'x-app-id': '0be25bad',
//     'x-app-key': '27c1585453778711674404d293fea72d',
//     'x-remote-user-id': '0',
//     'Content-Type': 'application/json'
// };

// var dataString = '{ "query": "banana"}';

// var options = {
//     url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
//     method: 'POST',
//     headers: headers,
//     body: dataString
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       body = JSON.parse(body);
//       calories = body.foods[0].nf_calories;
//       total_fat = body.foods[0].nf_total_fat
//       console.log(calories);
//     } else {
//       console.log("Not Found")
//     }
// }

// request(options, callback);
// }
// nutrition();
// module.export = 'nutritionix.js'