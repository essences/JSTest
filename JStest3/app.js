window.addEventListener("load", function() {
  console.log("Hello World!");

  var str= prompt("わーい<br>");

  for(i=0;i < 10 ; i++)
  {
  str = prompt(str + i + "わーい <br>");
  }

  confirm(str);
});
