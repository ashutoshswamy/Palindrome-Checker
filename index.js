function checkPalindrome() {
  let string = document.getElementById("string-input").value;
  let result = document.getElementById("result");

  let newString = string.toLowerCase();
  newString.replace(/[^a-z0-9]/g, "");
  const reversedString = newString.split("").reverse().join("");

  if (newString === reversedString) {
    result.innerText = "This string is a Palindrome";
  } else {
    result.innerHTML = "This string is not a Palindrome";
  }
}
