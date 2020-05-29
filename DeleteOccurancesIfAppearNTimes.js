// 6 kyu on CodeWars

//Solution:

function deleteNth(arr, n) {
  var cache = {};
  return arr.filter(function(i) {
    cache[i] = (cache[i]||0) + 1;
    return cache[i] <= n;
  });
}
