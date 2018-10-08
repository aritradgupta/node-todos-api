const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bbb0c0548acff4562ea5fd7')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Users').find({
    name: 'Aritra'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos');
  });  

  //client.close();
});