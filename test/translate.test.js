import supertest from "supertest";
import {web} from "../src/application/web.js";

describe('POST /api/translate', function () {

    it('should can translate to bahasa', async () => {
        const result = await supertest(web)
            .post('/api/translate')
            .send({
                kalimat: 'hello'
            });

        expect(result.status).toBe(200);
        expect(result.body.data.kalimat).toBe("hello");
        expect(result.body.data.arti).toBe("Halo");
        expect(result.body.data.bahasa_asal).toBe("English");
    });

    it('should reject when not send data', async () => {
        const result = await supertest(web)
            .post('/api/translate');

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
})