# Map App (FrontEnd)

This is an app in which user can add, delete, view and edit the markers on the map

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

make sure you have install the latest node and react-native versions.


### Installing

In order to run you must run npm install in the terminal to download the node modules in the folder

```
npm install
```


### Note

As this app needs to connect with the local server on which api is runs 
thats why it require the device ip to place in code

##### Open the Welcome.js file
 
Enter your device ip (example: 192.168.0.115) 

```
const url= 'http://<device IP>:8080/api/cordinates/'
```

After that open the terminal in 'MapApp' folder and run the command 

```
react-native run-android
```


##### Now open the mapServer folder and see readme file  for the node.js API (backend) 

## Author

* **Muhammad Hassam Yahya** - *Initial work* - [Hassam34](https://github.com/Hassam34)



## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

