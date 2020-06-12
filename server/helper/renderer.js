import React from "react";
import { renderToString } from "react-dom/server";
import { RouterContext } from "react-router";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import Helmet from "react-helmet/lib/Helmet";
import { routes } from "../../app/Routes";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
const assetChunks = require("../../public/nurturelabs/stats.json");
const FILE_EXTENSION_REGEX = /\.([a-z]+)$/;
const TAWK_TO_SCRIPT = `
  <script type="text/javascript">
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/57591e3cfc6a7f9c2ceae95a/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
  </script>`;

const NO_TAWK_TO_CONTAINERS = ["school"];

const RAZOR_PAY_SCRIPT = `<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`;

export default (req, store, renderProps) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <RouterContext {...renderProps} />
      </StyleSheetManager>
    </Provider>
  );

  const styleTags = sheet.getStyleTags();

  const helmet = Helmet.renderStatic();

  // const assetChunkFileKeys = Object.keys(assetChunks["assetsByChunkName"]);

  const vendorFile = Array.isArray(assetChunks["assetsByChunkName"]["vendor"])
    ? assetChunks["assetsByChunkName"]["vendor"]
    : [assetChunks["assetsByChunkName"]["vendor"]];
  const mainFile = Array.isArray(assetChunks["assetsByChunkName"]["main"])
    ? assetChunks["assetsByChunkName"]["main"]
    : [assetChunks["assetsByChunkName"]["main"]];
  const manifestFile = Array.isArray(
    assetChunks["assetsByChunkName"]["manifest"]
  )
    ? assetChunks["assetsByChunkName"]["manifest"]
    : [assetChunks["assetsByChunkName"]["manifest"]];
  const fileArray = [...manifestFile, ...vendorFile, ...mainFile];
  let jsFiles = ``;
  fileArray.forEach((file) => {
    let fileExtension = FILE_EXTENSION_REGEX.exec(file);
    let newJsFile =
      fileExtension[1] == "css"
        ? `<link rel="stylesheet" href="nurturelabs/${file}"></link>`
        : `<script src="nurturelabs/${file}"></script>`;
    jsFiles = jsFiles + newJsFile;
  });

  return `
    <!DOCTYPE html>
		<html lang="en">
			<head>
				<title>Nurture Labs</title>
				<meta charset="UTF-8">
				<meta name="theme-color" content="#fff" />
                <meta name="description" content="Nurture Labs" />
                <meta property="og:image" content="https://i.imgur.com/cUNg6jH.png">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
				<link rel="shortcut icon" href="https://i.imgur.com/87P3UIl.png" />
                <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
               
             <base href="/">
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${styleTags}
			</head>
			<body>
                <div id="app">${content}</div>
				<script>
					window.__REDUX_STATE__ = ${serialize(store.getState())}
                </script>
               
                ${jsFiles}
                <script SameSite="None; Secure" src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>
<script>
  var myLandbot = new LandbotPopup({
    index: 'https://landbot.io/u/H-451190-1JDSWHZ1DHHKNJ3J/index.html',
  });
</script>
        </body>
		</html>
  `;
};
