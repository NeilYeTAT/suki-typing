import { getSearchData, YOUDAO_URL } from '@/config/youdao'
import { NextRequest, NextResponse } from 'next/server'

// * 代理服务器, 解决请求有道导致的跨域问题~

interface IYouDaoResponse {
  query: string
  speakUrl: string
  translation: [string]
  [k: string]: unknown
}

export async function POST(request: NextRequest) {
  const { q }: { q: string } = await request.json()

  const d = getSearchData(q)

  try {
    const response = await fetch(YOUDAO_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(d),
    })

    const result: IYouDaoResponse = await response.json()
    const { speakUrl } = result

    return new NextResponse(JSON.stringify({ speakUrl }), { status: 200 })
  } catch (error) {
    console.error('api/(proxy)/youdao/route.ts error', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    })
  }
}
