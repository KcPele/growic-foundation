import { Task1 } from "../../typechain-types";

import { expect } from "chai";
import { deployments, ethers, getNamedAccounts } from "hardhat";
describe("Task 1", async () => {
  let task: Task1;
  let deployer: string;

  beforeEach(async () => {
    await deployments.fixture(["all"]);
    task = await ethers.getContract("Task1");
    deployer = (await getNamedAccounts()).deployer;
  });

  it("should deposit and get the amount deposited", async () => {
    let amount = ethers.utils.parseEther("0.01");
    let txResponse = await task.deposit(amount);
    txResponse.wait(1);
    expect(await task.checkBalance()).to.be.equal(amount);
  });
});
