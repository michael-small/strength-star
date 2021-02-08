# Express Server

This backend was initialized based on a [blog post]([https://levelup.gitconnected.com/create-a-react-app-with-an-express-backend-24740b0a6f5e)) by Richard Rosier. This format of having the `/server` and `/client` folders at the root, each with their own `package.json`, is a traditional fullstack website structure.

## How to Run/Why It Runs
This barebone format can run both the server and frontend using `npm run dev` from the root directory. The script is the combination of multiple scripts in the root's `package.json` that install the frontend and backend's dependencies and then runs the server first and client second. The client runs on port 3000 and proxies the Express.js server at port 8080. Richard's post explains the process well.

## Drawbacks of this Structure
Eventually the stack's configurations may run into problems with deploying. Other fullstack React projects that Michael has worked with use different build scripts and utilities to run the server from the same directory of the client. This removes some React specific issues with the building process of a deployed app. In Michael's opinion, that structure is as much of a hassle to work with and adds barriers to understanding the stack. Dealing with the current client/server deployment process's configuration is a bridge that can be crossed when it the project gets there, like many other Express+React projects before it.
