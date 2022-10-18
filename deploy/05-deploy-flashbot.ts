import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployFakeNFT: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, ethers} = hre 
    const {deployer } = await getNamedAccounts()
    const { deploy, log} = deployments

    const args: any[] = []
    log("Deploying fakeNFT.......")
    const fakeNFTContract = await deploy("FakeNFT", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })


    log(`fakeNFTContract ${fakeNFTContract.address}`)
}

export default deployFakeNFT
deployFakeNFT.tags = ['all', "flashbot"]