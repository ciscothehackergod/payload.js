```javascript
document.open();

document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Security Research PoC</title>

  <style>
    * {
      box-sizing: border-box;
    }

    html, body {
      width: 100%;
      min-height: 100%;
      margin: 0;
    }

    body {
      min-height: 100vh;
      min-height: 100dvh;
      background:
        radial-gradient(circle at center, #151515 0%, #050505 65%, #000 100%);
      color: white;
      font-family: Arial, Helvetica, sans-serif;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 20px;
      overflow: hidden;
    }

    /* Subtle background grid */
    body::before {
      content: "";
      position: fixed;
      inset: 0;

      background-image:
        linear-gradient(rgba(252, 61, 33, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(252, 61, 33, 0.035) 1px, transparent 1px);

      background-size: 40px 40px;
      pointer-events: none;
    }

    .box {
      position: relative;
      width: min(92vw, 620px);

      background: rgba(20, 20, 20, 0.96);

      border: 1px solid #fc3d21;
      border-radius: 14px;

      padding: clamp(28px, 6vw, 50px);

      text-align: center;

      box-shadow:
        0 0 20px rgba(252, 61, 33, 0.12),
        0 0 60px rgba(252, 61, 33, 0.05);

      animation: fadeIn 0.7s ease;
    }

    .icon {
      width: 78px;
      height: 78px;

      margin: 0 auto 22px;

      border: 1px solid rgba(252, 61, 33, 0.5);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 36px;

      background: rgba(252, 61, 33, 0.05);

      box-shadow:
        0 0 25px rgba(252, 61, 33, 0.12);
    }

    .tag {
      display: inline-block;

      color: #fc3d21;
      border: 1px solid rgba(252, 61, 33, 0.5);

      padding: 6px 12px;
      border-radius: 20px;

      font-size: 11px;
      font-weight: bold;

      letter-spacing: 2px;
      text-transform: uppercase;

      margin-bottom: 18px;
    }

    h1 {
      margin: 0 0 16px;

      color: #fc3d21;

      font-size: clamp(26px, 6vw, 42px);
      line-height: 1.15;

      letter-spacing: 2px;

      text-shadow:
        0 0 15px rgba(252, 61, 33, 0.35);
    }

    .subtitle {
      color: #bdbdbd;

      font-size: clamp(14px, 2.5vw, 16px);

      line-height: 1.7;

      margin: 0 auto 28px;

      max-width: 480px;
    }

    .status {
      border: 1px solid #292929;
      border-radius: 9px;

      background: #101010;

      padding: 17px 20px;

      margin: 25px 0;

      text-align: left;
    }

    .status-line {
      display: flex;
      align-items: center;
      gap: 10px;

      color: #aaa;

      font-size: 13px;

      margin: 7px 0;
    }

    .green {
      color: #00ff88;
    }

    .red {
      color: #fc3d21;
    }

    .researcher {
      margin-top: 28px;

      padding-top: 22px;

      border-top: 1px solid #292929;
    }

    .researcher-label {
      color: #666;

      font-size: 11px;

      letter-spacing: 2px;
      text-transform: uppercase;

      margin-bottom: 8px;
    }

    .researcher-name {
      color: #fff;

      font-size: clamp(18px, 4vw, 23px);

      font-weight: bold;

      letter-spacing: 1px;
    }

    .footer {
      margin-top: 25px;

      color: #555;

      font-size: 10px;

      line-height: 1.6;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(12px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 480px) {

      body {
        padding: 14px;
        overflow: auto;
      }

      .box {
        width: 100%;
        padding: 28px 20px;
      }

      .icon {
        width: 65px;
        height: 65px;
        font-size: 29px;
      }

      .status {
        padding: 14px;
      }

      .status-line {
        font-size: 12px;
      }
    }
  </style>
</head>

<body>

  <div class="box">

    <div class="icon">🔒</div>

    <div class="tag">
      Security Research PoC
    </div>

    <h1>
     HI NASA
    </h1>

    <p class="subtitle">
      This page demonstrates successful control of the affected
      subdomain as part of authorized security research.
    </p>

    <div class="status">

      <div class="status-line">
        <span class="green">●</span>
        <span>Proof of Control: <strong class="green">CONFIRMED</strong></span>
      </div>

      <div class="status-line">
        <span class="red">●</span>
        <span>Vulnerability: <strong>HI NASA HACKED</strong></span>
      </div>

      <div class="status-line">
        <span class="green">●</span>
        <span>Data Access: <strong class="green">NONE</strong></span>
      </div>

    </div>

    <div class="researcher">

      <div class="researcher-label">
        Security Researcher
      </div>

      <div class="researcher-name">
        Muhammad Murtaza
      </div>

    </div>

    <div class="footer">
      RESPONSIBLE DISCLOSURE · SECURITY RESEARCH<br>
      Proof of concept only — no user data accessed or modified.
    </div>

  </div>

</body>
</html>
`);

document.close();
```
