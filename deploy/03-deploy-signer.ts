import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const verifySignature: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, ethers} = hre 
    const {deployer } = await getNamedAccounts()
    const { deploy, log} = deployments
    const accounts = await ethers.getSigners()

    const args: any[] = []
    log("Deploying verifySignatureContract.......")
    const verifySignatureContract = await deploy("VerifySignature", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })

    
    log(`verifySignatureContract ${verifySignatureContract.address}`)
   
}

export default verifySignature
verifySignature.tags = ['all', "verifySignature"]