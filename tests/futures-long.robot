*** Settings ***
Library    SeleniumLibrary
Resource    resources/CommonFunctionality.robot

Test Setup    Start TestCase
Test Teardown    Finish TestCase

*** Test Cases ***
Valid Future Calculate Long
    Input Ticker
    Input Value Positions Info
    Check Field GO
    Check Field Count Position
    Check Field StopLossP
    Check Field PotentialLoss
    Check Field PotentialLossPercent


*** Keywords ***
Input Ticker
    Input Text    id=search_ticker    BR
    Wait Until Element Is Visible    //ul[1]
    Click Element    //li[starts-with(text(), "Фьючерс")][1]

Input Value Positions Info
    Input Text    //label[text()="Сумма депозита"]/preceding-sibling::input    300000
    Input Text    //label[text()="Цена входа"]/preceding-sibling::input    120,30
    Input Text    //label[text()="Количество контрактов"]/preceding-sibling::input    15
    Input Text    //label[text()="Стоп-лосс"]/preceding-sibling::input    119,70

Check Field GO
    Should Not Be Empty    id=go

Check Field Count Position
    ${count}=    Get Value    id=count_positions
    ${go}=    Get Value    id=go
    Should Be True    ${count} == 15*${go}

Check Field StopLossP
    ${stop-loss-p}=    Get Value    id=stop_loss_p
    Should Be True    ${stop-loss-p} == 0.60

Check Field PotentialLoss
    Should Not Be Empty    id=potential_loss

Check Field PotentialLossPercent
    ${percent-deposit}=    Get Value    id=percent_deposit
    ${potential-loss}=    Get Value    id=potential_loss
    ${calc-percent}=    Evaluate    ${potential-loss}/300000*100
    ${convert-calc}=    Convert To Number    ${calc-percent}    2
    Should Be True    ${percent-deposit} == ${convert-calc}
