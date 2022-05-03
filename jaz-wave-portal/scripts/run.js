const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compiles contract (hre. is the hardhat)
    const waveContract = await waveContractFactory.deploy(); // hardhat creates a local Etherium network & refreshes each time
    await waveContract.deployed(); // deploy to local blockchain


    console.log("Contract deployed to:", waveContract.address); 
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave(); 
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves(); // just to see if the number of waves changed
    
    waveTxn = await waveContract.connect(randomPerson).wave(); // simulate other people hitting our functions
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
};

  
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();