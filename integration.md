# 統合
ステッチングレイヤー(Stitching layer) とも言われる。
※ https://dev.to/onerzafer/understanding-micro-frontends-1ied

## ビルド時の統合
プライベートにライブラリを公開し、npm pluginを使う。

## サーバーサイド

## Edgeサイド (CDN)

## クライアントサイド

* iframe
* Web Components

Angular, React, Vue, Stencil, Polymer
Ember, Backbone, Stencil, Preact

# 分割

水平分割は、画面内にある要素で分割
垂直分割は、画面毎に分割

※ https://medium.com/@lucamezzalira/micro-frontends-decisions-framework-ebcd22256513

別の観点

* マイクロフロントエンドは、ページ上の場所ではなく、ビジネスドメインによって分割されます。
※ https://medium.com/@benjamin.d.johnson/exploring-micro-frontends-87a120b3f71c

# Routing

※ https://medium.com/dazn-tech/orchestrating-micro-frontends-a5d2674cbf33

# データ共有

URLベースのデータ共有

※ https://medium.com/hacking-talent/using-micro-frontends-to-permanently-solve-the-legacy-javascript-problem-5fba18b0ceac

ブラウザーストレージ（LocalStorageまたはSessionStorage）

※ https://codeburst.io/breaking-a-large-angular-app-into-microfrontends-fb8f985d549f

Local Storage 良いかも

※ https://medium.com/stepstone-tech/microfrontends-part-2-integration-and-communication-3385bc242673

* 依存関係を共有する便利な方法は、アプリシェルを直接使用することです。
  * データ共有は、windowオブジェクトにするのではなく、AppShellが管理することが良い？
    * が、フラグメントは、AppShellに依存するので、壊れる可能性がある。
※ https://blog.bitsrc.io/sharing-dependencies-in-micro-frontends-9da142296a2b

# オーケストラ

* すべてをオーケストレーションするための親コンテナーアプリを備えたマイクロフロントエンドアーキテクチャ用のWebコンポーネントを使用することにしました。親アプリは、ユーザーセッションと関連するUI要素の管理を担当します。また、アプリケーション間のルーティングを管理し、ナビゲーションコンポーネントをレンダリングし、正しいアプリケーションをロードしてレンダリングします。

※ https://eng.collectivehealth.com/gracefully-scaling-web-applications-with-micro-frontends-part-i-162b1e529074

# History

History API
