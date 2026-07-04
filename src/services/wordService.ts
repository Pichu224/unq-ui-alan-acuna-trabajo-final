import axios from "axios";
import type { ValidationResponse } from "../types/validation";
import { API_URL } from "../utils/constants.ts"

const wordService = {

    validate: async ( word:string ) => {
        try {
            const response = await axios.get<ValidationResponse>(API_URL, {
                params: { word }
            })
            
            return response.data;
        } catch (error) {
            throw error;
        }
    },

};

export default wordService;
