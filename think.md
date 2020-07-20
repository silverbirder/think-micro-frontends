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
  * <b>独立性</b>
    * 独立できず、相互接続しているチームが存在しがち
    * 多くの機能で複数のマイクロフロントエンドにまたがる変更が必要になり、独立性や自律性が低下
    * ライブラリを共有すること自体は問題ないが、不適切な分割によって作成された任意の境界を回避するための包括的な場所として使用すると、問題が発生する。
    * コンポーネント間の通信の構築は、実装と維持が困難であるだけでなく、コンポーネントの独立性を取り除きます
    * 横断的関心事への変更ですべてのマイクロフロントエンドを最新の状態に保つだけでは、テレメトリ、エラーロギング、パイプラインの構築に時間を費やしてしまいます
    * サイト全体のCSSスタイル
  * 俊敏性
    * 重複作業が発生する
      * 検出可能性が低下した結果、一部の標準コンポーネントを共有できず、個別のフロントエンド間で実装が重複してしまいました。
      * 共有キャッシュがないと、各Webビューは独自のデータセットをプルダウンする必要があり、大量の重複呼び出しが発生しました。
      * 異なるバージョンの異なるアプリケーションが同じ依存関係を持っています
  * 展開
    * より大きな機能の部分的な実装が含まれているため、個別にリリースできない
    * サイト全体のCI / CDプロセス
  * パフォーマンス
    * マイクロフロントエンドの実装が不適切な場合、パフォーマンスが低下する可能性があります。
  * 堅牢
  * スケーラビリティ

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
フロントエンドを分割する方針について

* 水平分割
  * 画面内にある要素で分割
  * ビジネス上の機能
* 垂直分割
  * 画面毎に分割

### Document-Application

![document-application](https://miro.medium.com/max/1224/1*NJMQCgyMShhjYx6dE_pbRw.png)

マイクロフロントエンドは、かなりのオーバーラップがあるバンドの中央部分の大部分に最も適しています。バンドの両極端に該当するプロジェクトにマイクロフロントエンドアーキテクチャを実装しようとすると、生産性に反することが証明されます。

### Repository Management
#### Mono Repository
* Pros
  * コードベース全体に簡単にアクセスできるようにする場合に最適に機能する。(検出可能性は高い)
* Cons
  * 時間の経過とともに、モノリポジトリは、特に大規模なチームで作業しているときに、動作が遅くなる傾向があり、バージョン管理下のコミットとファイルの数が増加する。

#### Multi Repository
* Pros
  * マルチリポジトリは、非常に大規模なプロジェクトとそれに取り組む非常に大規模なチームがある場合に最適。
  * 独自のマイクロアプリに厳密に取り組むチームがある場合に最適に機能する。
* Cons
  * マルチリポジトリ環境では、各マイクロアプリを個別にビルドする必要がある。

### Fusion Of Other Architectures
#### Modular Monolith
[Deconstructing the Monolith – Shopify Engineering](https://engineering.shopify.com/blogs/engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity)

モジュール式のモノリスは、すべてのコードが単一のアプリケーションを強化するシステムであり、異なるドメイン間に厳密に強制された境界があります。

* コード編成
* 依存関係の分離
* 境界の適用

[kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd)

#### Enterprise Architecture (Clean Architecture)
レイヤリングとDependency Inversion Principle (DIP)によるArchitecture

* [Building an Enterprise Application with Vue](https://medium.com/javascript-in-plain-english/building-vue-enterprise-application-part-0-overture-6d41bea14236)
  * [soloschenko-grigoriy/vue-vuex-ts](https://github.com/soloschenko-grigoriy/vue-vuex-ts/)

#### Jam Stack
JamStackは、Javascript, API、Markupの3つを使ったArchitecture。

* Pros
  * 高速なパフォーマンス
    * ビルド済みのマークアップとアセットをCDNで提供
  * 安全な
    * サーバーやデータベースの脆弱性を心配するニーズ
  * 安価な
    * 静的ファイルのホスティングは安いか、無料
  * 開発者エクスペリエンス
    * フロントエンド開発者は、モノリシックアーキテクチャに縛られることなく、フロントエンドに集中できます。これは通常、より迅速で集中的な開発を意味します
  * スケーラビリティ
    * 製品が急にバイラルになり、多くのアクティブユーザーがいる場合、CDNはシームレスに補正します
* Cons
  * ページ数が多いと、buildに時間がかかる
  * リアルタイム更新はできない。（動的なことができない）

#### App Shell
> アプリケーション シェル（App Shell）アーキテクチャは、ネイティブ アプリのように瞬時に、そして確実にユーザーの画面に読み込める Progressive Web App を構築する方法の 1 つです。
> アプリの「シェル」とは、ユーザー インターフェースが機能するために必要な最小限の HTML、CSS、JavaScript です。これらをオフラインで使用できるようにキャッシュしておくことで、ユーザーが同じページに再アクセスした際に、瞬時に高いパフォーマンス が発揮されます。つまり App Shell は、ユーザーがアクセスするたびにネットワークからすべて読み込まれるわけではなく、必要なコンテンツだけが読み込まれます。
> JavaScript を多用したアーキテクチャのシングルページ アプリに対しては、App Shell が有力なアプローチとなります。このアプローチではアプリを実行させるために（Service Worker を使用して）積極的にセルをキャッシュします。次に、JavaScript を使用して各ページの動的コンテンツを読み込みます。App Shell はオフライン環境で、最初の HTML コンテンツを高速で画面に表示するのに役立ちます。
※ [App Shell モデル](https://developers.google.com/web/fundamentals/architecture/app-shell?hl=ja)

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
