![logo](https://raw.githubusercontent.com/argonlaser/badgeit-front/master/public/img/logo_100x100.png)

# badgeit-front
[![Build Status](https://semaphoreci.com/api/v1/argonlaser/badgeit-front/branches/master/badge.svg)](https://semaphoreci.com/argonlaser/badgeit-front)

Frontend of https://badgeit.today


## Running the tests
```
$ npm test
```

## Bug reports
Please feel to raise an [issue](https://github.com/argonlaser/badgeit-front/issues) here. It means a lot to the project.

## Contribution 

1. Clone this repository in your ~/workspace.
```
$ git clone https://github.com/argonlaser/badgeit-front
```
2. Install the npm global modules.
```
$ npm install -g gulp
$ npm install -g ngrok
```
3. Change directory to the ~/workspace/badgeit-front.
4. To run the server:
```
$ gulp dev
```
5. To do the http tunneling, issue the following command and copy the ngrok link in the browser and in routes.js file.
```
$ ngrok http 8080
```
6. Make changes in the server or views and refresh the browser to see your change.
7. Commit to the dev branch using:
```
$ git push origin master:dev
```

## Authors

* Authored and maintained by **Venkata krishna** and the list of [contributors](https://github.com/argonlaser/badgeit-front/contributors).

* Contact me via [Twitter](https://twitter.com/argon_laser)




