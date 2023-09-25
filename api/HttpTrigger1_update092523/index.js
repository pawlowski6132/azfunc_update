module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
 
    if (req.body && req.body.id && req.body.name) {
        context.bindings.sqlOutput = [];
        context.bindings.sqlOutput.push({
            id: req.body.id,
            name: req.body.name
        });
        context.res = {
            status: 200,
            body: "Record updated successfully"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass an id and name in the request body"
        };
    }
};