import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
const deployVault: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, ethers} = hre 
    const {deployer } = await getNamedAccounts()
    const { deploy, log} = deployments

    const args: any[] = [ethers.utils.formatBytes32String("pass123Word")]
    log("Deploying Vault.......")
    const vaultContract = await deploy("Vault", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })


    log(`vaultContract ${vaultContract.address}`)
}

export default deployVault
deployVault.tags = ['all', "vault"]