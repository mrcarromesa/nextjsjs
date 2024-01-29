// import { renderToString } from 'react-dom/server'

self.onmessage = function (e) {
  const component = e.data
  // const code = renderToString(e.data)
  console.log('code', component)
}
