# S3 Object Sanitization via S3 Object Access Point Lambda

This project provides an example of using [scrubadub] and [s3 object lambda] in CDK to sanitize s3 objects requested of PII data. This was done as a POC to see how easy it was to implement.

## Deployment

```bash
npm install
cdk synth && cdk deploy
```

[scrubadub]: https://scrubadub.readthedocs.io/en/stable/index.html
[s3 object lambda]: https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/
