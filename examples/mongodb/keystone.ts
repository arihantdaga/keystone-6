import { config } from '@keystone-6/core'
import { lists } from './schema'

export default config({
  db: {
    provider: 'mongodb',
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/keystone-example',

    // WARNING: this is only needed for our monorepo examples, dont do this
    prismaClientPath: 'node_modules/myprisma',
  },
  lists,
})
