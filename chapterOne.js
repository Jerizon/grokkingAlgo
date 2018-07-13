// 1.1: 7 operations;
//      2^7 = 128, so worst case would be seven operations.
// 1.2: 8 operations:
//      if the amount of the input is doubled, with O log(n) it will be 8 operations.
//      2^8 = 256
// 1.3: A runtime to look through an organized phonebook with binary seradch is O log(n)
// 1.4: A runtime to look through a phonebook and through each number would be O (n)
// 1.5: To read every number in the phone book would be O (n)
// 1.6: To read only the A's would be 1/26 O (n), which would reduce to O (n)


function binarySearch(arr, k) {
  //assumption that arr is ordered & comprised of numbers
  // k is desired number
  // returns index of k or -1 if there is no match

  var low = 0;
  var high = arr.length-1;
  var mid = Math.floor((high + low)/2);

  while(low !== mid ){
    if(arr[mid] === k){
      console.log('FOUND!', mid);
      return mid;
    } else if (arr[mid] > k) {
      high = mid;
      mid = Math.floor((high + low)/2);
    } else if (arr[mid] < k) {
      low = mid;
      mid = Math.floor((high + low)/2);
    }
  }
  console.log('NOT FOUND! ', -1);
  return -1;
}
// Should return index of 4
console.log('Test 1');
binarySearch([1,2,3,4,5,6,7,8], 5);

console.log('Test 2');
binarySearch([1,2,3,4,6,7,8,9], 5);