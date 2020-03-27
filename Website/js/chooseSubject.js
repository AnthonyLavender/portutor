window.onload=function() {
function querySt(ji) {
hu = window.location.search.substring(1);
subj = hu.split("&");
for (i=0;i<subj.length;i++) {
ft = subj[i].split("=");
if (ft[0] == ji) {
return ft[1];
    }
  }
}
var sub = querySt("sub");
if(sub==null) {
}
else {
document.getElementById('subject').value = sub;
  }
}
