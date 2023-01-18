module.exports = {
  user: {
    "id": { "_": "datatype.number", "ob": { "min": 1, "max": 10000 } },
    "name": {
      "username": { "_": "internet.userName" },
      "fname": { "_": "name.firstName" },
    },
    "username": { "_": "internet.userName" },
    "email": { "_": "internet.email" },
    "address": {
      "street": { "_": "address.street" },
      "state": { "_": "address.state" },
      "city": { "_": "address.city" },
      "zipcode": { "_": "address.zipCode" },
      "geo": {
        "lat": {
          "_": "datatype.number",
          "ob": { "min": -90, "max": 90, "precision": 0.0001 },
        },
        "lng": {
          "_": "datatype.number",
          "ob": { "min": -180, "max": 180, "precision": 0.0001 },
        },
      },
    },
    "phone": { "_": "phone.number" },
    "website": { "_": "internet.url" },
    "company": {
      "name": { "_": "company.name" },
      "catchPhrase": { "_": "company.catchPhrase" },
      "bs": { "_": "company.bs" },
    },
  },
};
