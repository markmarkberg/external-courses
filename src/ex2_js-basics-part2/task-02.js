function getCount(array) {
  array.forEach(function(item, index) {
    console.log(`Item#${index}: ${item}`);
  });
  console.log(`Array length: ${array.length}`);
  return;
}
module.exports = getCount;
