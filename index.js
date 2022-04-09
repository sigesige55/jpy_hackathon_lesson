//ページの読み込み完了メッセージ
window.onload = function() {
  alert("ページが読み込まれました！");
}

console.log("こんにちは");
console.log("JPYC! JPYC!");
console.log("3");
// *** 初期化 MetaMaskに接続 ***


// 現在のブロックNoの取得
let a;
async function myfunction() {
  a = await provider.getBlockNumber();
}
console.log(a);
