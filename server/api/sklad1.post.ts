export default defineEventHandler(async (ev) => {
    const body = await readBody(ev)

    if (!body.spichki) {
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