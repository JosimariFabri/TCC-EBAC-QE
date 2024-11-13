
const request = require('supertest');
const Url = 'http://lojaebac.ebaconline.art.br/wp-json';
const { faker } = require('@faker-js/faker');
const Joi = require('joi');


describe('Teste de API de cupons', () => {
    it('Deve listar todos os cupons', async () => {
        const response = await request(Url)
            .get('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        Joi.string().validate(undefined);
    });

    it('Deve encontrar cupom pelo id', async () => {
        const id = '4666';
        const response = await request(Url)
            .get(`/wc/v3/coupons/${id}`)
            .auth('admin_ebac', '@admin!&b@c!2022');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', parseInt(id));
        Joi.string().validate(undefined);
    });

    it('Deve cadastrar um cupom com sucesso', async () => {
        const crtCupom = {
            code: `teste${faker.commerce.price(10,50)}`,
            amount: faker.commerce.price(10, 50),
            discount_type: 'fixed_product',
            description: 'Cupom de teste'
        };
        console.log(`Cupom criado: ${crtCupom.code}`)
        const response = await request(Url)
            .post('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')
            .send(crtCupom);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('code', crtCupom.code);
        Joi.string().validate(undefined);

    });

    it('Não deve listar cupons sem autorização', async () => {
        const response = await request(Url)
            .get('/wc/v3/coupons')

        expect(response.status).toBe(401);
        Joi.string().validate(undefined);
    });

    it('Não cadastrar cupom com código repetido', async () => {
        const crtCupom = {
            code: 'teste50',
            amount: faker.commerce.price(10, 50),
            discount_type: 'fixed_product',
            description: 'Cupom de desconto teste'
        };
        console.log(`Cupom criado: ${crtCupom.code}`)
        const response = await request(Url)
            .post('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')
            .send(crtCupom);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('code', "woocommerce_rest_coupon_code_already_exists");
        Joi.string().validate(undefined);
    });

});
