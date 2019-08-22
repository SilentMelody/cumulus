export function requestSuccessFunc(requestObj) {
  // CONSOLE_REQUEST_ENABLE && console.log(`%c id: ${requestObj.id}`, 'color: #f00; requestInterceptorFunc', `url: ${requestObj.url}`, `${requestObj.desc}`);
  return requestObj
}

export function requestFailFunc(requestError) {
  return Promise.reject(requestError)
}

export function responseSuccessFunc(responseObj) {
  return responseObj
}

export function responseFailFunc(responseError) {
  return Promise.reject(responseError)
}
