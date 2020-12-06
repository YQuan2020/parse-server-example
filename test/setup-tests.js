const express = require('express');
const http = require('http');
const {ParseServer} = require('parse-server')
const path = require('path');

const Parse = require('parse/node');

const appId = 'appId'
const dbURI = `mongodb://localhost:27018/test`
const masterKey = 'masterKey'
const port = 2337
const serverUrl = `http://localhost:${port}/parse`

const headers = {"X-Parse-Application-Id": appId, "Content-Type": "application/json"};

let server

beforeEach(() => {
    Parse.initialize(appId, "")
    Parse.serverURL = serverUrl
    const api = new ParseServer({
        databaseURI: dbURI,
        cloud: "./cloud/main.js",
        appId: appId,
        masterKey: masterKey,
        serverURL: serverUrl
    });

    const app = express()

    // Serve static assets from the /public folder
    app.use('/public', express.static(path.join(__dirname, '/public')))

    // Serve the Parse API on the /parse URL prefix
    app.use('/parse', api)

    const httpServer = http.createServer(app)
    httpServer.listen(port, () => {
        // console.log()
    })
    server = httpServer
})

afterEach(async () => {
    // TODO: clean database
    await server.close()
})