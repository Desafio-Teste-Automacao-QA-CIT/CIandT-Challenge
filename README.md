<p align=center>
    <img src="https://ciandt.com/themes/custom/ciandt_theme/logo.svg" width="120"></img>
</p>

<h1 align=center>    
   🗒️ QA Challenge ✔️
</h1>
<p align=center>
<a href="https://www.nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
</a>
<a href="https://docs.docker.com">
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://jestjs.io/">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
</a>
<a href="https://www.selenium.dev/">
    <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white">
</a>
</p>

<p align=center>
    <a href="#about">About</a> | <a href="#drivers">Drivers</a> | <a href="#install">Installation</a> | <a href="#run">Running</a> | <a href="#docker">Running with Docker</a>
</p>
<h1></h1>

<h3 id="about"> 
    🔎 About
</h3>

 - You can learn more about how this challenege works by clicking [here](https://github.com/dhiegobastos/qa-test/blob/main/README.md).

<h1></h1>

<h3 id="drivers"> 
    ⚙️ Drivers
</h3>

- For this project we chose Google Crome as our testing browser.
- First of all, you should find out which version Google Chrome Browser runs on.  
- If you're on **_Linux_** then you should run the following command:
```sh
 google-chrome-stable --version 
 # "Google Chrome 95.0.4638.54"
```
 - If your're running **_Windows_**, then you should try this one:
```
reg query "HKEY_CURRENT_USER\Software\Google\Chrome\BLBeacon" /v version
```
Then you should replace the `{VERSION}` with  version number  from the previous command output. Then you should access the following url and download your OS correspondent driver and unzip it inside the project directory replacing the current one with the one you just downloaded.

```
https://chromedriver.storage.googleapis.com/index.html?path={VERSION}/
```

<h1></h1>

<h3 id="install"> 
    ⬇️ Installing Dependencies
</h3>

Running one of the following commands will install the required packages for running this project.

```sh
npm install

# or if you're using yarn...

yarn
```
<h1></h1>


<h3 id="run"> 
    ⏯️ Running Locally
</h3>

Before running, you should first commennt [this](https://github.com/Desafio-Teste-Automacao-QA-CIT/node-tests/blob/eda7d02a774bb143a4da36c8ff9260832e17e674/test/index.spec.js#L8) line on your `index.spec.js` file. Once you're finished doing that just run one of the following commands:
```sh
npm test -local

# or if you're using yarn...

yarn test -local

```

You can check the results in your console / terminal.

- - -

<h1 align=center id="docker"> 
    🖥️ Virtual Runtime 🐋
</h1>

If you don't want to do the hard working of setting up the enviroment for running this tests locally you can always run this project in a Docker container. For doing so you must have _**Docker**_ installed on your machine (which comes with `docker-compose` and it's the tool that we're going to be using).
Then, once you have everything set up, just run one of the following commands and you should be good to go.

<details>
<summary>⚠️ hint</summary>

   - If it takes a while to run, don't worry, we've intentionally increased the timeout so it runs smoothly on all (or most) machines.
</details>

```sh
npm run docker

# or if you're using yarn...

yarn docker
```
