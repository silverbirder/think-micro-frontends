# Service

* https://bit.dev/

# OSS

* https://github.com/SAP/luigi

## Luigi
```javascript
const config = {
  settings: {
    responsiveNavigation: 'semiCollapsible',
    header: {
      logo: "/assets/logo.svg",
      title: "Trip"
    }
  },
  routing: {
    // uses hash based navigation if set to true
    useHashRouting: true,
    nodeParamPrefix: "~"
  },
  // navigation structure and settings
  navigation: {
    nodes: [{
      pathSegment: 'trip',
      hideFromNav: true,
      anonymousAccess: true,
      children: [{
          pathSegment: 'weather',
          label: 'Weather',
          icon: 'weather-proofing',
          loadingIndicator: {
            enabled: false
          },
          viewUrl: 'http://localhost:4200',
          anonymousAccess: true
        },
        {
          pathSegment: 'todo',
          label: 'To-Do',
          icon: 'list',
          loadingIndicator: {
            enabled: false
          },
          viewUrl: 'https://trip-todo.web.app',
        }
      ]
    }]
  }
};
window.Luigi.setConfig(config);
```

※ https://gist.github.com/aartek/2d893b9b6b44221960de5d8c5edfea4f#file-luigi-config-js
※ https://medium.com/swlh/luigi-micro-fronteds-orchestrator-8c0eca710151

## Podium

個人的意見だが、データをポッドレットにわたす方法がURLベースしか(HTTPか)なく、ちょっと柔軟性にかける。

※ https://levelup.gitconnected.com/podium-easy-server-side-micro-frontends-385f3a4cd346

## single-spa

https://single-spa.js.org/

## ara-framework

https://ara-framework.github.io/website/

## Airbnb hypernova

https://github.com/airbnb/hypernova

## tailor

https://github.com/zalando/tailor

※ https://www.facebook.com/notes/facebook-engineering/bigpipe-pipelining-web-pages-for-high-performance/389414033919/

# Open Components
https://opencomponents.github.io/

# FrintJS
https://frint.js.org/

# h include
http://mnot.github.io/hinclude/

# piral

https://github.com/smapiot/piral

# qiankun

https://github.com/umijs/qiankun

# Puzzle-js

https://github.com/puzzle-js/puzzle-js

# micromono

https://github.com/lsm/micromono

# siteless

https://www.npmjs.com/package/siteless

# EventBus

https://github.com/krasimir/EventBus

# スケルトンUI

# WebPack module federation

※ https://medium.com/cdiscount-engineering/microservices-frontend-module-federation-an-handsome-promise-3b309944c215
※ https://github.com/module-federation/module-federation-examples

# nx.dev
https://nx.dev/angular

# Reactive Programming
書いてみただけ。

# Webpack manifest

https://medium.embengineering.com/micro-front-ends-webpack-manifest-b05fc63a0d53

# JWT (token)

* local storage, session storage.
* cookie
* url
※ https://medium.com/@mikkanthrope/sso-with-jwt-and-react-micro-frontends-811f0fcc4121

# Composite Pattern

https://medium.com/front-end-weekly/micro-front-ends-dc105f5c0fea

# Open-wc scoped-elements

https://dev.to/open-wc/open-wc-scoped-elements-3e47

# Cellular JS

https://github.com/afsec/cellular-js

# icestark

https://github.com/ice-lab/icestark

# misk-web

https://cashapp.github.io/misk-web/

# mashroom

https://www.mashroom-server.com/

# Varnish EDI

※ https://siguniang.wordpress.com/2013/12/30/varnish-4-edge-side-includes/

# Async API

https://www.asyncapi.com/

# compoxure

https://github.com/tes/compoxure

# HTTP/2
