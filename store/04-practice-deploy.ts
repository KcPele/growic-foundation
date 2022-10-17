import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";

const deployPracticeContract: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network} = hre;
    const { deployer } = await getNamedAccounts()
    const { deploy, log} = deployments
    const args: any[] = []

    log("deploying-------------------------------")

    const practiceContract  = await deploy('Practice', {
        from: deployer,
        args,
        log: true,
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
    })

    log(`Practice contract ${practiceContract.address}`)

}

export default deployPracticeContract
deployPracticeContract.tags = ['all', 'practice']