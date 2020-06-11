// 7 kyu on CodeWars

//Solution:

function maskify(cc) {
  return cc.replace(/\w(?=\w{4})/g, "#");
}
