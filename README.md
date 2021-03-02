# Getting started
- run `npm install`
- start the express server: `npm start`
- start vite: `npm dev`

# Reproducing the socket polling hitting the wrong port
1. Navigate to http://localhost:3000
1. Open the console, set to preserve log
1. Stop the vite server
1. Notice polling requests are made to http://localhost:3000/__vite_ping (rather than port 3001)
