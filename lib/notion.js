import {
  Client,
  isNotionClientError,
  LogLevel,
  APIErrorCode,
  ClientErrorCode,
} from '@notionhq/client'
import slugify from 'slugify'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  // logLevel: LogLevel.DEBUG,
})
// @ts-ignore
export const getAllPosts = async (databaseId) => {
  //#TODO: seems like this is getting called on a singular blog post. why needed?
  try {
    var response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
      filter: {
        property: 'Status',
        status: {
          equals: 'Done',
        },
      },
    })
    return addSlugIfNeeded(response.results)
  } catch (error) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          console.log(error)
          break
        case APIErrorCode.ObjectNotFound:
          console.log(error)
          break
        case APIErrorCode.Unauthorized:
          console.log(error)
          break
      }
    }
  }
}
// @ts-ignore
export const getPosts = async (databaseId, numOfPost) => {
  //TODO: Reconcile this with getAllPosts
  try {
    var response =
      numOfPost === -1
        ? await notion.databases.query({
            database_id: databaseId,
            sorts: [
              {
                property: 'date',
                direction: 'descending',
              },
            ],
            filter: {
              property: 'Status',
              status: {
                equals: 'Done',
              },
            },
          })
        : await notion.databases.query({
            database_id: databaseId,
            sorts: [
              {
                property: 'date',
                direction: 'descending',
              },
            ],
            filter: {
              property: 'Status',
              status: {
                equals: 'Done',
              },
            },
            page_size: numOfPost,
          })
    return addSlugIfNeeded(response.results)
  } catch (error) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          console.log(error)
          break
        case APIErrorCode.ObjectNotFound:
          console.log(error)
          break
        case APIErrorCode.Unauthorized:
          console.log(error)
          break
      }
    }
  }
}

export const getPage = async (pageId) => {
  const page = await notion.pages.retrieve({ page_id: pageId })
  if ('properties' in page) {
    var title = getFieldInfo(page.properties, 'title', null)
    page.properties['slug'] = slugify(title, {
      lower: true,
      strict: true,
    })
  }
  return page
}

export const getBlocks = async (blockId) => {
  const blocks = []
  var cursor
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return blocks
}

const addSlugIfNeeded = (pages) => {
  for (let page of pages) {
    if ('properties' in page) {
      var title = getFieldInfo(page.properties, 'title', null)
      page.properties['slug'] = slugify(title, {
        lower: true,
        strict: true,
      })
    }
  }
  return pages
}

const getFieldInfo = (properties, name, contentType) => {
  const element = properties[name]

  if (!element) {
    return null
  }

  const type = element.type

  switch (type) {
    case 'title':
      return element.title[0]?.plain_text
    case 'rich_text':
      return element.rich_text[0]?.plain_text
    case 'date':
      return element.date?.start
    case 'url':
      return element.url
    case 'checkbox':
      return element.checkbox
    case 'number':
      return element.number
    case 'select':
      return element.select?.name
    case 'created_time':
      return element.created_time
    case 'last_edited_time':
      return element.last_edited_time
    case 'email':
      return element.email
    case 'status':
      return element.status
    case 'formula':
      return element.formula.number
    case 'phone_number':
      return element.phone_number
    case 'relation':
      return element.relation.map((item) => item.id)
    case 'multi_select':
      return element.multi_select.map((item) => item.name)
    case 'files':
      return null
    // let url = element.files[0]?.url || element.files[0]?.file?.url
    // if (!url) {
    //   return null
    // }
    //return await manageImage(properties, url, contentType, element.files[0]?.name)
    default:
      // throw new Error(`Unknown type ${type}`)
      return null
  }
}
