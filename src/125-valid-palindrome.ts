export const isPalindrome = function (s: string) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  //

  return true;
};
