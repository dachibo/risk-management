*** Settings ***
Library    SeleniumLibrary
Resource    ../resources/CommonFunctionality.robot
Variables    ../resources/Locators.py
Variables    ../resources/TestData.py

Test Setup    Start TestCase
Test Teardown    Finish TestCase

*** Test Cases ***
Valid Future Calculate Short
    ${secid}=    Input Ticker    BR
    Set Local Variable    ${list_info}    ${futures_long('${secid}')}
    Click Position    ${SHORT}
    Entering Information Into Editable Fields    ${VALUE_DEPOSIT}    ${VALUE_PRICE_OPEN_SHORT}    ${VALUE_COUNT_CONTRACTS}   ${VALUE_PRICE_STOP_LOSS_SHORT}
    Check Go Or Lot   ${INITIALMARGIN}    ${list_info['go']}
    Check Uneditable Fields    ${list_info}
