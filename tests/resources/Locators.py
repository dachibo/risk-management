### Select market, Stocks or Futures
BUTTON_SELECT_MARKET="id:dropdown-button"
STOCKS="xpath://li[text() = 'Акции']"
FUTURES="xpath://li[text() = 'Фьючерсы']"

### Search ticker
FIELD_SEARCH="id:search_ticker"
MENU_TICKERS="//input[@id='search_ticker']/following-sibling::ul"
ONE_TICKER="//input[@id='search_ticker']/following-sibling::ul/li[1]"

### Select positions, Long or Short
LONG="//div[text() = 'Лонг']"
SHORT="//div[text() = 'Шорт']"

### Editable fields
DEPOSIT="//label[text()='Сумма депозита']/preceding-sibling::input"
PRICE_OPEN="//label[text()='Цена входа']/preceding-sibling::input"
COUNT_CONTRACTS="//label[text()='Количество контрактов']/preceding-sibling::input"
PRICE_STOP_LOSS="//label[text()='Стоп-лосс']/preceding-sibling::input"

### Uneditable fields
INITIALMARGIN="id:go"
LOTSIZE="id:lot_size"
POINT_SIZE="id:count_positions"
STOP_LOSS_P="id:stop_loss_p"
POSITION_LOSS="id:potential_loss"
POSITION_LOSS_IN_PERCENT="id:percent_deposit"