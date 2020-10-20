function showButton(){
  var button = document.getElementById("toTop")
  if(/MacIntel|MacPPC|Mac68K|Win64|Win32|Win16|SunOS|HP-UX|Linux i686/i.test(navigator.userAgent) ) {
    button.style.display = "none"
  }else{
    button.style.display = "block"
  }
}
