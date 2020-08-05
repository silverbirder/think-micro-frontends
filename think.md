# Micro Frontends

## History

[Micro frontends | Technology Radar | ThoughtWorks](https://www.thoughtworks.com/radar/techniques/micro-frontends)

## Proven Company

- Airbnb
- Allegro
- Amazon
- Beamery
- Bit.dev
- BuzzFeed
- DAZN
- Elsevier
- Facebook
- Fiverr
- Hello Fresh
- IKEA
- Klarna
- Microsoft
- Open Table
- OpenMRS
- Otto
- SAP
- Sixt
- Skyscanner
- Spotify
- Starbucks
- Thalia
- Upwork
- ZEISS
- Zalando
- Entando
- Smapiot

## Overview

### Microservices

- Pros
  - 独立性(INDEPENDENT)
    - マイクロサービスは、さまざまなテクノロジーと言語の使用を可能にします。
  - 展開(DEPLOY)
    - 1 つのサービス単位でデプロイが可能となる。
  - スケーラビリティ(SCALABILITY)
    - TODO
  - 堅牢(ROBUST)
    - 疎結合なら、1 つのサービスダウンも全体のサービスダウンとならない。
  - 俊敏性(AGILITY)
    - 開発速度が向上する
- Cons
  - Performance
  - Data Consistency
  - Trouble Shooting
  - Duplication

### MicroFrontends

下記にまとめている。
[Micro Frontends を学んだすべて - LifeHack Engineering Blog](https://silverbirder180.hatenablog.com/entry/2020/05/04/182921)

- Pros
  - 独立性
    - 任意のテクノロジーと任意のチームで開発可能
    - 依存関係をへらす
    - アプリケーションは独立して開発できます
    - アプリケーションは独立してデプロイ
  - 展開
    - 特定の機能をエンドツーエンド(バック、フロント、デプロイ）で確実に実行できる
  - スケーラビリティ
    - よりスケーラブルな組織構造
  - 堅牢
    - TODO
  - 俊敏性
    - 特定のドメインについて最高の知識を持つチーム間で作業を分散すると、リリースプロセスが確実にスピードアップして簡素化される
    - フロントエンドとリリースが小さいということは、リグレッションテストの表面がはるかに小さいことを意味します。リリースごとの変更は少なく、理論的にはテストに費やす時間を短縮できます。
    - フロントエンドのアップグレード/変更にはコストが小さくなる
- Cons
  - <b>独立性</b>
    - 独立できず、相互接続しているチームが存在しがち
    - 多くの機能で複数のマイクロフロントエンドにまたがる変更が必要になり、独立性や自律性が低下
    - ライブラリを共有すること自体は問題ないが、不適切な分割によって作成された任意の境界を回避するための包括的な場所として使用すると、問題が発生する。
    - コンポーネント間の通信の構築は、実装と維持が困難であるだけでなく、コンポーネントの独立性を取り除きます
    - 横断的関心事への変更ですべてのマイクロフロントエンドを最新の状態に保つだけでは、テレメトリ、エラーロギング、パイプラインの構築に時間を費やしてしまいます
    - サイト全体の CSS スタイル
  - 俊敏性
    - 重複作業が発生する
      - 検出可能性が低下した結果、一部の標準コンポーネントを共有できず、個別のフロントエンド間で実装が重複してしまいました。
      - 共有キャッシュがないと、各 Web ビューは独自のデータセットをプルダウンする必要があり、大量の重複呼び出しが発生しました。
      - 異なるバージョンの異なるアプリケーションが同じ依存関係を持っています
  - 展開
    - より大きな機能の部分的な実装が含まれているため、個別にリリースできない
    - サイト全体の CI / CD プロセス
  - パフォーマンス
    - マイクロフロントエンドの実装が不適切な場合、パフォーマンスが低下する可能性があります。
  - 堅牢
  - スケーラビリティ

## Architecture Model

### Integration Pattern

[Micro Frontends – The Missing Piece Of The Puzzle In Feature Teams | BlueSoft](https://bluesoft.com/micro-frontends-the-missing-piece-of-the-puzzle-in-feature-teams/)

#### Build Integration

選択基準

- 他の統合が非常に複雑に思われる場合に、小さなプロジェクト（3 チーム以下）にのみ使用すること

技術

- Bit.dev
- open-wc
- Piral

#### Server Side Integration

選択基準

- 良好な読み込みパフォーマンスと検索エンジンのランキングがプロジェクトの優先事項であること

技術

- Podium
- Ara-Framework
  - Hypernova
- Tailor
- Micromono
- Mashroom (Client も)
- namecheap/ilc (Client も)
- PuzzleJS
- Open Components (Client も)

#### Edge Side Integration

選択基準

- サーバーサイド統合と同じ

技術

- Varnish EDI
- Edge Worker

#### Client Side Integration

選択基準

- さまざまなチームのユーザーインターフェイスを 1 つの画面に統合する必要があるインタラクティブなアプリケーションを構築すること

技術

- Ajax
- Iframe
- Web Components
- Luigi
- Single-Spa
- FrintJS
- Hinclude

### Communication

- Event
- EventBus
- Pub/Sub

### Shared Data

- URL
- Cookie
- Local Storage/Session Storage

※ WebPack Module Federation

### Routing

TODO (Micro Frontends Framework に付属していることが多い)

vaddin router
https://vaadin.com/router

### Cache

TODO

### Tracing

TODO

### Auth

- JWT (token)
- サインインまたはサインアップエクスペリエンスを含む MFE が JWT トークンを取得し、アプリシェルを介してローカルストレージに保存します。
  その後、アプリシェルは認証された領域を読み込みます。認証された MFE はローカルストレージからトークンを取得し、トークンを必要とする他の API だけでなく、
  リフレッシュアクセストークン API を消費するために使用します。これは、私のアカウントセクションのように認証が必要な他の MFE にも当てはまります。

### Performance

- Skeleton UI
- Async API
- HTTP/2

### Proxy

コンポジションプロキシ。テンプレートを組み合わせる。
[tes/compoxure](https://github.com/tes/compoxure)

### Access History

- History API

### Split Policy

フロントエンドを分割する方針について

- 水平分割
  - 画面内にある要素で分割
  - ビジネス上の機能
- 垂直分割
  - 画面毎に分割

### Document-Application

![document-application](https://miro.medium.com/max/1224/1*NJMQCgyMShhjYx6dE_pbRw.png)

マイクロフロントエンドは、かなりのオーバーラップがあるバンドの中央部分の大部分に最も適しています。バンドの両極端に該当するプロジェクトにマイクロフロントエンドアーキテクチャを実装しようとすると、生産性に反することが証明されます。

### Repository Management

#### Mono Repository

- Pros
  - コードベース全体に簡単にアクセスできるようにする場合に最適に機能する。(検出可能性は高い)
- Cons
  - 時間の経過とともに、モノリポジトリは、特に大規模なチームで作業しているときに、動作が遅くなる傾向があり、バージョン管理下のコミットとファイルの数が増加する。

※ https://nx.dev

#### Multi Repository

- Pros
  - マルチリポジトリは、非常に大規模なプロジェクトとそれに取り組む非常に大規模なチームがある場合に最適。
  - 独自のマイクロアプリに厳密に取り組むチームがある場合に最適に機能する。
- Cons
  - マルチリポジトリ環境では、各マイクロアプリを個別にビルドする必要がある。

### Fusion Of Other Architectures

#### Modular Monolith

[Deconstructing the Monolith – Shopify Engineering](https://engineering.shopify.com/blogs/engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity)

モジュール式のモノリスは、すべてのコードが単一のアプリケーションを強化するシステムであり、異なるドメイン間に厳密に強制された境界があります。

- コード編成
- 依存関係の分離
- 境界の適用

[kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd)

#### Enterprise Architecture (Clean Architecture)

レイヤリングと Dependency Inversion Principle (DIP)による Architecture

- [Building an Enterprise Application with Vue](https://medium.com/javascript-in-plain-english/building-vue-enterprise-application-part-0-overture-6d41bea14236)
  - [soloschenko-grigoriy/vue-vuex-ts](https://github.com/soloschenko-grigoriy/vue-vuex-ts/)

#### Jam Stack

JamStack は、Javascript, API、Markup の 3 つを使った Architecture。

- Pros
  - 高速なパフォーマンス
    - ビルド済みのマークアップとアセットを CDN で提供
  - 安全な
    - サーバーやデータベースの脆弱性を心配するニーズ
  - 安価な
    - 静的ファイルのホスティングは安いか、無料
  - 開発者エクスペリエンス
    - フロントエンド開発者は、モノリシックアーキテクチャに縛られることなく、フロントエンドに集中できます。これは通常、より迅速で集中的な開発を意味します
  - スケーラビリティ
    - 製品が急にバイラルになり、多くのアクティブユーザーがいる場合、CDN はシームレスに補正します
- Cons
  - ページ数が多いと、build に時間がかかる
  - リアルタイム更新はできない。（動的なことができない）

#### App Shell

> アプリケーション シェル（App Shell）アーキテクチャは、ネイティブ アプリのように瞬時に、そして確実にユーザーの画面に読み込める Progressive Web App を構築する方法の 1 つです。
> アプリの「シェル」とは、ユーザー インターフェースが機能するために必要な最小限の HTML、CSS、JavaScript です。これらをオフラインで使用できるようにキャッシュしておくことで、ユーザーが同じページに再アクセスした際に、瞬時に高いパフォーマンス が発揮されます。つまり App Shell は、ユーザーがアクセスするたびにネットワークからすべて読み込まれるわけではなく、必要なコンテンツだけが読み込まれます。
> JavaScript を多用したアーキテクチャのシングルページ アプリに対しては、App Shell が有力なアプローチとなります。このアプローチではアプリを実行させるために（Service Worker を使用して）積極的にセルをキャッシュします。次に、JavaScript を使用して各ページの動的コンテンツを読み込みます。App Shell はオフライン環境で、最初の HTML コンテンツを高速で画面に表示するのに役立ちます。
> ※ [App Shell モデル](https://developers.google.com/web/fundamentals/architecture/app-shell?hl=ja)

## Browser Support

TODO

## Technology stack

### Bit.dev

Open Components と似たような コンポーネントを登録して、使うときに import する感じ？
https://bit.dev/

### Luigi

![Luigi Overview Diagram](https://raw.githubusercontent.com/SAP/luigi/master/docs/assets/luigi-overview-diagram.jpg)
※ https://docs.luigi-project.io

![Luigi Architecture](https://docs.luigi-project.io/docu-microfrontend/assets/architecture.png)
※ https://docs.luigi-project.io/docs/luigi-architecture

> Luigi is an open source JavaScript framework for micro frontends.

Luigi は、LuigiCore を中心とした Micro Frontends に必要な機能を提供するフレームワーク。
Routing や Auth などの機能や、Vue,React,Angular などをサポートしているみたいだ。

クライアントサイド統合。
要調査。

### Podium

下記で紹介している。
[Micro Frontends を学んだすべて - LifeHack Engineering Blog](https://silverbirder180.hatenablog.com/entry/2020/05/04/182921)

サーバーサイド統合。

### Single-Spa

https://single-spa.js.org

> single-spa is a framework for bringing together multiple JavaScript microfrontends in a frontend application.
> ※ https://single-spa.js.org/docs/getting-started-overview

クライアントサイド統合。
create-single-spa にて試してみた。大きく 2 つの構成がある。Vue や React などの Rendering を担う Application と、全体を管理する RootConfig がある。
あまり使い勝手がわかりにくく、あんまり DX は良くないかもしれない。

### Ara-Framework

Hypernova を使ったフレームワークで、データを渡せばレンダリング結果をレスポンスしてくれるもの。（レンダリング処理を任せる）

> Client-Side and Universal Rendering
> Server-side render Nova views and hydrate them on the browser to make them interactive, or just Client-Side render them on your SPA.

サーバーサイドレンダリングしつつ、hydrate によるクライアントサイドレンダリングも可能。好印象。

https://ara-framework.github.io/website/
https://github.com/airbnb/hypernova

### Tailor

サーバーサイド統合するもので、特徴的なのが Fragments を streaming しながら統合できる点。
一度試した覚えがあるが、フラグメントにデータを渡す手段が HTTP ベース(URL や Header)のため、少し使い勝手が良くなかった。

### Open Components

Registry にコンポーネントを publish し、それを利用するときは import して build する。
このような構成のメリット/デメリットが知りたい。
→ bit.dev は build 時に integration するが、oc は client や server side の integration をする。

### FrintJS

https://frint.js.org/docs/

> The modular JavaScript framework

> Gives your applications a structure
> Environment agnostic (runs in browser, server, and CLI)
> Rendering library agnostic (integrates with React, Vue, and Preact)
> Composable with multiple packages as needed
> Each package is focused on doing one thing only and doing it well
> Modular architecture with Apps
> Embraces reactive programming with RxJS
> Progressive and easy to adopt in existing applications

FrintJS は、MicroFrontends 向けというよりもモジューラアーキテクチャ向けなのかな。
ただ、MicroFrontends に必要な Router や Rendering、Store などが用意されている。

それぞれが Module として React コンポーネントがある。Redux, Service, Components など
独立できている。これは、ちゃんと使えば疎なアーキテクチャにできるのでは。良いかもしれない。

### Hinclude

> Declarative client-side transclusion, using Custom Elements V1. Perfect for Microfrontend architectures, in combination with server-side transclusion technologies like Edge-Side Includes.

https://github.com/gustafnk/h-include

Web Components で使用されている Custom Elements を使った HTML フラグメントをロードする。
動作としては、h-include タグから Ajax 通信して、innerHTML を追加している。
ブラウザの HTML imports の機能が非推奨になったけど、これは、その代替ツールのよう。
また、lazy ロードの機能がある。（が、別にいらない）

### Piral

> Piral は、次世代ポータルアプリケーションのフレームワークです。マイクロフロントエンドアーキテクチャに準拠したウェブアプリを基本的に短時間で構築できます。Piral では、標準のツールを使用して、可能な限り効率的にすることができます。

https://piral.io

MicroFrontends に必要なツールをセットにした javascript フレームワーク。
piral で構築した SPA を dist した gz を pilet が install する。

Piral インスタンス: アプリケーションシェル
Pilets: 機能モジュール

### PuzzleJS

スケーラブルで高速な Web サイト用のマイクロフロントエンドフレームワーク
https://github.com/puzzle-js/puzzle-js

サーバーサイド統合で、コンパイル時に HTML を javascript 関数にコンパイルするそうだ。
要調査。

### Micromono

モノリスとマイクロサービスを混在することができるフレームワーク。

https://github.com/lsm/micromono

どういうメリットがあるのかイマイチピンとこない。

### WebPack Module Federation

webpack でバンドルしたものを、他でも使えるようにする。共有できるので、サイズ削減できる。

https://github.com/module-federation/module-federation-examples

### nx.dev

https://github.com/nrwl/nx

monorepo を拡張するツールだそうだ。モノレポで誰かがコミットしたものがどこに影響するのか
インテリジェンスに分析してくれるみたい。angular と react、web components が対応している。

### Webpack Manifest

webpack でバンドルした結果を manifest.json へ出力できるプラグイン。

https://github.com/danethurber/webpack-manifest-plugin

### Mashroom

Mashroom は、サーバーサイド統合やクライアント統合をサポートするプラットフォーム。
また、セキュリティ、通信、i18n、ストレージなども一式サポート。
既存の Express を Web アプリケーションから拡張できるみたい？

https://github.com/nonblocking/mashroom

### compoxure

express の middleware である proxy。
キャッシュ戦略に使えそうだ。

要調査

### namecheap/ilc

HTML のフラグメントをレイアウト構築するツール。
https://github.com/namecheap/ilc

### Lerna

https://github.com/lerna/lerna

## Book

- [Micro Frontends in Action](https://www.manning.com/books/micro-frontends-in-action)
