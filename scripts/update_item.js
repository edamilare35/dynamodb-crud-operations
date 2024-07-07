const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'yourTableName',
  Key: {
    userId: 'user1'
  },
  UpdateExpression: 'set email = :email',
  ExpressionAttributeValues: {
    ':email': 'john.updated@example.com'
  },
  ReturnValues: 'UPDATED_NEW'
};

dynamoDB.update(params, (err, data) => {
  if (err) {
    console.error('Unable to update item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('UpdateItem succeeded:', JSON.stringify(data, null, 2));
  }
});
