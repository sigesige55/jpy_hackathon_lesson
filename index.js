//雛形；関数内の処理を全部待ってから画面を表示する
window.onload = async function() {
  
  //メタマスクに接続してブロック番号を取ってくる
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
  

}

