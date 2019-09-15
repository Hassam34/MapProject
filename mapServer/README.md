# Map App (BackEnd)

This is an app in which user can add, delete, view and edit the markers on the map

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

make sure you have install the latest node versions.


### Installing

In order to run you must run npm install in the folder of node to download the node modules in the folder

```
npm install

```
Download mongo DB server from website (https://www.mongodb.com/download-center/community) and install it.
Copy the mongodb path from C://ProgramFiles/MongoDB/bin/ and paste it in enviornment variable of This PC->Environment Vairables and in SYSTEM Variables, place this path
Once Placed, go to C Drive and make a folder with name data and in that data folder make a folder in that with name db
Now go to terminal and run mongod command and that will start mongo server



### Note

As this app needs to connect with the local server on which api is runs 
thats why it require the device ip to place in code

##### First open the Welcome.js file
 
and enter your device ip instaed of 192.168.0.115
```
const url= 'http://192.168.0.115:8080/api/cordinates/'
```

##### Now See the mapServer file for the backend (API) readme file

## Author

* **Muhammad Hassam Yahya** - *Initial work* - [Hassam34](https://github.com/Hassam34)



## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

