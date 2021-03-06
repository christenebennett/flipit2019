require('dotenv').config();

const server = require("./server");

const PORT =  process.env.PORT || 9090;

server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
