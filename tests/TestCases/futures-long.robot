*** Settings ***
Library    SeleniumLibrary
Resource    ../resources/CommonFunctionality.robot
Variables    ../resources/Locators.py
Variables    ../resources/TestData.py

Test Setup    Start TestCase
Test Teardown    Finish TestCase

*** Test Cases ***
Valid Future Calculate Long
    ${secid}=    Input Ticker    BR
    Set Local Variable    ${list_info}    ${futures_long('${secid}')}
    Entering Information Into Editable Fields    ${VALUE_DEPOSIT}    ${VALUE_PRICE_OPEN_LONG}    ${VALUE_COUNT_CONTRACTS}   ${VALUE_PRICE_STOP_LOSS_LONG}
    Check Go Or Lot   ${INITIALMARGIN}    ${list_info['go']}
    Check Uneditable Fields    ${list_info}