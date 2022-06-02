# インストール

最初に`<script>`タグを用いてHTML5向けのライブラリ「Nock」を読み込みます。これは`<head>`以外の場所でも問題ありません。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    window.nock = (a, b) => (nock.a = nock.a || []).push([a, b])
  </script>
</head>
```

HTML5では`<script>`タグに`async`属性を追加することで、ライブラリを非同期で読み込み実行できます。HTMLのパースとDOMのレンダリングを止めない為に`async`属性を追加することをおすすめします。

## ウィジェットを試す

関数`nock`に`render`を渡して、画面の右下にFAB（固定ボタン）を表示します。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    window.nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    window.nock("render")
  </script>
</head>
```

ユーザが送信したフォームの内容を取得するには、NockerFabの`onSubmitTicket`にコールバック関数を渡します。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    window.nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    window.nock("render", {
      onSubmitEmotion(emotion) {
        console.log(emotion)
      },
      onSubmitTicket(ticket) {
        console.log(ticket)
      },
      onError(error) {
        console.error(error)
      }
    })
  </script>
</head>
```

### render Options

Name|Type|Default|Description
:--|:--|:--|:--
onSubmitEmotion|string|null|評価がタップした時
onSubmitTicket|string|null|お問い合わせが送信された時
onError|string|null|エラーが発生した時

### テーマを適用する

メソッド`setTheme`を用いて、Nockerの用意するデフォルトのテーマを適用できます。
例えば`palette.mode`を設定することでダークモードに変更できます。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    window.nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    window.nock("setTheme", {
      palette: {
        mode: "dark"
      }
    })
    window.nock("render")
  </script>
</head>
```

テーマを設定しない場合はデフォルトのテーマが使用されます。

### フォントを設定する

Nockerはデフォルトで「M PLUS 1p」を使用しています。Googleフォントを読み込むには`<link>`タグを追加してください。

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@500;700&display=swap" rel="stylesheet">
  <script async src="//widget.nocker.app"></script>
  <script>
    window.nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    window.nock("render")
  </script>
</head>
```

それ以外のフォントを使用する場合は`typography.fontFamily`を指定します。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    const nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    nock("setTheme", {
      typography: {
        fontFamily: "'Noto Sans JP', sans-serif",
      }
    })
    window.nock("render")
  </script>
</head>
```

### ウィジェットの設定を変更する

ウィジェットの設定を変更するには`setWidgetConfig`を呼び出します。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    const nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    nock("setWidgetConfig", {
      fabText: "こんにちは",
    })
    window.nock("render")
  </script>
</head>
```

## NockerAPIを使用する場合

Nockerはフィードバックを管理する為のNockerAPIを提供しています。
NockerAPIを使用するには事前に[ログイン](https://nocker.app)とプロジェクトの作成が必要です。

APIを使用しない場合はこのセクションは必要ありません。

### プロジェクトを設定する

メソッド`login`を用いて、NockerのAPIと接続する為に必要なContextを作成します。
この「projectId」はプロジェクトIDで管理画面で確認できます。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    const nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    nock("login", {
      projectId: "<YOUR_PROJECT_ID>",
      environment: "PRODUCTION",
    })
    window.nock("render")
  </script>
</head>
```

Knocker以外のAPIと接続する場合は`baseURL`を設定してください。

```html
<head>
  <script async src="//widget.nocker.app"></script>
  <script>
    const nock = (a, b) => (nock.a = nock.a || []).push([a, b])
    nock("login", {
      projectId: "xxxxxxxxxxxxxxxxxxxxx",
      environment: "PRODUCTION",
      baseURL: "<YOUR_API_ENDPOINT>"
    })
    window.nock("render")
  </script>
</head>
```

### login Options

Name|Type|Default
:--|:--|:--
projectId|string|"xxxxxxxxxxxxxxxxxxxxx"
environment|string|"PRODUCTION"
baseURL|string|"//nocker.app/api"
