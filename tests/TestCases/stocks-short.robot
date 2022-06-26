*** Settings ***
Library    SeleniumLibrary
Resource    ../resources/CommonFunctionality.robot
Variables    ../resources/Locators.py
Variables    ../resources/TestData.py

Test Setup    Start TestCase
Test Teardown    Finish TestCase

*** Test Cases ***
Valid Stock Calculate Short
    Select Markets    ${STOCKS}
    ${secid}=    Input Ticker    Сбербанк
    Set Local Variable    ${list_info}    ${stocks_short('${secid}')}
    Click Position    ${SHORT}
    Entering Information Into Editable Fields    ${VALUE_DEPOSIT}    ${VALUE_PRICE_OPEN_SHORT}    ${VALUE_COUNT_CONTRACTS}   ${VALUE_PRICE_STOP_LOSS_SHORT}
    Check Go Or Lot   ${LOTSIZE}    ${list_info['lot_size']}     
    Check Uneditable Fields    ${list_info}
