import { io } from "socket.io-client";
const socket = io("localhost:3000");

socket.on("connect", () => {
  console.log("connected now");
});
function App() {
  return <div></div>;
}

export default App;
