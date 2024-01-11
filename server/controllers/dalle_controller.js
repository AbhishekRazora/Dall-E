import {OpenAI} from 'openai';
import { configureOpenAI } from '../config_openai/openai_config.js';

export const imageGeneration=async(req,res,next)=>{

    const {prompt}=req.body;
    try {
        // const openai=configureOpenAI();
        // const openai=configureOpenAI()
const openai=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
})

        const aiResponse=await openai.images.generate({
            model:"dall-e-3",
            prompt,
            n:1,
            size:'1024x1024',
            // max_tokens:30,
            // response_format:'b64_json',

        })

        // const image=aiResponse.data.data[0].b64_json;
        const image=aiResponse.data.data[0].url;
        console.log(image)

        res.status(200).json({photo:image});
    } catch (error) {

        console.log(error);
        res.status(500).send(error?.message)
        
    }


}

