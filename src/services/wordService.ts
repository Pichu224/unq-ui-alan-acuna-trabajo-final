import axios from "axios";
import type { ValidationResponse } from "../types/validation";
import { API_URL } from "../utils/constants.ts"

const wordService = {

    validate: async ( word:string ) => {
        const response = await axios.get<ValidationResponse>(API_URL, {
            params: { word }
        })
        
        return response.data;
    },

};

export default wordService;
