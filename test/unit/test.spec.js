const chai = require("chai");

const { expect } = chai;

const ChildEntity = require("../../app/childEntity");

describe.only("Dummy test", () => {

  it("test anything", () => {

    const entity = new ChildEntity();


    expect(1).to.eq(2);

  });

});
