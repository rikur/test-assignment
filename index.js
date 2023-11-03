import readline from 'readline'
import Corestore from 'corestore'
import Hyperswarm from 'hyperswarm'
import {nicknames} from 'memorable-moniker'
import DHT from 'hyperdht'
import init from 'hyperchat'

// change topic during development to debug faster
;(async () => {
  await init({topic: Buffer.alloc(32).fill('synonym-default')})
})()
