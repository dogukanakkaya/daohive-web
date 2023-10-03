import { MeiliSearch } from 'meilisearch'
import { MEILI_HOST, MEILI_MASTER_KEY } from '@config'

export const meilisearch = new MeiliSearch({
  host: MEILI_HOST,
  apiKey: MEILI_MASTER_KEY
})
