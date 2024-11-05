import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {getFavoriteStatus, updateFavoriteStatus} from "../monsterService.ts";
import axios from "axios";


describe ('MonsterService', () => {

    axios.defaults.baseURL = "http://localhost:3000"

    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())


    it('should send a put request to update favorite status', async() => {
        const expectedId = 60;

        server.use(http.put('api/monster/', () =>
            HttpResponse.json(expected, {status:201})
        ))
        expect(await updateFavoriteStatus()).toStrictEqual(true);

    })


})