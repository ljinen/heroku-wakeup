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
	
	let urllist =["https://ad-k03.herokuapp.com/browser/test",
				  "https://ad-l03.herokuapp.com/browser/test",
				  "https://ad-m03.herokuapp.com/browser/test",
				  "https://ad-n03.herokuapp.com/browser/test",
				  "https://ad-o03.herokuapp.com/browser/test",
				  "https://ad-k04.herokuapp.com/browser/test",
				  "https://ad-l04.herokuapp.com/browser/test",
				  "https://ad-m04.herokuapp.com/browser/test",
				  "https://ad-n04.herokuapp.com/browser/test",
				  "https://ad-o04.herokuapp.com/browser/test",
				  "https://ad-k05.herokuapp.com/browser/test",
				  "https://ad-l05.herokuapp.com/browser/test",
				  "https://ad-m05.herokuapp.com/browser/test",
				  "https://ad-n05.herokuapp.com/browser/test",
				  "https://ad-o05.herokuapp.com/browser/test"];
				  
	let nextUrl = "https://wakeup01.herokuapp.com/browser/test";
	
	let count = 0;
	while(count < urllist.length){
		try {
			await page.goto(urllist[count], {
				timeout: 60 * 1000,
				waitUntil
			});
			await page.waitForTimeout(50000);
			console.log('Success！');
		} catch (err) {
			console.log('Error！');
		}
		count++;
	}
    try{
		await page.goto(nextUrl);
		console.log('wakeup01！');
	} catch (err) {
		console.log('Error！');
	}
    console.log('Finish！');	
    await browser.close();
	
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
