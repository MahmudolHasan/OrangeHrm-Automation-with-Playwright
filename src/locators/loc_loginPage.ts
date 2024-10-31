import {test,Locator, Page} from "@playwright/test"

export class loc_loginPage {
    readonly page:Page;
    readonly loc_username:Locator ;
    readonly loc_password:Locator;
    readonly loc_loginBtn:Locator;

    constructor(page){
        this.loc_username = page.getByPlaceholder("Username");
        this.loc_password = page.getByPlaceholder("Password");
        this.loc_loginBtn = page.getByRole("Button",{name:"Login"});
    }

}