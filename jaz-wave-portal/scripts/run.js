const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const networkingContractFactory = await hre.ethers.getContractFactory("NetworkingPortal"); // compiles contract (hre. is the hardhat)
    const networkingContract = await networkingContractFactory.deploy(); // hardhat creates a local Etherium network & refreshes each time
    await networkingContract.deployed(); // deploy to local blockchain


    console.log("Contract deployed to:", networkingContract.address); 
    console.log("Contract deployed by:", owner.address);

    let contactCount;
    contactCount = await networkingContract.getTotalcontacts();

    let contactTxn = await networkingContract.contact(); 
    await contactTxn.wait();

    contactCount = await networkingContract.getTotalcontacts(); // just to see if the number of contacts changed
    
    contactTxn = await networkingContract.connect(randomPerson).contact(); // simulate other people hitting our functions
    await contactTxn.wait();

    contactCount = await networkingContract.getTotalcontacts();
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