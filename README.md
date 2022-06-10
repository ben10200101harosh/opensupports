<div align="center">

![OpenSupports](https://user-images.githubusercontent.com/25920622/172173126-f0a07319-0cc2-409b-aa22-120187fa4541.png)

OpenSupports is a simple and beautiful open source ticket system. <br />
<a href="https://www.opensupports.com/"><strong>Learn more »</strong></a>
<br />
<p align="center">
  <a href="#about-the-project">About the Project</a> |
  <a href="#how-to-use">How to Use</a> |
  <a href="#key-features">Key Features</a> |
  <a href="#download">Download</a> |
  <a href="#credits">Credits</a> |
  <a href="#related">Related</a> |
  <a href="#license">License</a>
</p>

</div>

## 🌱 About the Project

### What Customers See

![2022-06-08_10-32_demo](https://user-images.githubusercontent.com/25920622/172630004-988c914b-918e-455c-be48-11f96a00611e.gif)

### What Staff Members See

![2022-06-08_10-32_demo_staff](https://user-images.githubusercontent.com/25920622/172867706-3669c7db-ef86-48df-92a9-8c2bfb19f622.gif)

## 🙌🏼 Ticket System for Absolutely Everyone

OpenSupports is a simple and beautiful open source ticket system.

It is a web application that provides you with a better management of your users’ queries. They send you tickets through OpenSupports and you can handle them appropriately.

Self-hosted, or [hosted by us](https://www.opensupports.com/pricing/), API-driven, and ready to be deployed on your own domain.

## 🧐 Stay Up-to-Date

OpenSupports is growing and steadily incorporating new features. You might want to **add a star to the project** (or watch updates) to be notified about new releases.

## 💪🏼 Features

## 🛠 Install

OpenSupports can be hosted on your own servers, or [hosted by us](https://www.opensupports.com/pricing/).

There are multiple benefits to having the system hosted by its creators, including official support into any problem you might encounter.

But in the case you prefer your development team to deal with the installation, maintenance (upgrades, backups, etc.), and integrations, we charge you nothing for it, OpenSupports is **free and open-soruce**!

Check out our 🔗[installation guide](https://docs.opensupports.com/guides/installation/).

## Development

## Requirements
* PHP 5.6+
* MySQL 4.1+

## Development
Here is a guide of how to set up the development environment in OpenSupports.

### Getting up and running FRONT-END (client folder)
1. Update: `sudo apt update`
2. Clone this repo: `git clone https://github.com/opensupports/opensupports.git`
3. Install `nvm`: https://github.com/nvm-sh/nvm
4. Use node version 11.15.0: `nvm install 11` followed by `nvm use 11`
5. Go to client: `cd opensupports/client`
6. Install dependencies: `npm install`
7. Rebuild node-sass: `npm rebuild node-sass`
8. Run: `npm start` (PHP server api it must be running at :8080)
10. Go to the main app: `http://localhost:3000/app`
11. Your browser will automatically be opened and directed to the browser-sync proxy address.
12. Use `npm start-fixtures` to enable fixtures and not require php server to be running.

OpenSupport uses by default the port 3000, but this port could already be used. If this is the case, you can modify this in the file: `client/webpack.config.js`.

##### Production Task

Just as there is a task for development, there is also a `npm build` task for putting the project into a production-ready state. This will run each of the tasks, while also adding the image minification task discussed above and the result store in `dist/` folder.

**Reminder:** Notice there is `index.html` and `index.php`. The first one searches the backend server where `config.js` says it, the second one uses `/api` to find the server. If you want to run OpenSupports in a single server, then use `index.php`.

#### Frontend Unit Testing
1. Do the steps described before.
2. Install mocha: `npm install -g mocha@6.2.0`
3. Run `npm test` to run the tests.

### Getting up and running BACK-END (server folder)
1. Install [Docker CE](https://docs.docker.com/install/)
2. Go to the server folder: `cd opensupports/server`
3. Run `make build` to build the images
4. Run `make install` to install composer dependencies

- `make run` runs the backend and database
- `make stop` stop backend and database server
- `make log` show live server logs
- `make db` access to mysql database console
- `make sh` access to backend docker container bash
- `make test` run phpunit tests
- `make doc` to build the documentation (requires `apidoc`)

Server api runs on `http://localhost:8080/`
Also, there's a *phpmyadmin* instance running on `http://localhost:6060/`,
you can access with the username `root` and empty password

##### Building
Once you've installed dependencies for frontend and backend, you can run `./build.sh` and it will generate a zip file inside `dist/` ready for distribution. You can use this file to install OpenSupports on a serving following the [installation instructions](https://github.com/opensupports/opensupports/wiki/Installation)

##### BACKEND API RUBY TESTING

1. Go to tests folder: `cd opensupports/tests`
2. Run `make build` to install ruby container and its required dependencies

- `make run` for running tests (database will be cleared)
- `make clear` for clearing database

##### BACKEND FAKE SMTP SERVER
If you're doing development, you can use a FakeSMTP server to see the mails that are being sent.

1. Install Java if you don't have it yet:

     `sudo apt-get install default-jre`
     `sudo apt-get install default-jdk`

2. [Download FakeSMTP](https://nilhcem.github.io/FakeSMTP/download.html)

3. Extract the file from the zip and run it:

    `java -jar fakeSMTP-2.0.jar`

4. Set the port to 7070 and start the SMTP server.

5. Every time the application sends an email, it will be reflected there.
![2022-06-08_10-32_demo_staff](https://user-images.githubusercontent.com/25920622/172867706-3669c7db-ef86-48df-92a9-8c2bfb19f622.gif)
