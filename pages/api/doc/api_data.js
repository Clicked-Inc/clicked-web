define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/Users/anjanbharadwaj/Documents/WDB/clicked-web/pages/api/doc/main.js",
    "groupTitle": "/Users/anjanbharadwaj/Documents/WDB/clicked-web/pages/api/doc/main.js",
    "name": ""
  },
  {
    "type": "put",
    "url": "/api/user/[id]/endexp",
    "title": "End User Experience",
    "name": "End_User_Experience",
    "group": "User",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>ObjectId representation of experience to end</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Experience wrapper object that was updated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectId of experience wrapper object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experience",
            "description": "<p>Experience object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ObjectId of user object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Date string representing when the experience was started</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>Date string representing when the experience was ended</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"_id\": \"60814c07d8e58a4306aa45ca\",\n        \"experience\": {\n            \"targetSkill\": [],\n            \"feedback\": [],\n            \"currentUsers\": [],\n            \"previousUsers\": [],\n            \"_id\": \"60701b49728d10b827fee7f8\",\n            \"name\": \"test_experience_5\",\n            \"category\": \"audio\",\n            \"experienceType\": \"solo\",\n            \"coach\": \"606cb965854b48fab5df7d1f\",\n            \"points\": 100,\n            \"__v\": 0\n        },\n        \"user\": \"60814bfdd8e58a4306aa45c9\",\n        \"startDate\": \"2021-04-22T10:12:23.173Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "421",
            "description": "<p>IncorrectRequestResponse: A request other than POST was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>DatabaseErrorResponse: Error in connecting or querying database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>UpdateFailedResponse: Update failed due to a number of reasons.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Conflict\n{\n  \"success\": false,\n  \"message\": \"Ending experience for user failed.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/[id]/endexp.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/get",
    "title": "Get User",
    "name": "Get_User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token generated using JWT, in the format 'Bearer <token>'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization JSONWebToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"message\": \"User found\",\n    \"user\": {\n        \"education\": [],\n        \"externalExperiences\": [],\n        \"skillInterests\": [\n            \"60621f546e999b7fb35795b3\",\n            \"60621f546e999b7fb35795b4\"\n        ],\n        \"points\": 0,\n        \"completedExperiences\": [],\n        \"currentExperiences\": [],\n        \"_id\": \"60621f546e999b7fb35795b5\",\n        \"email\": \"a@a.com\",\n        \"username\": \"a\",\n        \"role\": \"student\",\n        \"password\": \"$2b$10$e.zXH2jX.VrSj1JCuvgvlJ5Rb70VheoBQHNGNLaK\",\n        \"firstName\": \"jb\",\n        \"lastName\": \"jb\",\n        \"aspirationType\": \"dive\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>UserNotFoundResponse: User does not exist in database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Conflict\n{\n  \"message\": \"User not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/get.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "Login User",
    "name": "Login_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address (optional if username is included)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username (optional if email is included)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization JSONWebToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"message\": \"success\",\n      \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYyMWY1NDZlONzk1YjUiLCJlbWFpbCI6ImFAYS5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYxOTA3NzcwNywiZXhwIjoxNjIwMjg3MzA3fQ.M1CJiw6b5gsTZbN2R9FTxoGQNWYBxmte0n19kRsOPGM\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "421",
            "description": "<p>IncorrectRequestResponse: A request other than POST was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>UserNotFoundResponse: Username/email does not exist in database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>IncorrectCredentialsResponse: Incorrect password provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>DatabaseErrorResponse: Error in connecting or querying database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Conflict\n{\n  \"error\": \"Login requires an email/username\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/login.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/pages/user/register",
    "title": "Register User",
    "name": "Register_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address (unique)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username (unique)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role ('student' or 'admin' or 'coach')</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "aspirationType",
            "description": "<p>User's aspiration type ('explore' or 'dive')</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "skillInterests",
            "description": "<p>User's skill interests</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "biography",
            "description": "<p>User's biography</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>User's age</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "profilePic",
            "description": "<p>User's profile picture url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object persisted in MongoDB</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.age",
            "description": "<p>User's age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>User's username (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.role",
            "description": "<p>User's role ('student' or 'admin' or 'coach')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.profilePic",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.aspirationType",
            "description": "<p>User's aspiration type ('explore' or 'dive')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.biography",
            "description": "<p>User's biography</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "user.skillInterests",
            "description": "<p>Array of ObjectIds corresponding to user's skill interests</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "user.education",
            "description": "<p>Array of ObjectIds corresponding to user's education backgrounds</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "user.externalExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's external experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.points",
            "description": "<p>User's points</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "user.completedExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's completed experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "user.currentExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's current experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User's ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n      {\n    \"message\": \"Registration successful\",\n    \"user\": {\n        \"education\": [],\n        \"externalExperiences\": [],\n        \"skillInterests\": [\n            \"6081225b8b02e93bba2eda65\",\n            \"6081225b8b02e93bba2eda66\"\n        ],\n        \"points\": 0,\n        \"completedExperiences\": [],\n        \"currentExperiences\": [],\n        \"_id\": \"6081225c8b02e93bba2eda67\",\n        \"email\": \"eee@e.com\",\n        \"username\": \"eee\",\n        \"role\": \"student\",\n        \"password\": \"$2b$10$/AbZJjkzmjF0y0ic5F7zM.R.0Bi8Zc2QUgOgHOtjDviAyTAiyb.xu\",\n        \"firstName\": \"rachel\",\n        \"lastName\": \"jb\",\n        \"aspirationType\": \"dive\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "421",
            "description": "<p>IncorrectRequestResponse: A request other than POST was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>UserCollisionResponse Email: or username is already in use.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>RegisterDatabaseErrorResponse: Error in connecting or saving to database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\": \"Email already taken.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/register.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/[id]/startexp",
    "title": "Start User Experience",
    "name": "Start_User_Experience",
    "group": "User",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>ObjectId representation of experience to start</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experienceWrapper",
            "description": "<p>Experience wrapper object that was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectId of experience wrapper object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>ObjectId of experience object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>ObjectId of user object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Date string representing when the experience was started</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"_id\": \"60814c07d8e58a4306aa45ca\",\n    \"experience\": \"60701b49728d10b827fee7f8\",\n    \"user\": \"60814bfdd8e58a4306aa45c9\",\n    \"startDate\": \"2021-04-22T10:12:23.173Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "421",
            "description": "<p>IncorrectRequestResponse: A request other than POST was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>DatabaseErrorResponse: User not found in database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>UpdateFailedResponse: Experience not found or user unable to start experience.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Conflict\n{\n    \"message\": \"User Failed to start this experience\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/[id]/startexp.ts",
    "groupTitle": "User"
  }
] });
