document.open();
document.write(`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HI, NASA HACKED BY MUHAMMAD MURTAZA</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background: #050505;
            color: #00ff66;
            font-family: "Courier New", monospace;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        body::before {
            content: "";
            position: fixed;
            inset: 0;
            background:
                linear-gradient(rgba(0,255,100,.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,100,.04) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
        }

        .terminal {
            width: 90%;
            max-width: 950px;
            border: 1px solid #00ff66;
            box-shadow:
                0 0 20px rgba(0,255,100,.25),
                inset 0 0 30px rgba(0,255,100,.03);
            background: rgba(0,0,0,.94);
        }

        .topbar {
            height: 38px;
            border-bottom: 1px solid #00ff66;
            display: flex;
            align-items: center;
            padding: 0 14px;
            gap: 8px;
        }

        .dot {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            border: 1px solid #00ff66;
        }

        .title {
            margin-left: 10px;
            color: #aaa;
            font-size: 13px;
        }

        .content {
            padding: 45px;
        }

        .ascii {
            font-size: 11px;
            line-height: 1.15;
            margin-bottom: 30px;
            text-shadow: 0 0 8px #00ff66;
            white-space: pre;
            overflow-x: auto;
        }

        .prompt {
            color: #777;
            margin-bottom: 8px;
        }

        .green {
            color: #00ff66;
        }

        .red {
            color: #ff3344;
        }

        .white {
            color: #eee;
        }

        h1 {
            font-size: clamp(24px, 5vw, 48px);
            letter-spacing: 4px;
            margin-bottom: 20px;
            text-shadow: 0 0 15px #00ff66;
        }

        .status {
            border: 1px solid #00ff66;
            padding: 15px;
            margin: 25px 0;
            background: rgba(0,255,100,.04);
        }

        .researcher {
            margin-top: 30px;
            padding: 20px;
            border-left: 3px solid #00ff66;
            background: rgba(0,255,100,.03);
        }

        .researcher-name {
            font-size: 24px;
            color: #fff;
            text-shadow: 0 0 10px #00ff66;
            margin-top: 8px;
        }

        .cursor {
            display: inline-block;
            width: 9px;
            height: 18px;
            background: #00ff66;
            animation: blink 1s infinite;
            vertical-align: middle;
        }

        .footer {
            margin-top: 35px;
            color: #555;
            font-size: 12px;
        }

        @keyframes blink {
            50% {
                opacity: 0;
            }
        }

        @media (max-width: 600px) {
            .content {
                padding: 25px;
            }

            .ascii {
                font-size: 7px;
            }
        }
    </style>
</head>

<body>

<div class="terminal">

    <div class="topbar">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="title">security_research@localhost:~</div>
    </div>

    <div class="content">

        <div class="ascii">
   _____ _____ ____   ___  ____  _____
  / ___// ___// __ \ / _ \/ __ \/ ___/
  \__ \/ /__ / /_/ /  __/ / / (__  )
 ___/ /\___/\____/\___/_/ /_/____/
        </div>

        <div class="prompt">
            root@security-research:~$ ./poc.sh
        </div>

        <h1>ETHICAL HACKER Muhammad Murtaza</h1>

        <p class="white">
            [<span class="green">+</span>] Security Research PoC initialized
        </p>

        <p class="white">
            [<span class="green">+</span>] Target: Authorized security testing
        </p>

        <p class="white">
            [<span class="green">+</span>] Vulnerability: Executing client side script in user browser
        </p>

        <p class="white">
            [<span class="red">!</span>] Status: Vulnerable
        </p>

        <div class="status">
            <strong>ACCESS STATUS:</strong>
            <span class="green"> CLAIMED / PROOF OF CONTROL</span>
            <br><br>
            This page demonstrates control of the affected subdomain.
            No user data was accessed, modified, or exfiltrated.
        </div>

        <div class="researcher">
            <div>[ SECURITY RESEARCHER ]</div>

            <div class="researcher-name">
                Muhammad Murtaza
            </div>

            <br>

            <div class="prompt">
                root@security-research:~$ echo "Responsible Disclosure"
            </div>

            <div class="green">
                Responsible Disclosure // Security Research
            </div>
        </div>

        <div class="footer">
            ─────────────────────────────────────────────────────
            <br>
            Proof of Concept • Authorized Security Research
            <br>
            <span class="green">root@research:~$</span>
            <span class="cursor"></span>
        </div>

    </div>
</div>

</body>
</html>
```
document.close();
