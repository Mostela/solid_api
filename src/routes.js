import { createUserControler } from "./usesCases/CreateUser";

const { Router } = require("express");

const router = Router()



router.post('/users', (request, response ) => {
    return createUserControler.handle(request, response)
})

export { router }