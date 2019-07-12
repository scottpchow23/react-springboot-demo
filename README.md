# springboot-react-demo

## Setup

Run the following two commands:
  * In the root directory: `./gradlew` (Downloads backend dependencies)
  * In `frontend/`: `npm install` (Downloads frontend dependencies)

Install postgresql: `brew install postgresql`

## Running this demo

Run the following two commands (and allow them to keep running):
  * In the root directory: `./gradlew bootRun` (Runs the backend)
  * In `frontend/`: `npm start` (Runs the frontend)

You can play with the frontend by navigating to `http://localhost:3001/`, or whatever port you bound the frontend to. The backend runs on port 8080 by default.