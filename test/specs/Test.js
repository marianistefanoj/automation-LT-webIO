describe("Login, Add Item to Cart, Checkout, Complete", () => {

    let itemListFromInventoryToCart;

    it("LOGIN: Logs into application to continue to next steps", async () => {
        
        //open url
        await browser.url('https://www.saucedemo.com');

        //assert title
        await expect(browser).toHaveTitle('Swag Labs');

        //name
        const username = await $("#user-name");
        username.setValue("standard_user");

        //password
        //await $('#user-name').waitForDisplayed(1000);
        const password = await $("#password");
        password.setValue("secret_sauce");
        
        //assert if the textfield has an attribute called value with the same value
        await expect(username).toHaveAttr('value', "standard_user");
        
        //click at login button
        const buttonLogin = $('#login-button');
        await expect(buttonLogin).toHaveAttr('value', 'Login');
        await buttonLogin.click();

        //assert browser url to validate if logged at application
        await expect(browser).toHaveUrlContaining('/inventory.html');

    });

   it('PRODUCTS: Assert if is at Products page and Verify all the items at the inventory', async () => {

      //get text from page header and assert if the user is at the PRODUCTS page
      const titlePage = await $(".header_secondary_container .title");
      const titlePageString = await titlePage.getText();
      
      //assert that user is at the checkout your information
      await expect(titlePageString).toEqual('PRODUCTS'); 
      
      //get the amount of elements from inventory
      const items = await $$(".inventory_item .inventory_item_label a")
      
      //assert if it has 6 elements at inventory
      await expect(items).toBeElementsArrayOfSize(6);
      /*for(const listItem of items){
          console.log(await listItem.getText());
      }*/

    });

   it('PRODUCTS: compare and add the items from inventory to the cart based on a "search text" ', async () => {
       
       //get text from page header and assert if the user is at the PRODUCTS page
       const titlePage = await $(".header_secondary_container .title");
       const titlePageString = await titlePage.getText();

       //assert that user is at the checkout your information
       await expect(titlePageString).toEqual('PRODUCTS'); 

       //all items from inventory
       const itemsFromInventory = await $$(".inventory_item .inventory_item_label a") 
       //list of elements found with the partial name
       const listFromInventoryAdded = []; 
       // partial name of the item that i'm looking for
       const searchText = "Backpack"; 
       
       
       count = 0; //count for the position counter
       for(const listItem of itemsFromInventory){                       //for loop to verify if any item from inventory has a substring as searched
           const itemFromList = await listItem.getText();  //converting the listItem (from array) to a variable
           if(itemFromList.includes(searchText)) {         //use an if to verify if from itemFromList variable has the searchText (substr)
               listFromInventoryAdded[count] = itemFromList;            //if yes add the itemFromList to the new 'array'
               //await $("//*[text()='"+ itemFromList +"']/../../..//button").click(); //click at the add to cart button from element that has been found by partial text
              
               const button = await $("//*[text()='"+ itemFromList +"']/../../..//button");
               button.click()
               const buttonText = await button.getText();

               //assert that the button has been cicked and the text from the button is remove, that means that the item has been added
               await expect(buttonText).toEqual('REMOVE'); 
           }
           itemListFromInventoryToCart = listFromInventoryAdded;
       }

   });

   it('YOUR CART: click at cart button, assert the items at the cart and go to checkout', async () => {
       
       //click at the cart button
       await $("#shopping_cart_container a").click();

       //get text from page header and assert if the user is at the YOUR CART page
       const titlePage = await $(".header_secondary_container .title");
       const titlePageString = await titlePage.getText();

       //assert that user is at the checkout your information
       await expect(titlePageString).toEqual('YOUR CART'); 

       //get items from cart
       const itemsFromCartPage = await $$(".inventory_item_name");
       let listFromCartPage = [];

       //add items to the list
       count = 0
       for(const listCart of itemsFromCartPage){
           listFromCartPage[count] = await listCart.getText()
       }

       //assert that the list items has the same items as cartItems (from cart page)
       await expect(listFromCartPage).toEqual(itemListFromInventoryToCart);

       //click to checkout page
       await $("#checkout").click();

   });

   it('CHECKOUT: YOUR INFORMATION: assert page title, fill the informations and go to the end of the checkout', async () => {
       
       //get text from page header and assert if the user is at the CHECKOUT: YOUR INFORMATION page
       const titlePage = await $(".header_secondary_container .title");
       const titlePageString = await titlePage.getText();

       //assert that user is at the checkout your information
       await expect(titlePageString).toEqual("CHECKOUT: YOUR INFORMATION");

       //fill data in the fields
       await $("#first-name").setValue("Lean");
       await $("#last-name").setValue("Tech");
       await $("#postal-code").setValue("050022");
       
       //click at continue button
       await $("#continue").click();
       
   });
      
   it('CHECKOUT: OVERVIEW: assert page title, validate items, finish the order', async () => {
       
       //get text from page header and assert if the user is at the CHECKOUT: OVERVIEW page
       const titlePage = await $(".header_secondary_container .title");
       const titlePageString = await titlePage.getText();
       //console.log(titlePageString);

       //assert that user is at the checkout your information
       await expect(titlePageString).toEqual("CHECKOUT: OVERVIEW");

       //get items from cart at checkout
       const itemsFromCartCheckout = await $$(".inventory_item_name");
       let listFromCartPage = [];

       //add items to the list
       count = 0
       for(const listCart of itemsFromCartCheckout){
           listFromCartPage[count] = await listCart.getText()
       }

       //assert that the list items has the same items as cartItems (from cart page)
       await expect(listFromCartPage).toEqual(itemListFromInventoryToCart);
       
       //click at finish button
       await $("#finish").click();
       
   });

   it('CHECKOUT: COMPLETE!: assert page title, success message and go back home', async () => {
       
       //get text from page header and assert if the user is at the CHECKOUT: OVERVIEW page
       const titlePage = await $(".header_secondary_container .title");
       const titlePageString = await titlePage.getText();
       
       //assert that user is at the checkout your information
       await expect(titlePageString).toEqual('CHECKOUT: COMPLETE!'); 

       //get text from page header and assert if the user is at the CHECKOUT: OVERVIEW page
       const completeMessage = await $(".complete-header");
       const completeMessageString = await completeMessage.getText();
       console.log(completeMessageString);

       //assert if the message of 'thank you for your order' has been found
       await expect(completeMessageString).toEqual('THANK YOU FOR YOUR ORDER');

       //click at finish button
       const backHomeButton =  $("#back-to-products");
       await expect(backHomeButton).toExist();
       await backHomeButton.click();
       
   });
    

});