module.export = requestFilter = (request, response, next) => {
  if (!request.query.age) {
    response.send("please Enter the Age");
  } else if (request.query.age < 18) {
    response.send("you are under age. you cannot open this page");
  } else {
    next();
  }
};
