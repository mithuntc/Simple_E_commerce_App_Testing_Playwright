import { test, expect } from '@playwright/test';
test('E_commerce_App_test', async ({ page }) => {
    //hitting the landing page
    await page.goto('http://localhost:3000/');
    await page.screenshot({ path: 'screenshots/main-page.png' });
    //checking the title of the item to be added (Mens Casual ..)
    const title = await page.locator('div[id="2"] h5[class="card-title"]').textContent();
    console.log(title);
    await page.locator('div[id="2"] button[class="btn btn-dark m-1"]').click(); // clicking the add to cart button
    await page.click('a[href="/cart"]');//clicking the cart link
    await page.screenshot({ path: 'screenshots/cart-page.png' });
    //checking the exact product title in the cart
    await expect(page.locator('div[class="col-lg-5 col-md-6"] p strong')).toContainText('Mens Casual');
    //goto checkout page   
    await page.click('a[href="/checkout"]');
    await page.screenshot({ path: 'screenshots/chec-kout-page.png' });
    //filling the form
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Carter');
    await page.locator('#email').fill('jhoncarter22@gmail.com');
    await page.locator('#address').fill('123 Main St');
    await page.locator('#address2').fill('New York');
    //selecting the country from dropdown
    await page.locator('#country').selectOption('India');
    //selecting the state from dropdown
    await page.locator('#state').selectOption('Punjab');
    //zip code 
    await page.locator('#zip').fill('123456');
    //filling the card details
    await page.locator('#cc-name').fill('John Carter');// filling the card name
    await page.locator('#cc-number').fill('4111111111111111');// filling the card number
    await page.locator('#cc-expiration').fill('12/25');// filling the card expiration date
    await page.locator('#cc-cvv').fill('123');// filling the card CVV
    //clicking the place order button
    await page.click('button[type="submit"]');
    await page.pause();// Pausing the test to see the result
})

