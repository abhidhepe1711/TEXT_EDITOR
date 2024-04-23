function formatDoc(cmd, value = null) {
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd);
  }
}

const content = document.getElementById("content");

function changeFont(font) {
  document.getElementById("content").style.fontFamily = font.value;
}
