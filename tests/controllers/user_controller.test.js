const { app } = require("../../server");
const mongoose = require("mongoose");
const expect = require("expect");
const request = require("supertest");

const User = mongoose.model("user");

beforeEach((done) => {
  User.remove({}).then(() => done());
})

describe("POST /users", () => {
  
  it("POST to /users creates a new user", (done) => {
    let username = "test_username";
    request(app)
      .post("/api/v1/users")
      .send({username})
      .expect(200)
      .expect((res) => {
        expect(res.body.username).toBe(username);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }
        User.find().then((users) => {
          expect(users.length).toBe(1);
          expect(users[0].username).toBe(username);
          done();
        })
        .catch(err => done(err));
      })
  });

  it("POST to /users should not create a user with invalid body data", (done) => {
    request(app)
      .post("/api/v1/users")
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }
        User.find().then((users) => {
          expect(users.length).toBe(0);
          done();
        })
        .catch(err => done(err));
      })
  });

});