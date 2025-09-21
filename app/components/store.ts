import {create} from "zustand"
type cardStore={
    index:number|null
    setindex:(index:number|null)=>void
}
export const useCardStore=create<cardStore>((set)=>({
    index:null,setindex:(i)=>set({index:i}),
}))