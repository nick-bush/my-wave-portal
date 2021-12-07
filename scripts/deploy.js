const main = async () => {
    //three main steps - compile, deploy, and wait for it to be deployed (mined)
    //grab address of contract deployer
    const [deployer] = await hre.ethers.getSigners();
    //grab deployer acct balance
    const accountBalance = await deployer.getBalance();

    console.log('Deploying with account:', deployer.address);
    console.log('Account balance: ', accountBalance);
    //
    const Token = await hre.ethers.getContractFactory('WavePortal');
    const portal = await Token.deploy();
    await portal.deployed();

    console.log('WavePortal Address: ', portal.address);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch(error){
        console.error(error);
        process.exit(1);
    }
};

runMain();