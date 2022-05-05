# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell

mkdir jaz-contact-portal
cd jaz-contact-portal
npm init -y
npm install --save-dev hardhat

run:
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers



npx hardhat accounts -> Ethereum addresses: simulate real users on the blockchain
npx hardhat compile -> make sure everything is working
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help


npx hardhat node -> in new terminal keeps the network alive locally


after deploying the contract run in other terminal:
 npx hardhat run scripts/deploy.js --network localhost

 you will see changes in the other terminal.
 transaction is includet in a block

 using replit: browser-based IDE 

 using alchemy
 MyCrypto

 secure 
 npm install --save dotenv

Deploy with .env variables and see it in etherscan: 
 npx hardhat run scripts/deploy.js --network rinkeby
```
