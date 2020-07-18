* modular monolith
* enterprice architecture (clean architecture)
  * https://itnext.io/building-vue-enterprise-application-part-3-the-store-dbda0e4bb117
* jamstack
  * GatsbyJS と micro frontends
  * https://itnext.io/implementing-microfrontends-in-gatsbyjs-using-ara-framework-a95ee79cc0e7
* app shell
* CDN(edge worker)


# Repository
※ https://medium.com/@areai51/microfrontends-an-approach-to-building-scalable-web-apps-e8678e2acdd6

## mono repo
* 独自のマイクロアプリに厳密に取り組むチームがある場合に最適に機能します
* マルチリポジトリ環境では、各マイクロアプリを個別にビルドする必要があります。
* マルチリポジトリは、非常に大規模なプロジェクトとそれに取り組む非常に大規模なチームがある場合に最適です。
  
## multi repo
* マルチリポジトリ環境では、各マイクロアプリを個別にビルドする必要があります。
* マルチリポジトリは、非常に大規模なプロジェクトとそれに取り組む非常に大規模なチームがある場合に最適です。

# AWS Architecture

S3にHTML/CSS/JSを置いて、MicroFrontends

※ https://blog.bitsrc.io/serverless-microfrontends-in-aws-999450ed3795

# Micro Frontendsの構築順序

https://medium.com/@_rchaves_/building-microfrontends-part-iv-using-cdns-tech-radar-for-consensus-7dd658c1edb7

# Plugin Architecture

https://azu.gitbooks.io/javascript-plugin-architecture/content/
※ https://blog.bitsrc.io/11-popular-misconceptions-about-micro-frontends-d5daecc92efb

# Micro Service

1.ビジネスドメインを中心にモデル化 
2.自動化の文化
3.実装の詳細を非表示にします。
4.すべてのものを分散させる
5.個別に展開する
6.消費者第一
7.障害を特定する
8.非常に観察可能

※ https://www.agilechamps.com/microservices-to-micro-frontends/
