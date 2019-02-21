const MongoClient = require('mongodb').MongoClient;
const mqtt = require('mqtt');
const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
//
// const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
//
// const mqttClient = mqtt.connect('mqtt://m16.cloudmqtt.com', {
//     port: 16834,
//     username: 'iggmlkro',
//     password: 'Lak6iebiJJaV',
//     clientId: clientId,
//   }
// );
// // const mqttClient = mqtt.connect('mqtt://localhost');
// setTimeout(()=>{
//   console.log('CONNECTED', mqttClient.connected)
// }, 3000);
//
//
// const uri = "mongodb://admin:Dementor92@cluster0-shard-00-00-u2mmq.mongodb.net:27017,cluster0-shard-00-01-u2mmq.mongodb.net:27017,cluster0-shard-00-02-u2mmq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
//
// mqttClient.on('connect', () => {
//   console.log('SUCCESSS');
//   mqttClient.subscribe('homie/#')
// });
//
// mqttClient.on('message', (topic, message) => {
//   if(topic === 'homie/6001944edec7/record/json') {
//     console.log(`Message ${message}`);
//
//
//     //////////////////
//
//     MongoClient.connect(uri, function(err, client) {
//       const collection = client.db("Greenhouse").collection("records");
//       const data = JSON.parse(message+'');
//       collection.insertOne(data ? data : { m: 'error'}, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         client.close();
//       });
//       // perform actions on the collection object
//       client.close();
//     });
//
//     /////////////////
//     // connected = (message.toString() === 'true');
//   }
// });
//
//
//
//


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
