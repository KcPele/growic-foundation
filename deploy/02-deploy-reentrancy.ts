import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployFallback: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, ethers} = hre 
    const {deployer } = await getNamedAccounts()
    const { deploy, log} = deployments
    const accounts = await ethers.getSigners()

    const args: any[] = []
    log("Deploying fallback.......")
    const etherStoreContract = await deploy("EtherStore", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })

    const args2: any[] = [etherStoreContract.address]
    const reentracyAttackContract = await deploy("ReentracyAttack", {
        from: accounts[1].address,
        args: args2,
        log: true,
        waitConfirmations: 1
    })
    log(`etherStoreContract ${etherStoreContract.address}`)
    log(`reentracyAttackContract ${reentracyAttackContract.address}`)
    log(deployer, accounts[1].address)
}

export default deployFallback
deployFallback.tags = ['all', "reentrancy"]