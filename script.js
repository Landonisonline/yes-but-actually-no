function askifok() {
if (confirm("Ok?")) {  
// Save it!
document.getElementById("p1").innerHTML = "Yes, but actually yes.";
} else {
  // Do nothing!
document.getElementById("p1").innerHTML = "Yes, but actually no.";
}
}