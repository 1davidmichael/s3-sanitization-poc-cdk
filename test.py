import boto3

s3 = boto3.client('s3')

print('Original object from the S3 bucket:')
original = s3.get_object(
  Bucket='s3sanitizationteststack-testbucket560b80bc-9a8uqz55n0s7',
  Key='s3.txt')
print(original['Body'].read().decode('utf-8'))

print('Object processed by S3 Object Lambda:')
transformed = s3.get_object(
  Bucket='arn:aws:s3-object-lambda:us-east-1:928154798873:accesspoint/test-access-point',
  Key='s3.txt')
print(transformed['Body'].read().decode('utf-8'))