const { app } = require("../../server");
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const expect = require("expect");
const request = require("supertest");

const User = mongoose.model("user");

const users = [
  {
    _id: new ObjectID(),
    username: "matt_test"
  },
  {
    _id: new ObjectID(),
    username: "marc_test"
  }
];

beforeEach((done) => {
  User.remove({}).then(() => {
    return User.insertMany(users);
  })
  .then(() => done());
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
        User.find({username}).then((users) => {
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
          expect(users.length).toBe(2);
          done();
        })
        .catch(err => done(err));
      })
  });

});

describe("GET /users", () => {

  it("GET to /users returns all of the users", (done) => {
    request(app)
      .get("/api/v1/users")
      .expect(200)
      .expect((res) => {
        expect(res.body.users.length).toBe(2);
      })
      .end(done);
    });

  it("GET to /users/:id returns the specific user", (done) => {

 
    request(app)
      .get(`/api/v1/users/${users[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.user.username).toBe(users[0].username);
      })
      .end(done);
    });
});