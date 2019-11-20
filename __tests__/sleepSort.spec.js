import { sleepSort } from '../src'

test('should be sorted from smallest to largest', () => {
  const array = [3103, 5105, 1256, 4000]
  return sleepSort(array).then(data => {
    expect(data).toEqual([1256, 3103, 4000, 5105])
  })
}, 9999)
