import { create } from 'zustand'

type State = {
  count: number
  inc: () => void
}

export const useGlobalStore = create<State>((set: (fn: (s: State) => State) => void) => ({
  count: 0,
  inc: () => set((s: State) => ({ ...s, count: s.count + 1 })),
}))
