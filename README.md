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

    // Options from vue-cookie-next (defaults shown)
    // domain: ""
    // expire: "1d"
    // path: "/"
    // sameSite: ""
    // secure: ""
  });
}
```

#### src/plugins/index.js

``` javascript
// ...
import trace from "./trace";

export function registerPlugins(app) {
  // ...
  app.use(trace);
}
```

#### src/App.vue

``` vue
<script setup>
import trace from "@knowdev/trace";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  console.log("id :>> ", trace.getBrowserId());
});
</script>

<template>
  <router-view />
</template>
```

## 📖 Reference

## 💻 Development

When the plugin is registered, when `app.use(trace)` is called, the object's install method is called. That is `src/install.function.js`.

## 📝 Changelog

| Date       | Version | Summary |
| ---------- | ------- | ------- |
| 12/31/2023 |   0.0.1 | First commit |
| 12/31/2023 |   0.1.0 | Set and retrieve browser id cookie |

## 🛣 Roadmap

* 0.1.X - Switch to vue-cookie-next
* 0.1.X - Give browser id an advanced (infinite?) expiration
* 0.1.Z - Server to ping
* 0.2.0 - Send a trace ping to a server

### Wishlist 🌠

## 📜 License

All rights reserved. Safe for use around pets.
