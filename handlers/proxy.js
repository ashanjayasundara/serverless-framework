'use strict';
const Responses = require('../common/apiResponses');

exports.handler = async event => {
    console.log('event', event);
    return Responses._200();
}

