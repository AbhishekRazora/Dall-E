import axios from 'axios'

export const aiGenerateImage=async({prompt})=>{
const res=await axios.post('/dalle',{prompt:prompt})
if(res.status!==200){
    throw new Error('unable to generate image')

}
const data=await res.data;
return data;
}