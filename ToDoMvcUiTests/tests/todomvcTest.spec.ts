import { test, expect } from '@playwright/test';

const TODO_URL = 'https://todomvc.com/examples/react/dist/';

test('Verify TodoMVC functionality', async ({ page }) => {

    const todayDate = new Date().toLocaleDateString('en-CA'); 
    const tomorrowDate = new Date(Date.now() + 86400000).toLocaleDateString('en-CA'); 

    await page.goto(TODO_URL);
    expect(page.url()).toBe(TODO_URL);
    await page.screenshot({ path: 'screenshots/1_initial_page.png' }); 

 
    const todo1Text = `TODO 1 - ${todayDate}`; 
    await page.fill('.new-todo', todo1Text);
    await page.keyboard.press('Enter');
    await page.screenshot({ path: 'screenshots/2_todo1_added.png' }); 

    
    const todo2Text = `TODO 2 - ${tomorrowDate}`; 
    await page.fill('.new-todo', todo2Text);
    await page.keyboard.press('Enter');
    await page.screenshot({ path: 'screenshots/3_todo2_added.png' }); 


    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveText([todo1Text, todo2Text]);
    
    const todo1Checkbox = page.locator('.todo-list li').filter({ hasText: todo1Text }).locator('.toggle');
    await todo1Checkbox.check();
    await page.screenshot({ path: 'screenshots/4_todo1_completed.png' }); 


    const todo1Item = page.locator('.todo-list li').filter({ hasText: todo1Text });
    await expect(todo1Item).toHaveClass(/completed/);

   
    const todo2Item = page.locator('.todo-list li').filter({ hasText: todo2Text });
    await todo2Item.hover(); 
    const todo2DeleteButton = todo2Item.locator('.destroy');
    await todo2DeleteButton.click();
    await page.screenshot({ path: 'screenshots/5_todo2_deleted.png' }); 

    await expect(todoItems).not.toHaveText(todo2Text);

});