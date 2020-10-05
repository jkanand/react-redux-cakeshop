const { BUY_CAKE } = require("./cakeTypes")

export const buyCake = (byCakeNumer) => {
    return {
        type:BUY_CAKE,
        payload: byCakeNumer
    }
}