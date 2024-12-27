POST /api/auth/login

Request body:

{
    "email": "user@example.com",
    "password": "Password123@"
}

Response: Status Code 200

{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.4fg63f89e5E7Vt6byGY7YrT5G0Q"
}

Response: Status Code 400

{
    "msg": "Invalid login credentials"
}

POST /api/auth/register

Request body:

{
    "email": ""user@example.com",
    "password": "Password123@",
    "confirmPassword": "Password123@"
}

Response: Status Code 200

Response: Status Code 400

{
  "msg": "Password is not valid: password and confirm password are not the same."
}

{
  "msg": "Password is not valid: password must contain at least one lowercase, uppercase letter, digit and special character."
}

GET /api/auth/GetProfile

Response: Status Code 200

{
    "accountId": "61276ff4-527a-42ee-9887-cc3107977ca5",
    "email": "minhnhut9a8@gmail.com",
    "fullName": "test",
    "bio": null,
    "role": 0
}
