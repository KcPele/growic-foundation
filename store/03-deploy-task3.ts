import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";
const deployTask3Contract: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const args: any[] =  []
    log(" Deploying ---------------------")
    const task3Contract = await deploy("Task3", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
    })
    log(`Task3Contract ${task3Contract.address}`)
}

export default deployTask3Contract
deployTask3Contract.tags = ["all", "Task3"]