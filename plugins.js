const { faker } = require("@faker-js/faker");

module.exports = {
  str: function (o, s) {
    if (s == undefined) s = "name.firstName";
    s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
    s = s.replace(/^\./, ""); // strip a leading dot
    var a = s.split(".");
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  },
  evaluate: function (object) {
    if (object && object.constructor === Array) {
      for (var i = 0; i < object.length; i++) {
        object[i] = this.evaluate(object[i]);
      }
    } else if (
      object &&
      typeof object == "object" &&
      Object.keys(object).length > 0
    ) {
      if (Object.keys(object).indexOf("_") < 0) {
        for (var key in object) {
          object[key] = this.evaluate(object[key]);
        }
      } else {
        object["ob"] = object["ob"] || undefined;
        if (object["l"] != undefined) {
            object["l"] = this.evaluate(object["l"]) 
          if (this.str(faker, object["_"]) != undefined)
            object = Array(object["l"])
              .fill(0)
              .map((d) => this.str(faker, object["_"])(object["ob"]));
          else {
            object = Array(object["l"])
              .fill(0)
              .map((d) => this.str(faker, "name.firstName")(object["ob"]));
          }
        } else if (this.str(faker, object["_"]) != undefined)
        //  object = object["ob"];
          object = this.str(faker, object["_"])(object["ob"]);
        else {
          object = this.str(faker, "name.firstName")();
        }
      }
    }
    return object;
  },
};
