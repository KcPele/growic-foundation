import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployOverflow: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, ethers} = hre 
    const {deployer } = await getNamedAccounts()
    const { deploy, log} = deployments
    const accounts = await ethers.getSigners()

    const args: any[] = []
    log("Deploying fallback.......")
    const overflowContract = await deploy("TimeLock", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })

    const args2: any[] = [overflowContract.address]
    const overflowAttackContract = await deploy("AttackOverflow", {
        from: accounts[1].address,
        args: args2,
        log: true,
        waitConfirmations: 1
    })
    log(`overflowContract ${overflowContract.address}`)
    log(`overflowAttackContract ${overflowAttackContract.address}`)
    log(deployer, accounts[1].address)
}

export default deployOverflow
deployOverflow.tags = ['all', "overflow"]