define({ "api": [
  {
    "type": "post",
    "url": "/api/experience/[id]/create",
    "title": "Create Experience",
    "name": "Create_Experience",
    "group": "Experience",
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
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of experience</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Experience category</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "experienceType",
            "description": "<p>Experience type</p>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "coach",
            "description": "<p>ObjectId of experience coach</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
            "field": "targetSkill",
            "description": "<p>Array of target skills for experience</p>"
          },
          {
            "group": "Body",
            "type": "String]",
            "optional": false,
            "field": "targetSkill.skillName",
            "description": "<p>Name of skill</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "targetSkill.progress",
            "description": "<p>Number of progress percentage points (out of 100) that this experience contributes</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Number of overall points that this experience adds to user's profile</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "targetSkill",
            "description": "<p>Array of ObjectIds of skill scores.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "feedback",
            "description": "<p>Array of ObjectIds of feedback reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "currentUsers",
            "description": "<p>Array of ObjectIds of users currently enrolled in the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "previousUsers",
            "description": "<p>Array of ObjectIds of users who have completed the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Experience's ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Experience name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Experience category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experienceType",
            "description": "<p>Experience type</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "coach",
            "description": "<p>ObjectId of Experience's coach</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Point value of completing this experience</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"targetSkill\": [\n        \"6081c02f70111a4e9ce302b4\",\n        \"6081c02f70111a4e9ce302b5\",\n        \"6081c02f70111a4e9ce302b6\"\n    ],\n    \"feedback\": [],\n    \"currentUsers\": [],\n    \"previousUsers\": [],\n    \"_id\": \"6081c02f70111a4e9ce302b7\",\n    \"name\": \"test_experience_9\",\n    \"category\": \"audio\",\n    \"experienceType\": \"solo\",\n    \"coach\": \"604c859f29f44f82776c1c0f\",\n    \"points\": 5,\n    \"__v\": 0\n}",
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
            "field": "400",
            "description": "<p>GeneralErrorResponse: General error (database, or improperly formatted input)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"message\": \"Failed to add experience to the database\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/experience/create.ts",
    "groupTitle": "Experience"
  },
  {
    "type": "delete",
    "url": "/api/experience/[id]",
    "title": "Delete Experience",
    "name": "Delete_Experience",
    "group": "Experience",
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
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ObjectId of experience to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing deletion metrics</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.n",
            "description": "<p>Number of matched experiences based on id passed in</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.ok",
            "description": "<p>1 if operation was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deletedCount",
            "description": "<p>Number of experiences that were deleted (expected: 1)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Successfully deleted experience 608285f394192969ba013bbc\",\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    }\n}",
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
            "field": "400",
            "description": "<p>PermissionLevelError: User does not have permission to edit.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ExperienceNotFoundResponse: Experience does not exist in database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/experience/[id].ts",
    "groupTitle": "Experience"
  },
  {
    "type": "put",
    "url": "/api/experience/[id]",
    "title": "Edit Experience",
    "name": "Edit_Experience",
    "group": "Experience",
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
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ObjectId of experience to be edited.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Updated name of experience (optional)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Updated category of experience (optional)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "experienceType",
            "description": "<p>Updated experience type of experience (optional)</p>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "coach",
            "description": "<p>Updated ObjectId of the new coach of experience (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Experience object.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.targetSkill",
            "description": "<p>Array of ObjectIds of skill scores.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.feedback",
            "description": "<p>Array of ObjectIds of feedback reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.currentUsers",
            "description": "<p>Array of ObjectIds of users currently enrolled in the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.previousUsers",
            "description": "<p>Array of ObjectIds of users who have completed the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data._id",
            "description": "<p>Experience's ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Experience name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Experience category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.experienceType",
            "description": "<p>Experience type</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data.coach",
            "description": "<p>ObjectId of Experience's coach</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.points",
            "description": "<p>Point value of completing this experience</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"targetSkill\": [\n            \"608285f394192969ba013bb9\",\n            \"608285f394192969ba013bba\",\n            \"608285f394192969ba013bbb\"\n        ],\n        \"feedback\": [],\n        \"currentUsers\": [],\n        \"previousUsers\": [],\n        \"_id\": \"608285f394192969ba013bbc\",\n        \"name\": \"test_edit\",\n        \"category\": \"audio\",\n        \"experienceType\": \"solo\",\n        \"coach\": \"604c859f29f44f82776c1c0f\",\n        \"points\": 5,\n        \"__v\": 0\n    }\n}",
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
            "field": "400",
            "description": "<p>PermissionLevelError: User does not have permission to edit.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ExperienceNotFoundResponse: Experience does not exist in database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n  \"success\": false,\n  \"message\": \"Getting Experience failed, no experience with id: 608285f394192969ba013bb found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/experience/[id].ts",
    "groupTitle": "Experience"
  },
  {
    "type": "get",
    "url": "/api/experience/[id]",
    "title": "Get Experience",
    "name": "Get_Experience",
    "group": "Experience",
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
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ObjectId of experience to be retrieved. If set to 'all', all experiences will be retrieved instead.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Experience objects. If 'all' is not passed in, an array of one element will be returned.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.targetSkill",
            "description": "<p>Array of ObjectIds of skill scores.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.feedback",
            "description": "<p>Array of ObjectIds of feedback reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.currentUsers",
            "description": "<p>Array of ObjectIds of users currently enrolled in the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.previousUsers",
            "description": "<p>Array of ObjectIds of users who have completed the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data._id",
            "description": "<p>Experience's ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Experience name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Experience category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.experienceType",
            "description": "<p>Experience type</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data.coach",
            "description": "<p>ObjectId of Experience's coach</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.points",
            "description": "<p>Point value of completing this experience</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": [\n        {\n            \"targetSkill\": [\n                \"608285f394192969ba013bb9\",\n                \"608285f394192969ba013bba\",\n                \"608285f394192969ba013bbb\"\n            ],\n            \"feedback\": [],\n            \"currentUsers\": [],\n            \"previousUsers\": [],\n            \"_id\": \"608285f394192969ba013bbc\",\n            \"name\": \"test_experience_9\",\n            \"category\": \"audio\",\n            \"experienceType\": \"solo\",\n            \"coach\": \"604c859f29f44f82776c1c0f\",\n            \"points\": 5,\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Successful GET of experience 608285f394192969ba013bbc\"\n}",
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
            "description": "<p>ExperienceNotFoundResponse: Experience does not exist in database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n  \"success\": false,\n  \"message\": \"Getting Experience failed, no experience with id: 608285f394192969ba013bb found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/experience/[id].ts",
    "groupTitle": "Experience"
  },
  {
    "type": "get",
    "url": "/api/experience/getbyskill",
    "title": "Get Experience by Skill",
    "name": "Get_Experience_by_Skill",
    "group": "Experience",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "skillName",
            "description": "<p>Array of skill names of interest (strings)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Experience objects. If 'all' is not passed in, an array of one element will be returned.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.targetSkill",
            "description": "<p>Array of ObjectIds of skill scores.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.feedback",
            "description": "<p>Array of ObjectIds of feedback reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.currentUsers",
            "description": "<p>Array of ObjectIds of users currently enrolled in the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "data.previousUsers",
            "description": "<p>Array of ObjectIds of users who have completed the experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data._id",
            "description": "<p>Experience's ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Experience name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Experience category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.experienceType",
            "description": "<p>Experience type</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data.coach",
            "description": "<p>ObjectId of Experience's coach</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.points",
            "description": "<p>Point value of completing this experience</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Found experiences that are tagged as: programming.\",\n    \"data\": [\n        {\n            \"targetSkill\": [\n                \"6081c02f70111a4e9ce302b4\",\n                \"6081c02f70111a4e9ce302b5\",\n                \"6081c02f70111a4e9ce302b6\"\n            ],\n            \"feedback\": [],\n            \"currentUsers\": [],\n            \"previousUsers\": [],\n            \"_id\": \"6081c02f70111a4e9ce302b7\",\n            \"name\": \"test_experience_9\",\n            \"category\": \"audio\",\n            \"experienceType\": \"solo\",\n            \"coach\": \"604c859f29f44f82776c1c0f\",\n            \"points\": 5,\n            \"__v\": 0\n        },\n        {\n            \"targetSkill\": [\n                \"6081cfbd70111a4e9ce302b8\",\n                \"6081cfbd70111a4e9ce302b9\",\n                \"6081cfbd70111a4e9ce302ba\"\n            ],\n            \"feedback\": [],\n            \"currentUsers\": [],\n            \"previousUsers\": [],\n            \"_id\": \"6081cfbd70111a4e9ce302bb\",\n            \"name\": \"test_experience_9\",\n            \"category\": \"audio\",\n            \"experienceType\": \"solo\",\n            \"coach\": \"604c859f29f44f82776c1c0f\",\n            \"points\": 5,\n            \"__v\": 0\n        }\n    ]\n} *",
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
            "description": "<p>IncorrectRequestResponse: A request other than GET was sent.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ExperienceNotFoundResponse: Experiences with specified skills do not exist in database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>GeneralErrorResponse: Error in connecting to database or finding skills.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"success\": false,\n    \"message\": \"Currently there are no experiences which cater to programmig.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/experience/getbyskill.ts",
    "groupTitle": "Experience"
  },
  {
    "type": "delete",
    "url": "/api/user/[id]",
    "title": "Delete User",
    "name": "Delete_User",
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
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ObjectId of user to be deleted.</p>"
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
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"message\": \"User succesfully deleted\",\n}",
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
            "field": "400",
            "description": "<p>PermissionLevelError: User does not have permission to delete.</p>"
          },
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
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"message\": 'User does not have permission for this request.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/user/[id]/index.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/[id]",
    "title": "Edit User",
    "name": "Edit_User",
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
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ObjectId of experience to be edited.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Updated name of experience (optional)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Updated category of experience (optional)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "experienceType",
            "description": "<p>Updated experience type of experience (optional)</p>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "coach",
            "description": "<p>Updated ObjectId of the new coach of experience (optional)</p>"
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.skillInterests",
            "description": "<p>Array of ObjectIds corresponding to user's skill interests</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.education",
            "description": "<p>Array of ObjectIds corresponding to user's education backgrounds</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.completedExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's completed experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.currentExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's current experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user._id",
            "description": "<p>User's ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"targetSkill\": [\n            \"608285f394192969ba013bb9\",\n            \"608285f394192969ba013bba\",\n            \"608285f394192969ba013bbb\"\n        ],\n        \"feedback\": [],\n        \"currentUsers\": [],\n        \"previousUsers\": [],\n        \"_id\": \"608285f394192969ba013bbc\",\n        \"name\": \"test_edit\",\n        \"category\": \"audio\",\n        \"experienceType\": \"solo\",\n        \"coach\": \"604c859f29f44f82776c1c0f\",\n        \"points\": 5,\n        \"__v\": 0\n    }\n}",
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
            "field": "400",
            "description": "<p>PermissionLevelError: User does not have permission to edit.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>UpdatedFailedResposne: Update was improperly formatted or user does not exist in database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"message\": 'User does not have permission for this request.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/user/[id]/index.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/[id]/endexp",
    "title": "End User Experience",
    "name": "End_User_Experience",
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
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "ObjectId",
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
            "type": "ObjectId",
            "optional": false,
            "field": "data._id",
            "description": "<p>ObjectId of experience wrapper object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.experience",
            "description": "<p>Experience object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data.user",
            "description": "<p>ObjectId of user object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.startDate",
            "description": "<p>Date string representing when the experience was started</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.endDate",
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
    "filename": "pages/api/user/[id]/endexp.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/[id]/givefeedback",
    "title": "Give Feedback",
    "name": "End_User_Experience",
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
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "experience",
            "description": "<p>ObjectId of experience</p>"
          },
          {
            "group": "Body",
            "type": "ObjectId",
            "optional": false,
            "field": "coach",
            "description": "<p>ObjectId of coach (User) running the experience</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privacy level of feedback ('public' or 'private')</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Feedback text</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
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
          "content": "HTTP/1.1 400 Conflict",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/user/[id]/givefeedback.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/get",
    "title": "Get User (Logged In)",
    "name": "Get_User_(Logged_In)_/_User_GET_themselves",
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.skillInterests",
            "description": "<p>Array of ObjectIds corresponding to user's skill interests</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.education",
            "description": "<p>Array of ObjectIds corresponding to user's education backgrounds</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.completedExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's completed experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.currentExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's current experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user._id",
            "description": "<p>User's ObjectId</p>"
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
    "filename": "pages/api/user/get.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/[id]",
    "title": "Get User (not Logged In)",
    "name": "Get_User_(not_Logged_In)",
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
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ObjectId of experience to be retrieved. If set to 'all', all experiences will be retrieved instead.</p>"
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.skillInterests",
            "description": "<p>Array of ObjectIds corresponding to user's skill interests</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.education",
            "description": "<p>Array of ObjectIds corresponding to user's education backgrounds</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.completedExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's completed experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.currentExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's current experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "user._id",
            "description": "<p>User's ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"message\": \"User found\",\n    \"user\": {\n        \"education\": [],\n        \"externalExperiences\": [],\n        \"skillInterests\": [\n            \"60621f546e999b7fb35795b3\",\n            \"60621f546e999b7fb35795b4\"\n        ],\n        \"points\": 0,\n        \"completedExperiences\": [],\n        \"currentExperiences\": [],\n        \"_id\": \"60621f546e999b7fb35795b5\",\n        \"email\": \"a@a.com\",\n        \"username\": \"a\",\n        \"role\": \"coach\",\n        \"password\": \"$2b$10$e.zXHmzpjbU2jU9sfT2jX.VrSj1JCuvgvlJ5Rb70VheoBQHNGNLaK\",\n        \"firstName\": \"jb\",\n        \"lastName\": \"jb\",\n        \"aspirationType\": \"dive\",\n        \"__v\": 0\n    }\n}",
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
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"message\": \"User not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/user/[id]/index.ts",
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
    "filename": "pages/api/user/login.ts",
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.skillInterests",
            "description": "<p>Array of ObjectIds corresponding to user's skill interests</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.education",
            "description": "<p>Array of ObjectIds corresponding to user's education backgrounds</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
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
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.completedExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's completed experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId[]",
            "optional": false,
            "field": "user.currentExperiences",
            "description": "<p>Array of ObjectIds corresponding to user's current experiences</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
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
    "filename": "pages/api/user/register.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/[id]/startexp",
    "title": "Start User Experience",
    "name": "Start_User_Experience",
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
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "ObjectId",
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
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectId of experience wrapper object</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "experience",
            "description": "<p>ObjectId of experience object corresponding to this experienceWrapper</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
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
    "filename": "pages/api/user/[id]/startexp.ts",
    "groupTitle": "User"
  }
] });
