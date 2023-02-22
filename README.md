
# Chat-App-Socket.io

Built a Chat app using socket.io library with the backend of nodejs and front-end using reactjs.


## Installation

Install chatapp-socket with npm

```bash
  npm install chatapp-socket
  cd chatapp-socket
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/deepakA18/Chat-App-Socket-io
```

Go to the project directory

```bash
  cd chatapp-socket
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Lessons Learned

How to perform real time data sharing without using database.
Faced an issue while starting a server due to cors policy.

Handling access control of cors policy:

useEffect(() => {
    socket = io(CONNECTION_PORT,{
      transports: ['websocket','polling','flashsocket'],  
    });
  }, []);



## Screenshots

![User 1](https://github.com/deepakA18/Chat-App-Socket-io/blob/main/client/screenshots/Screenshot%202023-02-22%20100145.png)

![User 2](https://github.com/deepakA18/Chat-App-Socket-io/blob/main/client/screenshots/Screenshot%202023-02-22%20100239.png)
