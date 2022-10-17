import { Task2 } from "../../typechain-types";

import { expect } from "chai";
import { deployments, ethers, getNamedAccounts } from "hardhat";
describe("Task 2", async () => {
  let task: Task2;
  let deployer: string;

  beforeEach(async () => {
    await deployments.fixture(["all"]);
    task = await ethers.getContract("Task2");
    deployer = (await getNamedAccounts()).deployer;
  });

  it("should deposit and get the amount deposited", async () => {
    let amount = ethers.utils.parseEther("0.01");
    let txResponse = await task.deposit(amount);
    txResponse.wait(1);
    expect(await task.checkBalance()).to.be.equal(amount);
  });
  it("should set user details and return the right details",async () => {
    let username = "John Doe"
    let userage = 34
    let txResponse = await task.setUserDetails(username, userage)
    await txResponse.wait(1)
    let userDetails = await task.getUserDetail()
    expect(userDetails.age.toNumber()).to.be.equal(userage)
    expect(userDetails.name).to.be.equal(username)


  })
});
