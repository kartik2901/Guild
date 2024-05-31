import { ShidoTestInterface } from './../typechain-types/ShidoTest';
import { ShidoTest } from "../typechain-types";
import { ShidoTest__factory} from "../typechain-types";
import { ethers } from 'hardhat';
import { parseEther } from 'ethers/lib/utils';
import { expect } from "chai";





describe("Shido" , function(){

    let shido: ShidoTest;

    let Shido : ShidoTest
    let owner: any ; 
    let signer: any;
    let signer_1 : any ;
    let signer_2 : any ;
    let signer_3 : any ;
    let signer_4 : any ;
    let signer_5 : any ;
    let signer_6 : any ;

    beforeEach(async () =>{
        signer = await ethers.getSigners();
        (owner = signer[0]),
        (signer_1= signer[1]),
        (signer_2= signer[2]),
        (signer_3= signer[3]),
        (signer_4= signer[4]),
        (signer_5= signer[5]),

        shido = await new ShidoTest__factory(owner).deploy();
  
})


it("+Contract is deployed properly " , async() =>{
    console.log("cowf" , await shido.address);
});

it(" Owner should be able to deposit funds " , async () =>{


    const depositAmount = ethers.utils.parseEther("3.0");
    await shido.connect(owner).deposit({ value: depositAmount });

     const contractBalance = await ethers.provider.getBalance(shido.address);
 
     await expect(depositAmount).to.be.equal(contractBalance);

});


it(" Only owner should be able to deposit funds" , async () =>{


    const depositAmount = ethers.utils.parseEther("3.0");
    expect( await shido.connect(signer_1).deposit({ value: depositAmount })).to.be.revertedWith("Only admin can perform this action");


});



it.only("check whether batch transfer is working or not " , async () =>{


    const depositAmount = ethers.utils.parseEther("10.0");
   

    await shido.connect(owner).deposit({value : depositAmount});
    

    // const contractBalance = await ethers.provider.getBalance(shido.address);

    console.log("fmepofewre");

  
 
    // await expect(depositAmount).to.be.equal(contractBalance);

    const RecepientsAddress = [signer_1.address, signer_2.address , signer_3.address , signer_4.address];

    const depositAmount1 = ethers.utils.parseEther("1.0");
    const depositAmount2 = ethers.utils.parseEther("4.0");

    const depositAmount3 = ethers.utils.parseEther("3.0");

    const depositAmount4 = ethers.utils.parseEther("2.0");

    const DepositArr = [depositAmount1,depositAmount2, depositAmount3, depositAmount4];

    await shido.connect(owner).batchTransfer(RecepientsAddress, DepositArr);

    const balanceof1 = await ethers.provider.getBalance(signer_1.address);
    const balanceof2 = await ethers.provider.getBalance(signer_2.address);
    const balanceof3 = await ethers.provider.getBalance(signer_3.address);
    const balanceof4 = await ethers.provider.getBalance(signer_4.address);

    //console.log("balanse ic " , await ethers.provider.getBalance(signer_2.address));

    await expect(balanceof1).to.be.equal("10001000000000000000000");
    
    await expect(balanceof2).to.be.equal("10004000000000000000000");
    await expect(balanceof3).to.be.equal("10003000000000000000000");

    console.log("balanse ic " , await ethers.provider.getBalance(signer_4.address));

    await expect(balanceof4).to.be.equal("10002000000000000000000");


    console.log("contract balanse is " , await ethers.provider.getBalance(shido.address));







})
}); 