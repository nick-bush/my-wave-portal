//to test a smart contract you must do a number of things such as compile, deploy, and execute. this script will make it seamless to do so.

const main = async () => {
    //grab address of contract owner and of a rando
    const [owner,randomPerson] = await hre.ethers.getSigners();

    //compile contract, run constructor, and generate files in the artifacts directory
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');

    //hardhat creates a local ethereum network for us, just for this contract. after completion it will destroy that local network.
    const waveContract = await waveContractFactory.deploy();

    //wait until contract is deployed
    await waveContract.deployed();

    //view the address of the contract and owner (especially important on mainnet)
    console.log('contract deployed to: ',waveContract.address);
    
    console.log('contract deployed by: ',owner.address);

    accountBalance = await  owner.getBalance();

    console.log('Owner balance:', accountBalance)
    
    //manually call the smart contract functions
    //get wave count
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    //wave
    let waveTxn = await waveContract.wave('yo king. whats good.');
    //wauit for the transaction to to be mined
    await waveTxn.wait();
    //get count again
    waveCount = await waveContract.getTotalWaves();
    //simulate our rando waving
    waveTxn = await waveContract.connect(randomPerson).wave('sup brah');
    await waveTxn.wait();

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error){
        console.log(error);
        process.exit(1)
    }
};

runMain();