# 考えたいこと

* 統合手段 (サーバーサイド、クライアントサイド、ランタイムサイド)
* 状態管理
* 技術スタックパターン
* メリット/デメリット

# コンポーネントの共有方法

* [bit.dev](https://bit.dev/) によるコンポーネントハブ
  * https://blog.bitsrc.io/maximizing-code-reuse-in-react-35ee20ad362c

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
  mife.filter(m => m.name === target).forEach(m => m.call(msg));
};

// microfrontend A
window.registerMife('A', msg => {
  //handle message;
});

// microfrontend B
window.callMife('A', {
  type: 'show_dialog',
  name: 'close_file'
});
```
https://gist.github.com/FlorianRappl/c2423cebde33218fdff628fc9056ee79#file-dom-dispatched-js

※ https://blog.bitsrc.io/communication-between-micro-frontends-67a745c6cfbe

名前は、一貫性のある命名規則にすること。

## Event

```javascript
const handlers = {};

window.publish = (topic, message) => {
  window.dispatchEvent(new CustomEvent('pubsub', {
    detail: { topic, message },
  }));
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

window.addEventListener('pubsub', ev => {
  const { topic, message } = ev.detail;
  const topicHandlers = handlers[topic] || [];
  topicHandlers.forEach(handler => handler(message));
});
```
※ https://gist.github.com/FlorianRappl/e332adfe57e236430f3d7da4ca618395#file-dom-event-bus-definition-js
※ https://blog.bitsrc.io/communication-between-micro-frontends-67a745c6cfbe

# データ共有

```javascript
const data = {};
const getDataGlobal = name => {
  const item = data[name];
  return item && item.value;
}
const setDataGlobal = (owner, name, value) => {
  const previous = data[name];

  if (!previous || previous.owner === owner) {
    data[name] = {
      owner,
      name,
      value,
    };

    window.dispatchEvent(new CustomEvent('changed-data', {
      detail: {
        name,
        previous: previous && previous.value,
        current: value,
      },
    }));
  }
};

microfrontends.forEach(mife => {
  const api = {
    getData: getDataGlobal,
    setData(name, value) {
      setDataGlobal(mife.name, name, value);
    },
  };

  const script = document.createElement('script');
  script.src = mife.url;
  script.onload = () => {
    script.setup(api);
  };
  document.body.appendChild(script);
});
```
※ https://gist.github.com/FlorianRappl/ca90ef66944457772d21af6297383485#file-api-data-owner-js

# アプリケーションの分割方法

アプリケーションを分割できる方法は少なくとも4つありました。
* ビジネス上の懸念または機能ごと。
* より細かく分割し、ドメインオブジェクトで分割します。
* アプリケーション内の場所およびUI / UXの問題。
* チームごとに、焦点を絞った懸念に取り組むチームがいた場合。

※ https://medium.com/swlh/problems-with-micro-frontends-8a8fc32a7d58
