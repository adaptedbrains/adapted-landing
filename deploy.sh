export TMP_BUCKET_NAME=nurturelabs.co
export CLOUDFRONT_ID=E3PFDDQQ1JL288
aws s3 cp . s3://$TMP_BUCKET_NAME --recursive --include "*" --exclude ".git/*" --exclude "tmp/*" --exclude "src/*" --profile nurture-labs-static-website-user
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID \
  --paths /\*
