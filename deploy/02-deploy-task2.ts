import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";
const deployTask1Contract: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const args: any[] =  []
    log(" Deploying ---------------------")
    const task2Contract = await deploy("Task2", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
    })
    log(`Task2Contract ${task2Contract.address}`)
}

export default deployTask1Contract
deployTask1Contract.tags = ["all", "task2"]