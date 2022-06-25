*** Settings ***
Library    SeleniumLibrary
Resource    resources/CommonFunctionality.robot
Variables    resources/Locators.py

Test Setup    Start TestCase
Test Teardown    Finish TestCase

*** Test Cases ***
Valid Future Calculate Long
    Input Ticker    BR
    Entering Information Into Editable Fields    300000    120,30    15   119,70
    Field Check Should Not Be Empty    ${INITIALMARGIN}
    Check Uneditable Fields


*** Keywords ***
Check Uneditable Fields
    ${go}=    Get Value    ${INITIALMARGIN}
    ${count-positions}=    Get Value    ${POINT_SIZE}
    ${stop-loss-p}=    Get Value    ${STOP_LOSS_P}
    ${potential-loss}=    Get Value    ${POSITION_LOSS}
    ${percent-deposit}=    Get Value    ${POSITION_LOSS_IN_PERCENT}
    
    Should Be True    ${count-positions} == 15*${go}
    Should Be True    ${stop-loss-p} == 120,30 - 119,70
    Should Not Be Empty    ${POSITION_LOSS}
    Check Field Percent Deposit    300000    ${potential-loss}    ${percent-deposit}