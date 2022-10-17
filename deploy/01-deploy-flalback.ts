import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployFallback: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments} = hre 
    const {deployer } = await getNamedAccounts()
    const { deploy, log} = deployments

    const args: any[] = []
    log("Deploying fallback.......")
    const fallbackContract = await deploy("Fallback", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })
    const sendFallbackContract = await deploy("SendToFallback", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })
    log(`FallbackContract ${fallbackContract.address}`)
    log(`SendFallbackContract ${sendFallbackContract.address}`)
}

export default deployFallback
deployFallback.tags = ['all', "fallback"]