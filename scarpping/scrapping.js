const puppeteer = require('puppeteer');

let scrape = async () =>{
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();

}

scrape().then((value) => {
    console.log(value);
})