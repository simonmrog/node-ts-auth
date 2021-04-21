import app from "./app";
import config from "./config";


function initApplication(): void {
  app.listen(config.PORT, function () {
  console.log(`Server running on port ${config.PORT}`);
});
}

initApplication();
