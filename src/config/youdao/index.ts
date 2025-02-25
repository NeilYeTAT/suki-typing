import { nanoid } from 'nanoid'
import CryptoJS from 'crypto-js'

// * 应当在服务端调用, 减少前端展示页面数据处理的复杂度~~

export const YOUDAO_URL = 'https://openapi.youdao.com/api'
// https://openapi.youdao.com/v2/dict

// * 有道的 应用ID
export const appKey = process.env.NEXT_PUBLIC_YOUDAO_APP_KEY!

// * 有道的 应用密钥
export const key = process.env.NEXT_PUBLIC_YOUDAO_APP_SECRET_KEY!

// * 从什么语言翻译到什么语言 https://ai.youdao.com/DOCSIRMA/html/trans/api/wbfy/index.html
const from = 'ja'
const to = 'zh-CH'

const getSalt = () => {
  return nanoid()
}

// * 这个缩写, 我他妈的
const getCurtime = () => {
  return Math.round(new Date().getTime() / 1000).toString()
}

// * 官网给的函数, 用来帮助生成签名
const truncate = (q: string) => {
  const len = q.length
  if (len <= 20) return q
  return q.substring(0, 10) + len + q.substring(len - 10, len)
}

// * 生成签名
const getSign = (str: string) => {
  return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex)
}

// * 生成所要查询的数据, 自动装配好
export const getSearchData = (query: string) => {
  const salt = getSalt()
  const curtime = getCurtime()

  const str1 = appKey + truncate(query) + salt + curtime + key

  const sign = getSign(str1)

  /**
   * * q 等前端传
   * * appKay 常量
   * * salt 重新生成, 重放请求 (接口salt+curtime来防重放（即一个请求不可以被请求2次），所以salt最好为UUID。)
   * * from & to 常量
   */
  return {
    q: query,
    appKey,
    salt,
    from,
    to,
    sign,
    curtime,
    signType: 'v3',
  }
}
