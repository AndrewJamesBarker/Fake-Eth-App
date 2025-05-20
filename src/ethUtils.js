import { JsonRpcProvider, Wallet, parseEther  } from 'ethers';

const provider = new JsonRpcProvider('http://127.0.0.1:8545');

const testPrivateKey = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e';
const wallet = new Wallet(testPrivateKey, provider);

export async  function sendFakeTransaction(to, amountEth) { 
    const tx = await wallet.sendTransaction({
        to,
        value: parseEther(amountEth),
        gasLimit: 21000,
    });
    await tx.wait();
    return tx.hash;
}
