const { expect } = require("chai")
const { ethers } = require("hardhat")


describe("Token Transfer", function( ){
    it("Return owner balance", async function () {
        const [owner] = await ethers.getSigners()

        const token = await ethers.deployContract("Trakteer")
        const bal = await token.balance(owner.address)
        expect(bal).not.equal(0)
    })

    it("Transfer token and balance", async function () {
        const [owner] = await ethers.getSigners()

        const token = await ethers.deployContract("Trakteer")

        const transfered = ethers.parseEther("1.0")
        await token.traktir(transfered, {value: transfered})

        const bal = await token.balance(owner.address)
        expect(bal).greaterThan(9)
        
    })
})