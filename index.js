//雛形；関数内の処理を全部待ってから画面を表示する
window.onload = async function() {
  
  //メタマスクに接続してブロック番号を取ってくる
  const provider = await new ethers.providers.Web3Provider(window.ethereum);
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
  //サイナーのアドレス取得
  address = await ethereum.request({ method: 'eth_requestAccounts' });
  const signer = await provider.getSigner();
  alert(address[0]);

  /*   初期化 RinkebyのJPYCコントラクト */
  //RinkebyのJPYCコントラクトアドレスとABI
  const JPYCAddress = "0xbD9c419003A36F187DAf1273FCe184e1341362C0";
  const JPYCAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];
  // JPYCコントラクトオブジェクト
  const JPYCContract = await new ethers.Contract(JPYCAddress, JPYCAbi, provider);

  /*   サイナーの保有量 */
  const balance = await JPYCContract.balanceOf(address[0]);
  alert(address[0] + ' : ' + ethers.utils.formatUnits(balance, 18) + 'JPYC');

}

