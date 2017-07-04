const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
app.get('/', (req, res) => {
	res.send("haha, 您好呀, Linux, 我很喜欢你，你简洁，干净，我非常喜欢呢，不知道你觉得如何呢，哈哈，反正我是很喜欢呢，它很好玩呢， 哈哈");
});
server.listen(port, () => {
	console.log(`server run at ${port} port`);
	console.log(server.address());
});
