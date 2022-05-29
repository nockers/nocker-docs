# 設定

メソッド`setWidgetConfig`を用いて設定を変更します。

```js
nock("setWidgetConfig", {
  ticketInputPlaceholder: "製品の改善についてご意見・ご要望をお聞かせください。",
  ticketThanksMessage: "ありがとうございます。フィードバックを送信しました。",
  ticketButtonSubmitText: "送信する",
  ticketButtonResetText: "続ける",
  emotionQuestionMessage: "このページは役に立ちましたか？",
  emotionThanksMessage: "回答ありがとうございます",
  emotionFiveGradeOneMessage: "非常に良くない",
  emotionFiveGradeTwoMessage: "あまり良くない",
  emotionFiveGradeThreeMessage: "良くも悪くもない",
  emotionFiveGradeFourMessage: "そこそこ良い",
  emotionFiveGradeFiveMessage: "非常に良い",
  emotionTwoGradeOneMessage: "良くない",
  emotionTwoGradeTwoMessage: "良い",
  emotionOneButtonText: "いいね",
  fabText: "フィードバック",
  fabIcon: "",
  emotionType: "FIVE",
  isMinimal: false,
  hasBorder: true,
  hasHelps: false,
})

```
