*** Settings ***
Library    SeleniumLibrary
Resource    ../resources/CommonFunctionality.robot
Variables    ../resources/Locators.py
Variables    ../resources/TestData.py

Test Setup    Start TestCase
Test Teardown    Finish TestCase

*** Test Cases ***
Valid Stock Calculate Long
    Select Markets    ${STOCKS}
    ${secid}=    Input Ticker    Сбербанк
    Set Local Variable    ${list_info}    ${stocks_long('${secid}')}
    Entering Information Into Editable Fields    ${VALUE_DEPOSIT}    ${VALUE_PRICE_OPEN_LONG}    ${VALUE_COUNT_CONTRACTS}   ${VALUE_PRICE_STOP_LOSS_LONG}
    Check Go Or Lot   ${LOTSIZE}    ${list_info['lot_size']}     
    Check Uneditable Fields    ${list_info}
