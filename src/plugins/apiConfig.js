
// 当前宿主平台 兼容多平台应该通过一定特定函数来取得
export const HOST_PLATFORM = 'WEB'

// 是否开启监控
export const MONITOR_ENABLE = true

// 路由默认配置，路由表并不从此引入
export const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true,
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  baseURL: '/cumulus',
  debug: false,
  sep: '/',
}

// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
  sep: '/',
}

// 业务相关配置

// 开发配置
export const CONSOLE_REQUEST_ENABLE = false // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = false // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = false // 监控记录打印
