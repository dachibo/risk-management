*** Settings ***
Library     SeleniumLibrary
Variables    Locators.py

*** Variables ***
${env}    prod
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
    ${secid}=    Get Element Attribute   ${ONE_TICKER}    id
    Click Element    ${ONE_TICKER}
    Return From Keyword    ${secid}

Click Position
    [Arguments]    ${positions}
    Click Element    ${positions}

Entering Information Into Editable Fields
    [Arguments]    ${value_deposit}    ${value_price_open}    ${value_count_contract}    ${value_price_stop_loss}
    Input Text    ${DEPOSIT}    ${value_deposit}
    Input Text    ${PRICE_OPEN}    ${value_price_open} 
    Input Text    ${COUNT_CONTRACTS}    ${value_count_contract}
    Input Text    ${PRICE_STOP_LOSS}    ${value_price_stop_loss}

Check Go Or Lot
    [Arguments]    ${field}   ${list_field_value}
    ${value_field}=    Get Value    ${field}
    Should Be True    ${value_field} == ${list_field_value}

Check Uneditable Fields
    [Arguments]    ${list_info}
    ${count-positions}=    Get Value    ${POINT_SIZE}
    ${stop-loss-p}=    Get Value    ${STOP_LOSS_P}
    ${potential-loss}=    Get Value    ${POSITION_LOSS}
    ${percent-deposit}=    Get Value    ${POSITION_LOSS_IN_PERCENT}

    Should Be True    ${count-positions} == ${list_info['count_positions']}
    Should Be True    ${stop-loss-p} == ${list_info['stop_loss_p']}
    Should Be True    ${potential-loss} == ${list_info['potential_loss']}
    Should Be True    ${percent-deposit} == ${list_info['percent_deposit']}

Finish TestCase
    Close Browser