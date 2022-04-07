import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as S3SanitizationTest from '../lib/s3-sanitization-test-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/s3-sanitization-test-stack.ts
test('Lambda Created', () => {
  const app = new cdk.App();
//     // WHEN
  const stack = new S3SanitizationTest.S3SanitizationTestStack(app, 'MyTestStack');
//     // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    // VisibilityTimeout: 300
  });
});
