import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // Укажи правильный URL сервера WebSocket

export default socket;
