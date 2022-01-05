  var password;
  var pass1="Apple Banana Lime Berry";
  

  password=prompt('Please enter the 4 word pass Phrase',' ');

if (password==pass1)
    alert('Pass Phrase Correct! Click OK to enter!');
else
    {
    window.location="file:///F:/ITSE-2302/WaisnerLab2/WaisnerLab2.html";
    }



  function button1() {
    alert(pass1)
    alert (pass1.toLowerCase())
    alert (pass1.toUpperCase())
    alert (pass1.length)
  }


  function button2() {
    wordArray = pass1.split(' ');
    alert(wordArray);
    wordArray[0] = wordArray.splice(3, 1, wordArray[0])[0];
    alert(wordArray);
    wordArray[2] = 'Secret';
    alert(wordArray);
  }















