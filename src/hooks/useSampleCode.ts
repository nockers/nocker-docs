type CodeType =
  | "CARD"
  | "TICKET"
  | "EMOTION_FIVE"
  | "EMOTION_HAND"
  | "EMOTION_LIKE"

export const useSampleCode = (type: CodeType) => {
  if (type === "CARD") {
    return `import { NockerCard } from '@nocker/mui'

return (
  <NockerCard
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
    return `import { NockerTicket } from '@nocker/mui'

return (
  <NockerTicket
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  if (type === "EMOTION_FIVE") {
    return `import { NockerEmotion } from '@nocker/mui'

return (
  <NockerEmotion
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  if (type === "EMOTION_HAND") {
    return `import { NockerEmotionHand } from '@nocker/mui'

return (
  <NockerEmotionHand
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  if (type === "EMOTION_LIKE") {
    return `import { NockerEmotionLike } from '@nocker/mui'

return (
  <NockerEmotionLike
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)



`
  }

  return ""
}
