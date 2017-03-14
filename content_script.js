function removePopup() {
  var popupElement = document.getElementById("pagelet_growth_expanding_cta");

  popupElement.outerHTML = "";
  popupElement.click();

}

removePopup();