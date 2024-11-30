import { default as Parser } from 'rss-parser'

const baseRss =
  'https://www.goodreads.com/review/list_rss/183275657?key=LYHKukHXNlPhEX6BldA_mZWRPcpxRnnVsqfcWjzleSD6NsF6&shelf=%23ALL%23'
const getHtmlContentField = (html, field) => {
  if (!html) {
    return null
  }

  const res = html.match(new RegExp(`  ${field}:(?<field>[^<]*)<br`))
  return res ? res[1].trim() : null
}

const asNumber = (str) => (str ? Number.parseInt(str.trim()) : null)

const parseFeed = async (shelf, limit = 10) => {
  const parser = new Parser()
  const feed = await parser.parseURL(`${baseRss}&shelf=${shelf}&per_page=${limit}`)
  const items = feed.items.length ? feed.items : [feed.item]
  return items.map((i) => ({
    title: i.title ?? '',
    url: i.link ?? '',
    finishedOn: i.pubDate ? new Date(i.pubDate).toISOString() : null,
    rating: asNumber(getHtmlContentField(i.content, 'rating')) ?? 0,
    author: getHtmlContentField(i.content, 'author') ?? '<unknown>',
    review: getHtmlContentField(i.content, 'review') ?? '<unknown>',
  }))
}

export const getReviews = async ({ limit }) => {
  return parseFeed('read', limit)
}

export const getCurrentlyReading = async ({ limit }) => {
  return parseFeed('currently-reading', limit)
}
