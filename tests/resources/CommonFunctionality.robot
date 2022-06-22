*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BASE URL}     https://lucky-narwhal-9f4582.netlify.app
${BROWSER}      Chrome

*** Keywords ***
Start TestCase
    Set Selenium Speed    0.2
    Open Browser    ${BASE URL}    ${BROWSER}
    Maximize Browser Window

Click Position Short
    Click Element    //div[text() = 'Шорт']

Finish TestCase
    Close Browser