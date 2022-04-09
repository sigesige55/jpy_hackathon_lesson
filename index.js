//ページの読み込み完了メッセージ
window.onload = async function() {
  myFunction();
//  alert("ページが読み込まれました！");
}

alert("こんにちは");
console.log("JPYC! JPYC!");
console.log("3");

// *** 初期化 MetaMaskに接続して、最新のブロック番号取ってくる ***
async function myFunction() {
  const provider =await new ethers.provider.Web3Provider(window.ethereum);
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
}

// 

