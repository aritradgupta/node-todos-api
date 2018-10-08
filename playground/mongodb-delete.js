const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server');

  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
  });

  //client.close();
});