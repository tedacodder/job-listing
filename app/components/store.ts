import {create} from "zustand"
type cardStore={
    index:string|null
    setindex:(index:string|null)=>void
}
export const useCardStore=create<cardStore>((set)=>({
    index:null,setindex:(i)=>set({index:i}),
}))