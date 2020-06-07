var AWS = require('aws-sdk');
// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
AWS.config.update({ accessKeyId: 'XYZ', secretAccessKey: 'XYZ', region: 'us-east-2' });

var lambda = new AWS.Lambda();

exports.sendEmail = (emails) => {

    const emailsJson = {
        'email': emails
    }
    const params = {
        FunctionName: 'aws-send-email-dev-sendEmail', /* required */
        Payload: JSON.stringify(emailsJson)
    };

    lambda.invoke(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
}