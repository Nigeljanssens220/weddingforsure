import { env } from '@/env.mjs'
import { Client, LogLevel } from '@notionhq/client'

export const notion = new Client({
  auth: env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
})
