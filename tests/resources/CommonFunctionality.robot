*** Settings ***
Library     SeleniumLibrary
Variables    Locators.py

*** Variables ***
${env}    dev
&{url}    dev=http://localhost:3000   prod=https://lucky-narwhal-9f4582.netlify.app
${browser}    Chrome

*** Keywords ***
Start TestCase
    Set Selenium Speed    0.2
    Open Browser    ${url.${env}}    ${browser}
    Maximize Browser Window

Select Markets
    [Arguments]    ${market}
    Click Element    ${BUTTON_SELECT_MARKET}
    Click Element    ${market}

Input Ticker
    [Arguments]    ${text_search_ticker}
    Input Text    ${FIELD_SEARCH}    ${text_search_ticker}
    Wait Until Element Is Visible    ${MENU_TICKERS}
    Click Element    ${ONE_TICKER}

Click Position
    [Arguments]    ${positions}
    Click Element    ${positions}

Entering Information Into Editable Fields
    [Arguments]    ${value_deposit}    ${value_price_open}    ${value_count_contract}    ${value_price_stop_loss}
    Input Text    ${DEPOSIT}    ${value_deposit}
    Input Text    ${PRICE_OPEN}    ${value_price_open} 
    Input Text    ${COUNT_CONTRACTS}    ${value_count_contract}
    Input Text    ${PRICE_STOP_LOSS}    ${value_price_stop_loss}

Field Check Should Not Be Empty
    [Arguments]    ${field}
    Should Not Be Empty    ${field}

Check Field Percent Deposit
    [Arguments]    ${value_deposit}    ${potential-loss}    ${percent-deposit}
    ${calc-percent}=    Evaluate    ${potential-loss}/${value_deposit}*100
    ${convert-calc}=    Convert To Number    ${calc-percent}    2
    Should Be True    ${percent-deposit} == ${convert-calc}

Finish TestCase
    Close Browser