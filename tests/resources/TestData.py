import  requests

VALUE_DEPOSIT = 300000
VALUE_PRICE_OPEN_LONG = 120.3
VALUE_PRICE_STOP_LOSS_LONG = 119.7
VALUE_PRICE_OPEN_SHORT= 119.7
VALUE_PRICE_STOP_LOSS_SHORT = 120.3
VALUE_COUNT_CONTRACTS = 15



def get_future_ticker(secid):
    url_ticker = 'https://iss.moex.com/iss/engines/futures/markets/forts/securities/{}.json'
    response = requests.request('GET', url_ticker.format(secid))
    data = response.json()['securities']['data']
    return data[0][14], data[0][17], data[0][6]

def return_future_info(secid, _deposit, _count_contracts, _price_open, _price_stop):
    initialmargin, stepprice, minstep = get_future_ticker(secid)
    sizeposition = round((initialmargin * _count_contracts), 2)
    if _price_open > _price_stop:
        stoplosspoint = round((_price_open - _price_stop), 2)
    else:
        stoplosspoint = round((_price_stop - _price_open), 2)
    potentialloss = round((stoplosspoint / minstep * stepprice * _count_contracts), 2)
    potentiallosspercent = round((potentialloss / _deposit * 100), 2)
    return {
        'go': initialmargin,
        'count_positions': sizeposition,
        'stop_loss_p': stoplosspoint,
        'potential_loss': potentialloss,
        'percent_deposit': potentiallosspercent
    }

def get_stock_ticker(secid):
    url_ticker = 'https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities/{}.json'
    response = requests.request('GET', url_ticker.format(secid))
    data = response.json()['securities']['data']
    return data[0][4]

def return_stock_info(secid, _deposit, _count_contracts, _price_open, _price_stop):
    lot = get_stock_ticker(secid)
    sizeposition = round((lot * _count_contracts * _price_open), 2)
    if _price_open > _price_stop:
        stoplosspoint = round((_price_open - _price_stop), 2)
    else:
        stoplosspoint = round((_price_stop - _price_open), 2)
    potentialloss = round((stoplosspoint * _count_contracts * _price_open), 2)
    potentiallosspercent = round((potentialloss / _deposit * 100), 2)
    return {
        'lot_size': lot,
        'count_positions': sizeposition,
        'stop_loss_p': stoplosspoint,
        'potential_loss': potentialloss,
        'percent_deposit': potentiallosspercent
    }

def futures_long(secid):
    return return_future_info(secid, VALUE_DEPOSIT, VALUE_COUNT_CONTRACTS, VALUE_PRICE_OPEN_LONG, VALUE_PRICE_STOP_LOSS_LONG)

def futures_short(secid):
    return return_future_info(secid, VALUE_DEPOSIT, VALUE_COUNT_CONTRACTS, VALUE_PRICE_OPEN_SHORT, VALUE_PRICE_STOP_LOSS_SHORT)

def stocks_long(secid):
    return return_stock_info(secid, VALUE_DEPOSIT, VALUE_COUNT_CONTRACTS, VALUE_PRICE_OPEN_LONG, VALUE_PRICE_STOP_LOSS_LONG)

def stocks_short(secid):
    return return_stock_info(secid, VALUE_DEPOSIT, VALUE_COUNT_CONTRACTS, VALUE_PRICE_OPEN_SHORT, VALUE_PRICE_STOP_LOSS_SHORT)
