const js2xmlparser = require("js2xmlparser");

exports.createResponseData = function(name) {
  const date_time = new Date();
  const date_time_array = date_time.toString().split(" ");
  const date = date_time_array.slice(0,4).join(" ");
  const time = date_time_array.slice(4).join(" ");
  const response_object = { name, date, time };

  if (/[a-m]/.test(name.toLowerCase()[0])) {
    return response_object;
  } else {
    return js2xmlparser.parse("responseData", response_object);
  }
}
