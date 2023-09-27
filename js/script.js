function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "/assets/caps/1/", true);
    xhttp.send();
  }

  function myFunction(xml) {
    // console.log(xml.responseText)
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(xml.responseText, 'text/html');
    var preList = htmlDoc.getElementsByTagName("pre")[0].getElementsByTagName("a")
    for (i = 1; i < preList.length; i++) {
      console.log(preList[i].innerHTML)
    }
  }

  console.log(loadDoc().responseText)