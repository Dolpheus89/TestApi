const app = require("./app");

const serverPort = 3310;

app.listen(serverPort, () => {
  console.info(`http://localhost:${serverPort}`);
});
