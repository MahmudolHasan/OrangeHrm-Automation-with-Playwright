import {test,expect} from "@playwright/test"

test("Authentication test",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.url()).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})