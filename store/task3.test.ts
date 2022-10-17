import { Task3 } from "../../typechain-types";

import { expect } from "chai";
import { deployments, ethers, getNamedAccounts } from "hardhat";
describe("Task 3", async () => {
  let task: Task3;
  let deployer: string;

  beforeEach(async () => {
    await deployments.fixture(["all"]);
    task = await ethers.getContract("Task3");
    deployer = (await getNamedAccounts()).deployer;
  });

  it("should initialise the constructor", async function () {
    expect(await task.owner()).to.be.equal(deployer)
    
  })

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
  it("should revert with errors",async () => {
    let amount = ethers.utils.parseEther("0.001");
    await expect(task.addFund(amount)).to.be.revertedWith('HasNotdeposited("Please you must deposit first using the deposit funcion")')
    let txResponse = await task.deposit(amount);
    txResponse.wait(1);
    await expect(task.addFund(amount)).to.be.revertedWith(`AmountToSmall(${amount})`)
    
  })
  it("should revert on withraw if not owner", async function () {
    let amount = ethers.utils.parseEther("0.01");
    let txResponse = await task.deposit(amount);
    txResponse.wait(1);
    let [_, account2] = await ethers.getSigners()
    let account2Task =  task.connect(account2)
    await expect(account2Task.withdraw()).to.be.revertedWith("NotcontractOwner()")
    
  })
  it("should allow deposit, addfund and withdraw",async () => {
    let amount = ethers.utils.parseEther("0.01");
    let txResponse1 = await task.deposit(amount);
    await txResponse1.wait(1);
    let txResponse2 = await task.addFund(amount)
    await txResponse2.wait(1)
    expect(await task.checkBalance()).to.be.equal(ethers.utils.parseEther("0.02"))
    
    await task.withdraw()
    expect(await task.checkBalance()).to.be.equal(0)
  })
});
