'use strict';
const Responses = require('../common/apiResponses');
exports.handler = async event => {
    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without and ID
        return Responses._400({ message: 'missing ID in the path' })
    }

    let ID = event.pathParameters.ID;
    if (data[ID]) {
        // return the data
        return Responses._200(data[ID]);
    }

    // failed as ID not in the data
    return Responses._200({ message: 'data does not found!' })
}

const data = {
    1234: { name: "Ashan", age: 29, job: 'DEV' },
    4567: { name: "Shamith", age: 29, job: 'BA' },
    8901: { name: "Jayasundara", age: 29, job: 'OPS' }
}