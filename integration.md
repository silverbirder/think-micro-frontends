# 統合
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


# オーケストラ

* すべてをオーケストレーションするための親コンテナーアプリを備えたマイクロフロントエンドアーキテクチャ用のWebコンポーネントを使用することにしました。親アプリは、ユーザーセッションと関連するUI要素の管理を担当します。また、アプリケーション間のルーティングを管理し、ナビゲーションコンポーネントをレンダリングし、正しいアプリケーションをロードしてレンダリングします。

※ https://eng.collectivehealth.com/gracefully-scaling-web-applications-with-micro-frontends-part-i-162b1e529074

