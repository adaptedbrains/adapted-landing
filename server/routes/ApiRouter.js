/* eslint-disable no-unused-vars */
const request = require("request");

const path = require("path");
require("dotenv").config({
  path: path.join(process.cwd(), "/config/properties.env"),
});
import BaseRouter from "./BaseRouter";
const qs = require("query-string");
// AWS Config
const AWS = require("aws-sdk");
const timeout = require("connect-timeout");
// const fs = require("fs");
const BACKEND_URL = process.env.NURTURELABS_BACKEND_SERVER;
const S3_URL =
  process.env.S3_URL || "https://s3.ap-south-1.amazonaws.com/lqstaticdata/";
const config = require("../../config.json");
// const constants = require('../../app/constants');
const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT || "50000");
import { contentType } from "mime-types";
// , process.env.AWS_ACCESS_KEY_ID);
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "ap-south-1",
});

const s3 = new AWS.S3();

let router = new BaseRouter();

router.use((req, res, next) => {
  res.set("Cache-Control", "private, no-store, must-revalidate");
  next();
});

router.use(timeout(REQUEST_TIMEOUT));

router.get("/ctolist", (req, res, next) => {
  //
  const url = `${BACKEND_URL}cxo?page_size=100`;
  // const url = "https://api.myjson.com/bins/1g8u5v";
  makeRequest(url, req, res, "GET");
});

router.post("/sendmessage", (req, res, next) => {
  //
  const url = `https://nkpc6eq1sk.execute-api.ap-south-1.amazonaws.com/api/lead`;
  // const url = "https://api.myjson.com/bins/1g8u5v";
  makeRequest(url, req, res, "POST");
});

function makeRequestCustom(url, req, res, method) {
  let options = {
    uri: url,
    timeout: REQUEST_TIMEOUT,
    rejectUnauthorized: false,
    method: method,
    json: true,
    body: req.body,
    headers: {
      "Content-Type": "application/json",
      "secret-key":
        "$2b$10$UgNsn9h6VUr0hsOQaIqDOuO.cswEJikrZ0RaS//GFGyVZivN0KUpK",
      private: "false",
      "User-Agent": "request",
    },
  };
  try {
    requestMaker(options, res);
  } catch (e) {}
}

function makeRequest(url, req, res, method) {
  let headers = headers;
  if (
    url.indexOf("api.myjson") === -1 &&
    url.indexOf("https://s3.ap-south-1.amazonaws.com") === -1
  ) {
    headers = req.headers;
  }
  if (url.includes("nkpc6eq1sk")) {
    headers = {};
  }
  let options = {
    uri: url,
    timeout: REQUEST_TIMEOUT,
    rejectUnauthorized: false,
    method: method,
    json: true,
    body: req.body,
    headers: { ...headers, "User-Agent": "request" },
  };

  try {
    requestMaker(options, res);
  } catch (e) {}
}

function makeFileRequest(url, req, res, method) {
  let headers = req.headers;
  headers["Content-Disposition"] = "attachment";
  let options = {
    uri: url,
    timeout: REQUEST_TIMEOUT,
    method: method,
    json: false,
    rejectUnauthorized: false,
    headers: headers,
    encoding: "binary",
  };
  request.get({ url: url, headers: headers }).pipe(res);
}

function requestFileMaker(options, res) {
  request(options, (error, response, body) => {
    if (!error && response.statusCode && response.statusCode == 200) {
      res.writeHead(200, {
        "Content-Type": "application/pdf",
      });
      res.end(response.body);
    } else {
      let errorObject = {
        error:
          response &&
          response.body &&
          response.body.data &&
          response.body.data.error,
        statusCode: response && response.statusCode && response.statusCode,
      };
      return res.status(400).send(errorObject);
    }
  });
}

function requestMaker(options, res) {
  request(options, (error, response, body) => {
    // ;
    //;
    //;
    console.log(body);
    console.log(error);
    console.log(response);
    if (
      !error &&
      response.statusCode &&
      (response.statusCode == 200 ||
        response.statusCode == 204 ||
        response.statusCode == 201)
    ) {
      return res.status(200).json(body || {});
    } else {
      let errorObject = {
        error:
          response &&
          response.body &&
          response.body.data &&
          response.body.data.error,
        statusCode: response && response.statusCode && response.statusCode,
      };
      return res
        .status((response && response.statusCode) || 400)
        .send(errorObject);
    }
  });
}

export { router };
