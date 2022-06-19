type CodeType =
  | "CARD"
  | "TICKET"
  | "EMOTION_FIVE"
  | "EMOTION_HAND"
  | "EMOTION_LIKE"

export const useSampleCode = (type: CodeType) => {
  if (type === "CARD") {
    return `import { Widget } from '@nocker/mui'

return (
  <Widget
    onSubmitTicket={(data) => {
      console.log(data)
    }}
    onSubmitEmotion={(data) => {
      console.log(data)
    }}
  />
)`
  }

  if (type === "TICKET") {
    return `import { WidgetTicket } from '@nocker/mui'

return (
  <WidgetTicket
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  if (type === "EMOTION_FIVE") {
    return `import { WiddgetEmotion } from '@nocker/mui'

return (
  <WiddgetEmotion
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  if (type === "EMOTION_HAND") {
    return `import { WidgetEmotionHand } from '@nocker/mui'

return (
  <WidgetEmotionHand
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  if (type === "EMOTION_LIKE") {
    return `import { WidgetEmotionLike } from '@nocker/mui'

return (
  <WidgetEmotionLike
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  return ""
}
