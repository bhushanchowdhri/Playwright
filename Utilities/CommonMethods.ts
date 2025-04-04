import {Page } from '@playwright/test';
import { expect } from '@playwright/test';
//set ENV=qa && npx bddgen --tags @test && npx playwright test --headed

export class CommonMethods {

  page:Page

  constructor(page:Page) {
    this.page=page
    
  }

  async NavigateToUrl(url:string){
    await this.page.goto(url)
  }

  async Click(locator:string){
    await this.page.locator(locator).click();
  }

  async VerifyTitle(text:string){
    expect(this.page).toHaveTitle(new RegExp(text));
  }
}
