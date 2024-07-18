db.runCommand({collMod: "questions",
    validator: {
        $jsonSchema: {
          bsonType: "object",
          "additionalProperties": false,
          required: [ "_id", "id", "question", "correct_answer", "difficulty", "category", "incorrect_answers" ],
          properties: {
             _id: {
                bsonType: "objectId",
                description: "Mongo object Id"
             },
             id: {
                bsonType: "int",
                description: "must be an integer and is required"
             },
             question: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             correct_answer: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             difficulty: {
                 enum: [ "easy", "medium", "hard" ],
                 description: "can only be one of the enum values and is required"
             },
             category: {
                enum: [ "Conhecimentos gerais", "Português e literatura", "Ciências", "História e política", "Matemática", "Filmes, desenhos e televisão", "Geografia", "Esportes" ],
                description: "can only be one of the enum values and is required"
             },
             gpa: {
                bsonType: [ "double" ],
                description: "must be a double if the field exists"
             },
             incorrect_answers: {
                bsonType: "array",
                minItems: 3,
                maxItems: 3,
                items: {
                    bsonType: "string"
                },
                description: "array of 3 elements of string type"
             }
          }
        }
    }
})