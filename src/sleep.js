// sleep.js
export const sleep = async millisecond =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, millisecond)
  })
