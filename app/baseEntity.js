const service = require("./service");


class BaseEntity {

  dummyMethod() {

    return service.dummyFn();

  }
}

module.exports = BaseEntity;
