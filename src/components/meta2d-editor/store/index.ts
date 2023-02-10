import { defineStore } from 'pinia'
import { Meat2dState } from './types'

const useMeta2dStore = defineStore('meta2d', {
  state: (): Meat2dState => ({
    meta2dInst: undefined,
    activePen: undefined,
  }),
})

export default useMeta2dStore
