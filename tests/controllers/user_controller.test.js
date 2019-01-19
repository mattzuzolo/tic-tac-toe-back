const { app } = require("../../server");
const mongoose = require("mongoose");
const expect = require("expect");
const request = require("supertest");

const User = mongoose.model("user");

beforeEach((done) => {
  User.remove({}).then(() => done());
})

describe("POST /users", () => {
  let username = "test_username";

  it("POST to /users creates a new user", (done) => {
    
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
        .catch(err => done(e));
      })
  });

});