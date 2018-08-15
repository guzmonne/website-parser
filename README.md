# Website Parser

Example application that uses a combination of AWS services on the backend, and React and libraries from its ecosystem on the frontend.

## In Summary

### Backend

- Authentication through AWS Cognito.
- Compute power through AWS Lambda.
- Webserver through API Gateway.

To deploy all this services we use the Serverless framework.

A library called `aws-serverless-express` is used to deploy an `express` app inside a Lambda function. We also use Typescript on the backend for type safety.

### Frontend

- React
- Redux
- Recompose
- Redux Observable
- React Router

## Licence

MIT

## TODO

Jest is setup but no tests have been added to the project.

- Testing
