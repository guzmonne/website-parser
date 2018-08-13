import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.REACT_USER_POOL_ID,

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources.
    mandatorySignIn: true
  }
});
