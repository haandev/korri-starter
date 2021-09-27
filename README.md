# körri-backend  

this is not a fork of any project. please support.

-features:

-automatic routing from file system  "/routers" directory
for eg.:  
  you have a file /routers/auth.js  
  two diffrent route defined in this file   
  /login, /user  
  main app will use this routes as /auth/login, /auth/user
  zero config

-jwt and middleware support  
-mysql support with sequelize  
-model,controller,router,middleware abstraction  
-docker
-ssl support

roadmap: 
api version, path prefix  
case conversion middleware
typescript support  
webpack, bundle  
mysql admin ui  
vhost, subdomain support  
automatic swagger generation  
clean documentation  
more sample models, controllers, routers, middlewares  
check port is in use  
cli support  
other supported sequelize drivers  
druid support  
neo4j support  
mongodb support

production :  
yarn start

development :  
yarn dev
