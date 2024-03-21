module.exports = {
    type : "object",
    properties : {
        name : {
           type: "string",
        },
        repname: {
            type: "string",
        },
        mobileno : {
            type: "string",
        },
        email : {
            type: "string",
        },
        required: ["name", "mobileno", "email"],
        additionalProperties: false,
    }
}