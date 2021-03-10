## Project Description

### Evaluate a News Article with Natural Language Processing

- This Project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs on other websites. NLP is the ability of an application to understand the human language, written or oral.

### Project prerequistes:

- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
- External script - Service Worker
- External API - MeaningCloudAPI

### Walkthrough on how to install the project on local machine:

- Clone Project directory. Install everything using the commands below.
`> cd <project directory>`

`> npm install.`

- Install env file using the command below
`npm install env-cmd`
- Create a new `.env` file in the root directory of the project.
- Fill the `.env` file with your API keys like: `API_KEY= *********`

### To run the project
1. Open two terminals in project directory.
2. In the second terminal window use the command `npm run build-prod`
3. Again in second terminal window: Start the server `> npm run start`
4. In the first terminal window: Run the development server `> npm run build-dev`; this will redirect you to open `http://localhost:8081`
5. Enter a text in the dialog box and the analysis results will be displayed under 'Form Results'.

### To run test cases we will use Jest

`> cd <project directory>`
`> npm run test`

### Screenshots

#### Postman Request

#### Post Request

![alt post](https://github.com/nishanthulwan47/EVALUATE-NEWS-NLP/blob/main/images/Post.png?raw=true)

