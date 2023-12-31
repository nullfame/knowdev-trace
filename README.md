# KnowDev Trace 🧶

Project browser tagging and tracking

## 📋 Usage

### Installation

``` bash
npm install --save @knowdev/trace
```

### Example

#### src/plugins/trace.js



``` javascript
import trace from "@knowdev/trace";

export default function (app) {
  app.use(trace, {
    // cookieName: "_kds-tr",

    // Options from vue-cookies (defaults shown)
    // domain: ""
    // expires: "1d"
    // path: "/"
    // sameSite: "Lax"
    // secure: ""
  });
}
```

## 📖 Reference

## 📝 Changelog

| Date       | Version | Summary |
| ---------- | ------- | ------- |
| 12/31/2023 |   0.0.1 | First commit |
| 12/31/2023 |   0.1.0 | Set and retrieve browser id cookie |

## 🛣 Roadmap

* 0.1.X - Server to ping
* 0.2.0 - Send a trace ping to a server

### Wishlist 🌠

## 📜 License

All rights reserved. Safe for use around pets.
