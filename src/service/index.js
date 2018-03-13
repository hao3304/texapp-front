import axios from 'axios'

export const getPdf = (params)=>axios.post("/api/tex",params)
