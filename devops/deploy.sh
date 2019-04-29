#!/usr/bin/env bash

if [ $IS_PULL_REQUEST == true ]
    then
        echo Not Deploying Build $BUILD_NUMBER - Branch is $BRANCH, Is Pull Request is $IS_PULL_REQUEST
        return
fi

# Only deploy to Staging if we're on develop
if [ $BRANCH == "master" ]
    then
        # Deploy to S3
        echo Deploying to S3
        aws s3 sync dist/ s3://www.iain-hunter.com
fi
