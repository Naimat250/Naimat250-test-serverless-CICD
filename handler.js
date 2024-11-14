'use strict';

module.exports.main = async (event) => {
    console.log("Received event from SQS:", JSON.stringify(event, null, 2));

    // Loop through each SQS message in the event
    for (const record of event.Records) {
        const messageBody = record.body;
        
        // Log each message body
        console.log("Message body:", messageBody);
        
        // Here you could add additional processing, e.g., parsing JSON or further handling.
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Messages has been processed successfully' }),
    };
};
