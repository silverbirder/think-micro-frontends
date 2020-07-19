# Micro Frontends
## History
[Micro frontends | Technology Radar | ThoughtWorks](https://www.thoughtworks.com/radar/techniques/micro-frontends)

## Proven Company
* Airbnb
* Allegro
* Amazon
* Beamery
* Bit.dev
* BuzzFeed
* DAZN
* Elsevier
* Facebook
* Fiverr
* Hello Fresh
* IKEA
* Klarna
* Microsoft
* Open Table
* OpenMRS
* Otto
* SAP
* Sixt
* Skyscanner
* Spotify
* Starbucks
* Thalia
* Upwork
* ZEISS
* Zalando
* Entando
* Smapiot
## Overview
### Microservices

* Pros
  * 独立性(INDEPENDENT)
    * マイクロサービスは、さまざまなテクノロジーと言語の使用を可能にします。
  * 展開(DEPLOY)
    * 1つのサービス単位でデプロイが可能となる。
  * スケーラビリティ(SCALABILITY)
    * TODO
  * 堅牢(ROBUST)
    * 疎結合なら、1つのサービスダウンも全体のサービスダウンとならない。
  * 俊敏性(AGILITY)
    * 開発速度が向上する
* Cons
  * Performance
  * Data Consistency
  * Trouble Shooting
  * Duplication

### MicroFrontends
下記にまとめている。
[Micro Frontends を学んだすべて - LifeHack Engineering Blog](https://silverbirder180.hatenablog.com/entry/2020/05/04/182921)

* Pros
  * 独立性
    * 任意のテクノロジーと任意のチームで開発可能
    * 依存関係をへらす
    * アプリケーションは独立して開発できます
    * アプリケーションは独立してデプロイ
  * 展開
    * 特定の機能をエンドツーエンド(バック、フロント、デプロイ）で確実に実行できる
  * スケーラビリティ
    * よりスケーラブルな組織構造
  * 堅牢
    * TODO
  * 俊敏性
    * 特定のドメインについて最高の知識を持つチーム間で作業を分散すると、リリースプロセスが確実にスピードアップして簡素化される
    * フロントエンドとリリースが小さいということは、リグレッションテストの表面がはるかに小さいことを意味します。リリースごとの変更は少なく、理論的にはテストに費やす時間を短縮できます。
    * フロントエンドのアップグレード/変更にはコストが小さくなる
* Cons

## Architecture Model
### Integration Pattern
#### Build Integration
#### Server Side Integration
#### Edge Side Integration
#### Client Side Integration
### Communication
* Event
* EventBus
* Pub/Sub

### Shared Data
* URL
* Cookie
* Local Storage/Session Storage

### Routing
### Cache
### Access History
* History API

### Split Policy
### Repository Management
#### Mono Repository
#### Multi Repository
### Fusion Of Other Architectures
#### Modular Monolith
#### Enterprise Architecture (Clean Architecture)
#### Jam Stack
#### App Shell
## Technology stack
### Bit.dev
### Luigi
![Luigi Overview Diagram](https://raw.githubusercontent.com/SAP/luigi/master/docs/assets/luigi-overview-diagram.jpg)
※ https://docs.luigi-project.io

![Luigi Architecture](https://docs.luigi-project.io/docu-microfrontend/assets/architecture.png)
※ https://docs.luigi-project.io/docs/luigi-architecture

> Luigi is an open source JavaScript framework for micro frontends.

Luigiは、LuigiCoreを中心としたMicro Frontendsに必要な機能を提供するフレームワーク。
RoutingやAuthなどの機能や、Vue,React,Angularなどをサポートしているみたいだ。

クライアントサイド統合。
要調査。

### Podium
下記で紹介している。
[Micro Frontends を学んだすべて - LifeHack Engineering Blog](https://silverbirder180.hatenablog.com/entry/2020/05/04/182921)

サーバーサイド統合。

### Single-Spa
https://single-spa.js.org

> single-spa is a framework for bringing together multiple JavaScript microfrontends in a frontend application.
※ https://single-spa.js.org/docs/getting-started-overview

クライアントサイド統合。
要調査。

### Ara-Framework
#### Hypernova
### Tailor
### Open Components
### FrintJS
### Hinclude
### Piral
### Qiankun
### PuzzleJS
### Micromono
### Siteless
### WebPack Module Federation
### nx.dev
### Webpack Manifest
### Open-wc scoped-elements
### CellularJS
### Icestark
### Misk-Web
### Mashroom
### compoxure
### namecheap/ilc
## Browser Support
## Other
### Skeleton UI
### Reactive Programming
### JWT (token)
### Composite Pattern
### Varnish EDI
### Async API
### HTTP/2
