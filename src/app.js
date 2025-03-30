const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({}));

app.get('/', (req, res) => {
  res.send(`
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
        font-family: Helvetica, SansSerif;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding: 16px 0;
        background-color: #f5f5f5;
      }
      .subtitle {
        margin: 8px 0;
      }
      p code {
        background-color: #cecbcb;
      }
      .repos {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
    <div class="container">
      <div>
        <img src="https://github.com/nodex-labs/brand/raw/main/nodex-logo.svg" alt="nodex labs">
      </div>
      <h1>@nodex-labs/create</h1>
      <hr style="width: 100%; margin: 4px 0;">
      <h2 class="subtitle">Template Express Basic</h2>
      <p>Start editing your code in <code>src</code> folder</p>
      <div style="margin-top: 8px;">
        <h3 style="text-align: center">For more information check out:</h3>
        <div class="repos">
          <a href="https://github.com/nodex-labs/create/tree/main#readme" target="_blank">
            @nodex-labs/create Github Repo
          </a>
          <span style="margin: 0 4px;">|</span>
          <a href="https://github.com/nodex-labs/template-express-basic?tab=readme-ov-file#readme" target="_blank">
            Basic Express Template Github Repo
          </a>  
        </div>
      </div>
    </div>
  `);
});

module.exports = app;
