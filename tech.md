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
