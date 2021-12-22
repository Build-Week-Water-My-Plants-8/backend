Water My Plants Endpoints

https://water-my-plants-8.herokuapp.com/api

Login/Register

POST /users/register

What you send 
  {"username":"testuser","password":"123", "phone_number":"1111111111"} 
      All Strings!!
      Password is 10 characters

POST /users/login

What you get back 

{
    "message": "testuser is back!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjQwMTMwNzA0LCJleHAiOjE2NDAyMTcxMDR9.3TSeN2kBbcTLFWbSPjfzIF0daCeFNk_IZ-sD015D7ww"
}

Getting your account info

GET /users

Edit Account

Plants
