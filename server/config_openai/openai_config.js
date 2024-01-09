import { Configuration } from "openai";

export const configureOpenAI=()=>{
    const config=new Configuration({
        apiKey:process.env.OPENAI_API_KEY,
    })

    return config;
}