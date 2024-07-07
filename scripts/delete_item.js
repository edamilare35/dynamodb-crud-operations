const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'yourTableName',
  Key: {
    userId: 'user1'
  }
};

dynamoDB.delete(params, (err, data) => {
  if (err) {
    console.error('Unable to delete item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('DeleteItem succeeded:', JSON.stringify(data, null, 2));
  }
});
