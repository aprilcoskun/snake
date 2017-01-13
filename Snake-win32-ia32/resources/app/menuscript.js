  var selectElem = document.getElementById('select');
  var c=selectElem.value;

  selectElem.addEventListener('change', function() {
    c = selectElem.value;
  });

  function play() {
    var url = "index.html?" + c;
    window.location.href=url;
  }
