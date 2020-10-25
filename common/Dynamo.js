const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(ID, TableName) {
        const params = {
            TableName,
            Key: {
                ID
            }
        };

        console.log("Fetching data for ID of ${ID} from ${TableName}",ID,TableName);
        const data = await documentClient.get(params)
            .promise();

        if (!data || !data.Item) {
            throw Error("An error occurred while fetching data for ID of ${ID} from ${TableName}");
        }
        console.log('Retrieve Data :',data.Item);
        return data.Item;
    }
}

module.exports = Dynamo;