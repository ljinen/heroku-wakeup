const express = require("express")
const { chromium } = require("playwright-chromium")
//const { firefox } = require("playwright-firefox")

const app = express()
app.use(express.static("./public"))
const port = process.env.PORT || 3000;

app.get("/browser/:name", async (req, res) => {
  //const browserName = req.params["name"] || "chromium"
  //if (!["chromium", "firefox"].includes(browserName)) {
  //  return res.status(500).send(`invalid browser name (${browserName})!`)
  //}
  //const url = req.query.url || "https://microsoft.com"
  //const waitUntil = req.query.waitUntil || "load"
  //const width = req.query.width ? parseInt(req.query.width, 10) : 1920
  //const height = req.query.height ? parseInt(req.query.height, 10) : 1080
  //console.log(`Incoming request for browser '${browserName}' and URL '${url}'`)
	res.send('wake up OK!'); //响应程序

    /** @type {import('playwright-chromium').Browser} */
    //const browser = await { chromium, firefox }[browserName].launch({
	const browser = await chromium.launch({
      chromiumSandbox: false
    });
    const page = await browser.newPage();
	
	let urllist =["https://ad-f04.herokuapp.com/browser/test",
				  "https://ad-g04.herokuapp.com/browser/test",
				  "https://ad-h04.herokuapp.com/browser/test",
				  "https://ad-i04.herokuapp.com/browser/test",
				  "https://ad-j04.herokuapp.com/browser/test",
				  "https://ad-f05.herokuapp.com/browser/test",
				  "https://ad-g05.herokuapp.com/browser/test",
				  "https://ad-h05.herokuapp.com/browser/test",
				  "https://ad-i05.herokuapp.com/browser/test",
				  "https://ad-j05.herokuapp.com/browser/test",
				  "https://ad-k01.herokuapp.com/browser/test",
				  "https://ad-l01.herokuapp.com/browser/test",
				  "https://ad-m01.herokuapp.com/browser/test",
				  "https://ad-n01.herokuapp.com/browser/test",
				  "https://ad-o01.herokuapp.com/browser/test",
				  "https://ad-k02.herokuapp.com/browser/test",
				  "https://ad-l02.herokuapp.com/browser/test",
				  "https://ad-m02.herokuapp.com/browser/test",
				  "https://ad-n02.herokuapp.com/browser/test",
				  "https://ad-o02.herokuapp.com/browser/test"];
				  
	let nextUrl = "https://wakeup04.herokuapp.com/browser/test";
	
	let count = 0;
	while(count < urllist.length){
		try {
			await page.goto(urllist[count], {
				timeout: 60 * 1000,
				waitUntil
			});
			await page.waitForTimeout(30000);
			console.log('Success！');
		} catch (err) {
			console.log('Error！');
		}
		count++;
	}
    try{
		await page.goto(nextUrl);
		console.log('wakeup04！');
	} catch (err) {
		console.log('Error！');
	}
	console.log('Finish！');
    await browser.close();
	
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
