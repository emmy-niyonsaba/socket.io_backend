const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (s) => {
  console.log(s.id);
});
