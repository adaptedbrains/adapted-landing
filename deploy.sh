echo "building client bundle"
npm run prod:build-client
echo "building server bundle"
npm run prod:build-server
echo "restart nurturelabs pm2 server"
pm2 delete mentions
pm2 start ecosystem.config.js

echo "yo yo vivek baba deployment successful"