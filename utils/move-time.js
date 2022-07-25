const { network } = require("hardhat") 

async function moveTime(amount) 
{
  console.log("Increasing Time...")
  await network.provider.send("evm_increaseTime", [amount])

  console.log(`Moved forward in time ${amount} seconds`)
}

module.exports = { moveTime }