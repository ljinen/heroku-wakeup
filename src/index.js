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
	
	let urllist =["https://ad-a01.herokuapp.com/browser/test",
				  "https://ad-b01.herokuapp.com/browser/test",
				  "https://ad-c01.herokuapp.com/browser/test",
				  "https://ad-d01.herokuapp.com/browser/test",
				  "https://ad-e01.herokuapp.com/browser/test",
				  "https://ad-a02.herokuapp.com/browser/test",
				  "https://ad-b02.herokuapp.com/browser/test",
				  "https://ad-c02.herokuapp.com/browser/test",
				  "https://ad-d02.herokuapp.com/browser/test",
				  "https://ad-e02.herokuapp.com/browser/test",
				  "https://ad-a03.herokuapp.com/browser/test",
				  "https://ad-b03.herokuapp.com/browser/test",
				  "https://ad-c03.herokuapp.com/browser/test",
				  "https://ad-d03.herokuapp.com/browser/test",
				  "https://ad-e03.herokuapp.com/browser/test",
				  "https://ad-a04.herokuapp.com/browser/test",
				  "https://ad-b04.herokuapp.com/browser/test",
				  "https://ad-c04.herokuapp.com/browser/test",
				  "https://ad-d04.herokuapp.com/browser/test",
				  "https://ad-e04.herokuapp.com/browser/test"];
				  
	let nextUrl = "https://wakeup02.herokuapp.com/browser/test";
	
	let count = 0;
	while(count < urllist.length){
		try {
			await page.goto(urllist[count]);
			await page.waitForTimeout(30000);
			console.log('Success！');
		} catch (err) {
			console.log('Error！');
		}	
		count++;
	}
    try{
		await page.goto(nextUrl);
		console.log('wakeup02！');
	} catch (err) {
		console.log('Error！');
	}
	console.log('Finish！');
    await browser.close();
	
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
