// sleepSort.js
import { sleep } from './sleep'

export async function sleepSort (array) {
  const result = []
  const bed = array.map(item =>
    (async () => {
      await sleep(item)
      result.push(item)
    })()
  )
  await Promise.all(bed)
  return result
}
