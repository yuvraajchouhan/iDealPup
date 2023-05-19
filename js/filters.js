function limitCheckboxes() {
  var checkboxes = document.getElementsByName('traits[]');
  var checkedCount = 0;
 
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
    
    if (checkedCount > 3) {
      checkboxes[i].checked = false;
    }
  }
}

function isColorSelected() {
  return document.getElementById('color-selected').checked;
}
