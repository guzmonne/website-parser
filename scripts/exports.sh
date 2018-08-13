#!/bin/bash

export REACT_APP_USER_POOL_ID=$(aws secretsmanager get-secret-value \
  --secret-id website-parser__user-pool-id \
  --profile gmonne | jq -r .SecretString)

export REACT_APP_USER_POOL_WEB_CLIENT_ID=$(aws secretsmanager get-secret-value \
  --secret-id website-parser__user-pool-web-client-id \
  --profile gmonne | jq -r .SecretString)
