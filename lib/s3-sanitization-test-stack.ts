import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Runtime, DockerImageFunction, DockerImageCode } from 'aws-cdk-lib/aws-lambda';
import * as s3ObjectLambda from '@aws-cdk/aws-s3objectlambda-alpha';

export class S3SanitizationTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "TestBucket");

    // Use docker based lambda to avoid hitting zip file size limit
    const handler = new DockerImageFunction(this, "CleanerFunction", {
      code: DockerImageCode.fromImageAsset('functions/myFunction')
    })

    const accessPoint = new s3ObjectLambda.AccessPoint(this, "ObjectLambda", {
      bucket: bucket,
      handler: handler,
      accessPointName: 'test-access-point'
    })

    new CfnOutput(this, "S3OutputArn", {
      value: accessPoint.accessPointArn
    })

    new CfnOutput(this, "S3BucketName", {
      value: bucket.bucketName
    })
  }
}
