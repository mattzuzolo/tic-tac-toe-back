const { app } = require("../../server");
const mongoose = require("mongoose");
const expect = require("expect");
const request = require("supertest");

const User = mongoose.model("user");

describe("User controller", () => {
  let username = "test_username";

  it("POST to /users creates a new user", (done) => {
    User.count().then(count => {
      request(app)
        .post("/users")
        .send({ username })
        .expect(200)
        .expect((response => {
          expect(response.body.email).toBe(email);
        }))
        .end((error, response) => {
          if(error){
            return done(error);
          }
          User.find().then(users => {
            expect(users.length).toBe(2),
            expect(users[1].email).toBe(email)
            done();
          })
          .catch(error => done(error));
        });
    });
  });

});