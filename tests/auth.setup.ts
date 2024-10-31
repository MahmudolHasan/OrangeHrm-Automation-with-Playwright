import {test as setup} from "@playwright/test"
import { loc_loginPage } from "../src/locators/loc_loginPage"
import path  from "path"
import * as data from "../test_data/userInfo.json"

const authFile = path.join(__dirname,"../test_data/.auth/user.json")

//setup
setup('authenticate',async({page,baseURL})=>{
    let loginPage = new loc_loginPage(page);
    await page.goto(baseURL+"");
    await page.waitForLoadState();
    await loginPage.loc_username.fill(data.Username)
    await loginPage.loc_password.fill(data.Password)
    await loginPage.loc_loginBtn.click();
    await page.waitForLoadState()

    // Save authentication state
  await page.context().storageState({ path: authFile });

    

})