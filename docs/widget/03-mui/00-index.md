# インストール

NpmからReactアプリ向けのライブラリ`@nocker/browser`をインストールします。

```bash
$ yarn add @nocker/mui
```

このライブラリ`@nocker/mui`は`@mui/material`に依存しています。
もし`@mui/material`がインストールされていない場合は、インストールが必要です。

```bash
$ yarn add @mui/material @mui/lab @mui/icons-material @emotion/react @emotion/styled
```

## ウィジェットを試す

Nockerには、6種類のウィジェットが存在します。ここでは、そのうち`NockerFab`を用いて、画面の右下にFAB（固定ボタン）を表示します。

その他のウィジェットは[こちら](https://storybook.nocker.dev/?path=/story/nockercard--default)で確認できます。

```tsx
import { NockerFab } from '@nocker/mui'

const HomePage: FC = () => {
  return (
    <NockerFab />
  )
}
```

ユーザが送信したフォームの内容を取得するには、NockerFabの`onSubmitTicket`にコールバック関数を渡します。

```tsx
import { createTheme } from "@mui/material"
import {
  createDefaultTheme,
  NockerFab,
  type WidgetEmotionSubmit,
  type WidgetTicketSubmit
} from '@nocker/mui'

const HomePage: FC = () => {
  const onSubmitEmotion = (emotion: WidgetEmotionSubmit) => {
    console.log(emotion)
  }

  const onSubmitTicket = (ticket: WidgetTicketSubmit) => {
    console.log(ticket)
  }

  const onError = (error: Error) => {
    console.error(error)
  }

  return (
    <NockerFab
      onSubmitEmotion={onSubmitEmotion}
      onSubmitTicket={onSubmitTicket}
      onError={onError}
    />
  )
}
```

### NockerFab Props

Name|Type|Default|Description
:--|:--|:--|:--
onSubmitEmotion|string|null|評価がタップした時
onSubmitTicket|string|null|お問い合わせが送信された時
onError|string|null|エラーが発生した時

### テーマを適用する

関数`createDefaultTheme`を用いてNockerの用意するデフォルトのテーマを適用できます。

```tsx
import { createTheme } from "@mui/material"
import {
  createDefaultTheme,
  NockerFab,
  NockerProvider
} from "@nocker/mui"

const HomePage: FC = () => {
  const theme = createDefaultTheme("light")

  return (
    <ThemeProvider theme={theme}>
      <NockerFab />
    </ThemeProvider>
  )
}
```

デフォルトのテーマを使用せず、自分のテーマを適用しても問題ありません。

```tsx
const yourTheme = createTheme({})

return (
  <ThemeProvider theme={yourTheme}>
    <NockerFab />
  </ThemeProvider>
)
```

デフォルトのテーマと自分のテーマの2つを結合したい場合は、muiの`deepmerge`を使用します。

```ts
import { createTheme, ThemeOptions } from "@mui/material"
import { deepmerge } from "@mui/utils"
import { defaultThemeOptions } from "@nocker/mui"

const yourThemeOptions: ThemeOptions = {
  palette: {
    primary: { main: "#ff00ff" },
  },
}

const defaultThemeOptions = createDefaultThemeOptions(yourThemeOptions.palette.mode)

const mergedThemeOptions = deepmerge(defaultThemeOptions, yourThemeOptions)

const theme = createTheme(mergedThemeOptions)
```

#### 参考

- [Theming - Material UI](https://mui.com/material-ui/customization/theming/#api)

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

```tsx
import { createTheme } from "@mui/material"
import {
  NockerFab,
  NockerProvider
} from "@nocker/mui"

const yourTheme = createTheme({
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
  }
})

return (
  <ThemeProvider theme={yourTheme}>
    <NockerFab />
  </ThemeProvider>
)
```

### ウィジェットの設定を変更する

上層のコンポーネントで`NockerProvider`を用いて、ウィジェットの設定を変更します。

```tsx
import { NockerProvider, WidgetConfig } from "@nocker/mui"

const Root: FC = () => {
  const widgetConfig: WidgetConfig = {
    fabText: "こんにちは"
  }

  return (
    <NockerProvider widgetConfig={widgetConfig}>
      <App />
    </NockerProvider>
  )
}
```

## NockerAPIと接続する

Nockerはフィードバックを管理する為のNockerAPIを提供しています。
NockerAPIを使用するには事前に[ログイン](https://nocker.app)とプロジェクトの作成が必要です。

APIを使用しない場合はこのセクションは必要ありません。

### プロジェクトを設定する

上層のコンポーネントで`NockerProvider`を用いて、NockerのAPIと接続する為に必要なContextを作成します。
この「projectId」はプロジェクトIDで管理画面で確認できます。

```tsx
import { createConfig, NockerProvider } from '@nocker/mui'

const Root: FC = () => {
  const config = createConfig({ projectId: "<YOUR_PROJECT_ID>" })

  return (
    <NockerProvider config={config}>
      <App />
    </NockerProvider>
  )
}
```

Knocker以外のAPIと接続する場合は`baseURL`を設定してください。

```tsx
import { createConfig, NockerProvider } from '@nocker/mui'

const config = createConfig({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  environment: "PRODUCTION",
  baseURL: "<YOUR_API_ENDPOINT>"
})
```

### createConfig Options

Name|Type|Default
:--|:--|:--
projectId|string|"xxxxxxxxxxxxxxxxxxxxx"
environment|string|"PRODUCTION"
baseURL|string|"//nocker.app/api"
