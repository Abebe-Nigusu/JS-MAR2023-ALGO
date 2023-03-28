const errorResponseData = { // in .catch(err=> err.response.data.errors)
        "title": {
            "name": "ValidatorError",
            "message": "Title is required",
            "properties": {
                "message": "Title is required",
                "type": "required",
                "path": "title",
                "value": ""
            },
            "kind": "required",
            "path": "title",
            "value": ""
        },
        "artist": {
            "name": "ValidatorError",
            "message": "Artist is required",
            "properties": {
                "message": "Artist is required",
                "type": "required",
                "path": "artist",
                "value": ""
            },
            "kind": "required",
            "path": "artist",
            "value": ""
        }
    }

const errMsgArr =[]

for(const eachKey in errorResponseData){
  errMsgArr.push(errorResponseData[eachKey].message)
}

console.log(errMsgArr)