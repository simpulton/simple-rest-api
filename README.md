# Simple REST API
This is an API built using [StrongLoop](http://strongloop.com/). It relies on NodeJS and MongoDB.

## Prerequisites
You will need:
* [Git](http://git-scm.com/)
* [NodeJS and NPM](https://gist.github.com/isaacs/579814)
* [MongoDB](http://docs.mongodb.org/manual/installation/)
* StrongLoop CLI `npm install -g strongloop`

## Getting Started
1. Make sure you have git installed
2. Install NodeJS and NPM via the provided link (we recommend using the first script).
3. Install MongoDB using the provided link. *Make sure to follow the instructions  all the way down the page to AND including* "Start (Run) MongodDB". *MongoDB must be running in order for the API to run!*
4. If you have not already done so, run `npm install -g strongloop`.
5. Now run the following commands:

  ```bash
  git clone git@github.com:simpulton/simple-rest-api.git
  cd simple-rest-api
  npm install
  slc run
  ```
  * Note: If you want to use the version without authentication, checkout the "without-auth" branch and restart the API if necessary. Be sure to do the same in the simple-rest-website repo.

### Alternative - Docker
An alternative way to run the simple-rest-server is via [Docker](https://www.docker.com/) and [fig](http://www.fig.sh/).

  ```bash
  git clone git@github.com:simpulton/simple-rest-api.git
  cd simple-rest-api
  fig up
  ```
  
Navigate to [localhost:1337/explorer](http://localhost:1337/explorer) (or [http://192.168.59.103:1337/explorer/](http://192.168.59.103:1337/explorer/) if using boot2docker) to view your api. 

Congratulations! 

You can now play around with it using the explorer or head over to [Simple REST Website](https://github.com/simpulton/simple-rest-website) for a super-simple front-end application that connects to your new API!
