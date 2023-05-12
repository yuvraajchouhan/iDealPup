function limitCheckboxes() {
    var checkboxes = document.getElementsByName("traits[]");
    var maxCheckboxes = 4;
    var checkedCount = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedCount++;
        if (checkedCount > maxCheckboxes) {
          checkboxes[i].checked = false;
          alert("You can only select a maximum of " + maxCheckboxes + " traits.");
          break;
        }
      }
    }
  }