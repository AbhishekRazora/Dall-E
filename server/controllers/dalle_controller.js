import {OpenAIApi} from 'openai';
import { configureOpenAI } from '../config_openai/openai_config';

export const imageGeneration=(req,res,next)=>{

    const config=configureOpenAI();
    const openai=new OpenAIApi(config);
    

}

