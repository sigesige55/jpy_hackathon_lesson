console.log("こんにちは");
console.log("JPYC! JPYC!");
console.log("3");
// *** 初期化 MetaMaskに接続 ***
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)
// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();

// 現在のブロックNoの取得
let a;
function myfunction() {
  a = provider.getBlockNumber();
}
console.log(a);
