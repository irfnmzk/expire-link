import { createServer } from "./core/server";

async function start() {
  const server = createServer();

  const PORT = process.env.PORT || 3114;
  server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

start();
