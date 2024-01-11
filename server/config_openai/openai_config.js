// // // import { Configuration } from "openai";
// // import { Configuration } from "openai";
// // import {Configuration} from 'openai'
// import * as openai from 'openai'
// export const configureOpenAI=()=>{
//     const config=new openai.Configuration({
//         apiKey:process.env.OPENAI_API_KEY,
//     })

//     return config;
// }

// import { Configuration } from "openai";
import {OpenAI} from "openai"

export const configureOpenAI=()=>{
    const config=new OpenAI({
        apiKey:process.env.OPENAI_API_KEY,
        // organization:process.env.OPEN_AI_ORGANIZATION_ID,
    })

    return config;
}