echo "Remove public"
rm -rf /public/nurturelabs/*
echo "building client bundle"
npm run prod:build-client
echo "building server bundle"
npm run prod:build-server
echo "restart NurtureLabs pm2 server"
pm2 delete NurtureLabs
pm2 start ecosystem.config.js

echo "yo yo vivek baba deployment successful"