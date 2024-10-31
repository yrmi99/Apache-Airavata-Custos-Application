# Apache-Airavata-Custos-Application
Front-End: React
Back-End: Node.js/Express.js

1. clone this repository

## Running front end:
2. cd to `custos` directory
3. `npm start`

## Running back end server:
2. cd to 'backend' directory
3. 'node server.js'

## To access app
1. Press Log in Button
2. Log in to CILogon through GT or another institution
3. You will arrive at a user details screen with your name and email
4. An Add Content button is accessible to access the Backend API Server

## Custos Implementation
Custos authentication occurs when the user clicks the log in button on the front page.
This authentication logic occurs in authLogin.tsx and is done with a library ("react-oauth2-code-pkce")
The library calls the /authorize endpoint and redirects to CILogon for secure log-in.
After logging in, the /token endpoint is called and a token is provided to allow for authorized actions.

## Access Control
Access control is based on the GBAC model. After authenticating the user, a main details page is presented
with the user's name and email. An "Add Content" button is also there. This "Add Content" button involves
the backend server API and the access control. To add content, the front-end sends a api request to the backend
for a response with success. To send the api call, the user's groups are checked by calling the /userinfo
endpoint. This provides the user's groups and scopes. If the user is in the group "Adminsss", they are able to
add content; however, if not, they are told they do not have access to the it.
