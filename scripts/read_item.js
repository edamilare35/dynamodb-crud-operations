const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'yourTableName',
  Item: {
    userId: 'user1',
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
};

dynamoDB.put(params, (err, data) =&gt; {
  if (err) {
    console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Added item:', JSON.stringify(data, null, 2));
  }
});
