import chai from 'chai';
import chaiHttp from 'chai-http';
import { MongoClient } from 'mongodb';
import app from '../app';
import connection from '../db/conection';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);



describe("on start up api", () => {
	it('request to /ping  should return "pong" and  status code 200', async () => {	
		const response =  await chai.request(app).get('/api/ping');
		response.should.have.status(200);	
		expect(response.text).eql("pong");		
    });
});

describe("on startup ", () => {
	it("it connects to mongo db ", async () => {
		const db  = await connection();
		expect(db).to.exist;
		if (db instanceof MongoClient) {
			await db.close();
		}	
	});
});



