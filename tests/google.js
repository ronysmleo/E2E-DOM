module.exports ={
    '@tags': ['google'],
    'Google Advance Search'(browser){

        const name = 'Elon Musk';
        const inputSelector = 'input[name="as_q"]';
        const languageDropdown = '#lr_button';
        const selectLanguage = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdown ='#as_qdr_button';
        const selectLastUpdate = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        const resultPageQuerySelector =`#searchform input[name="q"][value= "${name}"]`;
        const resultPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const resultPageMonthSelector =  '[aria-label="Past month"]';

        browser
        .url('https://www.google.com/advanced_search')
        .setValue(inputSelector, name)
        .click(languageDropdown)
        .click(selectLanguage)
        .click(lastUpdateDropdown) 
        .click(selectLastUpdate)
        .click(submitButtonSelector)
        .assert.urlContains('as_q=Elon+Musk', 'Params: Query for Elon Musk')
        .assert.urlContains('lr=lang_it', 'Params: Query for language')
        .assert.urlContains('as_qdr=m', 'Params: Query for last month update')
        .assert.visible(resultPageQuerySelector, 'UI: Elon Musk is set in the Query')
        .assert.containsText(resultPageLanguageSelector, 'Search Italian pages','UI: Language set Italian')
        .assert.containsText(resultPageMonthSelector, 'Past month','UI: Month is set in the Query')


        .saveScreenshot('tests_output/google.png')
        

    }
}