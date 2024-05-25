function convertToMillimeters() {
  var meterInput = document.getElementById("meterInput").value;
  var millimeters = meterInput * 1000;
  document.getElementById("resultMillimeters").innerHTML =
    "Hasilnya : " + millimeters + " mm";
  document.getElementById("resultMeters").innerHTML = "";
}

function convertToMeters() {
  var millimeterInput = document.getElementById("millimeterInput").value;
  var meters = millimeterInput / 1000;
  document.getElementById("resultMeters").innerHTML =
    "Hasilnya : " + meters + " m";
  document.getElementById("resultMillimeters").innerHTML = "";
}

function resetFields() {
  document.getElementById("meterInput").value = "";
  document.getElementById("millimeterInput").value = "";
  document.getElementById("resultMeters").innerHTML = "";
  document.getElementById("resultMillimeters").innerHTML = "";
}
