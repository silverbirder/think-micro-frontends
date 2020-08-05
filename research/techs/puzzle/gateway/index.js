const PuzzleJs = require("@puzzle-js/core");
const path = require("path");

const gateway = new PuzzleJs.Gateway({
  name: "Gateway 1",
  fragments: [
    {
      name: "my-product",
      testCookie: "my-product-ab",
      version: "1.0.0",
      versions: {
        "1.0.0": {
          assets: [],
          dependencies: [],
        },
      },
      render: {
        url: "/",
      },
    },
  ],
  api: [
    {
      name: "product",
      testCookie: "my-product-ab",
      liveVersion: "1.0.0",
      versions: {
        "1.0.0": {
          endpoints: [
            {
              method: "get",
              path: "/",
              controller: "getProduct",
            },
            {
              method: "post",
              path: "/",
              controller: "newProduct",
            },
          ],
        },
      },
    },
  ],
  serverOptions: {
    port: 4444,
  },
  url: "http://localhost:4444",
  fragmentsFolder: path.join(__dirname, "./src/fragments"),
});

gateway.init(() => {
  console.log("Gateway is ready to respond");
});
