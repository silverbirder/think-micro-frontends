# 考えたいこと

- 統合手段 (サーバーサイド、クライアントサイド、ランタイムサイド)
- 状態管理
- 技術スタックパターン
- メリット/デメリット

# コンポーネントの共有方法

- [bit.dev](https://bit.dev/) によるコンポーネントハブ
  - https://blog.bitsrc.io/maximizing-code-reuse-in-react-35ee20ad362c

# コンポーネントの連携方法

## Window

```javascript
// application shell
const mife = [];
window.registerMife = (name, call) => {
  mife.push({
    name,
    call,
  });
};

window.callMife = (target, msg) => {
  mife.filter((m) => m.name === target).forEach((m) => m.call(msg));
};

// microfrontend A
window.registerMife("A", (msg) => {
  //handle message;
});

// microfrontend B
window.callMife("A", {
  type: "show_dialog",
  name: "close_file",
});
```

https://gist.github.com/FlorianRappl/c2423cebde33218fdff628fc9056ee79#file-dom-dispatched-js

※ https://blog.bitsrc.io/communication-between-micro-frontends-67a745c6cfbe

名前は、一貫性のある命名規則にすること。

## Event

```javascript
const handlers = {};

window.publish = (topic, message) => {
  window.dispatchEvent(
    new CustomEvent("pubsub", {
      detail: { topic, message },
    })
  );
};

window.subscribe = (topic, handler) => {
  const topicHandlers = handlers[topic] || [];
  topicHandlers.push(handler);
  handlers[topic] = topicHandlers;
};

window.unsubscribe = (topic, handler) => {
  const topicHandlers = handlers[topic] || [];
  const index = topicHandlers.indexOf(handler);
  index >= 0 && topicHandlers.splice(index, 1);
};

window.addEventListener("pubsub", (ev) => {
  const { topic, message } = ev.detail;
  const topicHandlers = handlers[topic] || [];
  topicHandlers.forEach((handler) => handler(message));
});
```

※ https://gist.github.com/FlorianRappl/e332adfe57e236430f3d7da4ca618395#file-dom-event-bus-definition-js
※ https://blog.bitsrc.io/communication-between-micro-frontends-67a745c6cfbe

# データ共有

```javascript
const data = {};
const getDataGlobal = (name) => {
  const item = data[name];
  return item && item.value;
};
const setDataGlobal = (owner, name, value) => {
  const previous = data[name];

  if (!previous || previous.owner === owner) {
    data[name] = {
      owner,
      name,
      value,
    };

    window.dispatchEvent(
      new CustomEvent("changed-data", {
        detail: {
          name,
          previous: previous && previous.value,
          current: value,
        },
      })
    );
  }
};

microfrontends.forEach((mife) => {
  const api = {
    getData: getDataGlobal,
    setData(name, value) {
      setDataGlobal(mife.name, name, value);
    },
  };

  const script = document.createElement("script");
  script.src = mife.url;
  script.onload = () => {
    script.setup(api);
  };
  document.body.appendChild(script);
});
```

※ https://gist.github.com/FlorianRappl/ca90ef66944457772d21af6297383485#file-api-data-owner-js

# アプリケーションの分割方法

アプリケーションを分割できる方法は少なくとも 4 つありました。

- ビジネス上の懸念または機能ごと。
- より細かく分割し、ドメインオブジェクトで分割します。
- アプリケーション内の場所および UI / UX の問題。
- チームごとに、焦点を絞った懸念に取り組むチームがいた場合。

※ https://medium.com/swlh/problems-with-micro-frontends-8a8fc32a7d58

# Document-Application

![document-application](https://miro.medium.com/max/1224/1*NJMQCgyMShhjYx6dE_pbRw.png)

- マイクロフロントエンドは、かなりのオーバーラップがあるバンドの中央部分の大部分に最も適しています。バンドの両極端に該当するプロジェクトにマイクロフロントエンドアーキテクチャを実装しようとすると、生産性に反することが証明されます。

※ https://medium.com/@areai51/microfrontends-an-approach-to-building-scalable-web-apps-e8678e2acdd6

# Routing

ルーティングサービスは、ルートとテンプレート間のマッピング関係を保持し、受信した要求に基づいて、指定されたルートのテンプレートを識別します。

- https://medium.com/@areai51/microfrontends-an-approach-to-building-scalable-web-apps-e8678e2acdd6

# 規模感

コンポーネント、ルーティング、およびテンプレートのさまざまな部分を分離し、それらを異なるシステムに委任するプロセス全体が、中小規模のアプリでは不要なオーバーヘッドになる可能性があります。
マイクロフロントエンドの利点は、プロジェクトがこれらのサイズと複雑さのしきい値に達し始めたときにのみ有効になります。

- https://medium.com/@areai51/microfrontends-an-approach-to-building-scalable-web-apps-e8678e2acdd6

# Micro Frontends の最初

https://www.thoughtworks.com/radar/techniques/micro-frontends
これが期限らしい。

# Micro Frontends 分割する上での注意点

- データの収集：レガシープロジェクトがある場合、Google アナリティクスまたは類似のサービスを使用して、ユーザーがアプリケーションと対話する方法を理解できれば、ユーザーベースがアプリケーションと対話する方法を明確に理解できます。
  グリーンフィールドプロジェクトの場合、製品チームまたは顧客と協力し、GA または同様のツールを Web アプリケーションに追加し、データを介して初期の仮定を検証します。覚えておいてください、有界コンテキストとサブドメインは、あなたのビジネスを進化させ、一度定義された石で設定されていません！
- ドメインの専門家と話し合う：製品チームまたは会社のドメインの専門家と時間を費やし、彼らの視点、ロードマップ、彼らがプロジェクトをどのように進化させるかについて理解します。これらはマイクロフロントエンドを識別するための重要な情報です。
- チーム編成を確認：あなたは DDD、以下の複数のサブドメインを横断するいくつかのチームがあることを見ればチームいったん定義の罠に該当しないと、もはやそれを変更しない、チームは、あなたのビジネスのように、、、流動性でなければならないメイク内部組織を見直す大胆な決定、ビジネス全体がそれから利益を得るでしょう！
- マイクロフロントエンドは、単一のページまたは SPA または SSR である可能性があります。サブドメインを識別するために DDD に従っている限り、マイクロフロントエンドは、ランディングページの場合のように、単一のページで表されることになります。シングルページアプリケーションアーキテクチャまたはサーバーサイドレンダリングアーキテクチャに基づくより複雑なソリューション。
  コンポーネントは、入れ子になっているコンテナーに密接にリンクされているため、サブドメインを代表しないリスクがあります。したがって、複数のコンテキストの重複は、利点よりも多くの問題を引き起こす可能性があります。
- プロジェクトの最初に適切な時間を投資します。事前にアーキテクチャを設計することは、プロジェクトを開始するための最良の方法ではありません。通常、アーキテクチャは反復的に機能するはずなので、「十分」に設計し、ゆっくりと着実に設計する必要があります。製品チーム、開発者、ユーザーとの関わりを見つけた追加情報に基づいて設計します。
  アプリケーションのさまざまなサブドメインを特定する場合は、十分な時間を投資してください。この決定は、技術チームの構成方法や、チーム間の依存関係が原因で会社が費やす通信のオーバーヘッドに影響を与える可能性があるためです。

※ https://medium.com/dazn-tech/identifying-micro-frontends-in-our-applications-4b4995f39257

# Cache

※ https://blog.bitsrc.io/how-we-achieved-smooth-navigation-across-micro-frontends-42130577924d

# SDLC

![SDLC](https://miro.medium.com/max/1400/1*64pi9rV0JelzrJj71P013g.png)

※ https://medium.com/javascript-in-plain-english/microfrontends-bringing-javascript-frameworks-together-react-angular-vue-etc-5d401cb0072b

# AppsManager

- クライアント側
  - オーケストレーション
  - ルーティング
  - マイクロアプリの分離
  - アプリ間の通信
  - マイクロアプリ UI 間の一貫性
- サーバ側
  - サーバー側レンダリング
  - ルーティング
  - 依存関係管理

※ https://dev.to/onerzafer/understanding-micro-frontends-1ied
※ https://dev.to/aregee/breaking-down-the-last-monolith-micro-frontends-hd4

# Other

https://paulhammant.com/categories.html

# principle

- Modelling around business domain
- Culture of automation
- Hide implementation details
- Decentralisation
- Deploy independently
- Isolate failure

# Note

representation of a business subdomain
