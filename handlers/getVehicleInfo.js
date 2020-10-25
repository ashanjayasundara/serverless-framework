'use strict';
const Responses = require('../common/apiResponses');
const Dynamo = require('../common/Dynamo');
const tableName = 'mydreamcar-datatable'; //process.env.tableName;

exports.handler = async event => {
    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.ID) {
        Responses._400({ message: 'missing ID in the path' });
    }

    let ID = event.pathParameters.ID;

    const vehicle = await Dynamo.get(ID, tableName).catch(
        err => {
            console.log('Error on fetch vehicle Info ', err);
            return null;
        }
    );
    console.log('Loaded Data :: ', vehicle);
    if (!vehicle) {
        return Responses._400({ message: 'Vehicle Does not found' });
    }
    // failed as ID not in the data

    return Responses._200(vehicle);
}