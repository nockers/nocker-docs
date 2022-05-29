# インストール

Npmからブラウザ向けのライブラリ`@nocker/browser`をインストールします。

```bash
$ yarn add @nocker/browser
```

muiを用いたReactアプリの場合は[@nocker/mui](/docs/category/react---mui)が使用できます。

## ウィジェットを試す

メソッド`render`を実行して、画面の右下にFAB（固定ボタン）を表示します。

その他のウィジェットは[こちら](https://storybook.nocker.dev/?path=/story/nockercard--default)で確認できます。

```tsx
import { nocker } from '@nocker/browser'

nocker.render()
```

ユーザが送信したフォームの内容を取得するには、NockerFabの`onSubmitTicket`にコールバック関数を渡します。

```tsx
import { nocker } from '@nocker/browser'

nocker.render({
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
```

### render Options

Name|Type|Default|Description
:--|:--|:--|:--
onSubmitEmotion|string|null|評価がタップした時
onSubmitTicket|string|null|お問い合わせが送信された時
onError|string|null|エラーが発生した時

### テーマを適用する

メソッド`setTheme`を実行して、Nockerの用意するデフォルトのテーマを適用できます。
例えば`palette.mode`を設定することでダークモードに変更できます。

```ts
import { nocker } from '@nocker/browser'

nocker.setTheme({
  palette: {
    mode: "dark"
  }
})

nocker.render()
```

テーマを設定しない場合はデフォルトのテーマが使用されます。

### フォントを設定する

Nockerはデフォルトで「M PLUS 1p」を使用しています。Googleフォントを読み込むには`<link>`タグを追加してください。

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@500;700&display=swap" rel="stylesheet">
</head>
```

それ以外のフォントを使用する場合は`typography.fontFamily`を指定します。

```ts
import { nocker } from '@nocker/browser'

nocker.setTheme({
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
  }
})

nocker.render()
```

### ウィジェットの設定を変更する

ウィジェットの設定を変更するには`setWidgetConfig`を呼び出します。

```ts
import { nocker } from '@nocker/browser'

nocker.setWidgetConfig({
  fabText: "こんにちは",
})

nocker.render()
```

## NockerAPIを使用する場合

Nockerはフィードバックを管理する為のNockerAPIを提供しています。
NockerAPIを使用するには事前に[ログイン](https://nocker.app)とプロジェクトの作成が必要です。

APIを使用しない場合はこのセクションは必要ありません。

### プロジェクトを設定する

メソッド`login`を実行して、NockerのAPIと接続する為に必要なContextを作成します。
この「projectId」はプロジェクトIDで管理画面で確認できます。

```ts
import { nocker } from '@nocker/browser'

nocker.login({
  projectId: "<YOUR_PROJECT_ID>",
  environment: "PRODUCTION",
})

nocker.render()
```

Knocker以外のAPIと接続する場合は`baseURL`を設定してください。

```ts
import { nocker } from '@nocker/browser'

nocker.login({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  environment: "PRODUCTION",
  baseURL: "<YOUR_API_ENDPOINT>"
})

nocker.render()
```

### login Options

Name|Type|Default
:--|:--|:--
projectId|string|"xxxxxxxxxxxxxxxxxxxxx"
environment|string|"PRODUCTION"
baseURL|string|"//nocker.app/api"
