const express = require('express');
const socket = require('socket.io');
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json());


const server = app.listen("3002",()=>{
    console.log("Server Running on port 3002.....");
})

io = socket(server);

io.on("connection",(socket)=>{
    console.log(socket.id)

socket.on("join_room",(data)=>{       //socket.on whenever you want to receive the data.
    socket.join(data)
    console.log("User joined Room: "+ data);
})

socket.on("send_message", (data)=> {
    console.log(data);
    socket.to(data.room).emit("receive_message",data.content)
})


socket.on("disconnect", ()=> {
    console.log('USER DISCONNECTED')
})
})