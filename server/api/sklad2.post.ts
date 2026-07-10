import { useLazyAsyncData } from "nuxt/app"

export default defineEventHandler(async (ev) => {
    const body = await readBody(ev)

    const sklad = {
        spichki :   50,
        hleb :      15,
        vodka :     300,
        uaz :       1,
        iphone :    0
    }
    
    if (body.spichki > sklad.spichki
        || body.hleb > sklad.hleb
        || body.vodka > sklad.vodka
        || body.uaz > sklad.uaz
        || body.iphone > sklad.iphone
    ) {
        return {
            statusCode: 400,
            message: "Error"
        }
    }
    else {
        return {
            statusCode: 200,
            success: true
        }
    }
})