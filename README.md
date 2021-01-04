# Docker Practice
Start the project with a package.json :  
`npm init`

Install mysql2 with the following command:  
`npm install --save mysql2`

Create a Dockerfile or copy the one in this repo.  
Create a docker-compose.yml file with the desired settings.

Build images and start containers:  
`docker-compose up --build`

Start using your containers. This app has a simple express server, that runs on port 8080 in the container, but the docker-compose file specifies the host port as 4000. That means if we want to make a network request to the server we need to use port 4000.  

The docker-compose file also specifies a MySQL database on container port 3306, which is exposed on port 8001. So we can check the database connection by running the file db_connection.js. For more MySQL Docker connection commands, see this tutorial: https://github.com/BenjaminKyhn/Node_MySQL_tutorial
