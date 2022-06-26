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

def get_stock_ticker(secid):
    url_ticker = 'https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities/{}.json'
    response = requests.request('GET', url_ticker.format(secid))
    data = response.json()['securities']['data']
    return data[0][4]

def futures_long(secid):
    initialmargin, stepprice, minstep = get_future_ticker(secid)
    sizeposition = round((initialmargin * VALUE_COUNT_CONTRACTS), 2)
    stoplosspoint = round((VALUE_PRICE_OPEN_LONG - VALUE_PRICE_STOP_LOSS_LONG), 2)
    potentialloss = round((stoplosspoint / minstep * stepprice * VALUE_COUNT_CONTRACTS), 2)
    potentiallosspercent = round((potentialloss / VALUE_DEPOSIT * 100), 2)
    return {
        'go': initialmargin,
        'count_positions': sizeposition,
        'stop_loss_p': stoplosspoint,
        'potential_loss': potentialloss,
        'percent_deposit': potentiallosspercent
    }

def futures_short(secid):
    initialmargin, stepprice, minstep = get_future_ticker(secid)
    sizeposition = round((initialmargin * VALUE_COUNT_CONTRACTS), 2)
    stoplosspoint = round((VALUE_PRICE_STOP_LOSS_SHORT - VALUE_PRICE_OPEN_SHORT), 2)
    potentialloss = round((stoplosspoint / minstep * stepprice * VALUE_COUNT_CONTRACTS), 2)
    potentiallosspercent = round((potentialloss / VALUE_DEPOSIT * 100), 2)
    return {
        'go': initialmargin,
        'count_positions': sizeposition,
        'stop_loss_p': stoplosspoint,
        'potential_loss': potentialloss,
        'percent_deposit': potentiallosspercent
    }

def stocks_long(secid):
    lot = get_stock_ticker(secid)
    sizeposition = round((lot * VALUE_COUNT_CONTRACTS * VALUE_PRICE_OPEN_LONG), 2)
    stoplosspoint = round((VALUE_PRICE_OPEN_LONG - VALUE_PRICE_STOP_LOSS_LONG), 2)
    potentialloss = round((stoplosspoint * VALUE_COUNT_CONTRACTS * VALUE_PRICE_OPEN_LONG), 2)
    potentiallosspercent = round((potentialloss / VALUE_DEPOSIT * 100), 2)
    return {
        'lot_size': lot,
        'count_positions': sizeposition,
        'stop_loss_p': stoplosspoint,
        'potential_loss': potentialloss,
        'percent_deposit': potentiallosspercent
    }

def stocks_short(secid):
    lot = get_stock_ticker(secid)
    sizeposition = round((lot * VALUE_COUNT_CONTRACTS * VALUE_PRICE_OPEN_SHORT), 2)
    stoplosspoint = round((VALUE_PRICE_STOP_LOSS_SHORT - VALUE_PRICE_OPEN_SHORT), 2)
    potentialloss = round((stoplosspoint * VALUE_COUNT_CONTRACTS * VALUE_PRICE_OPEN_SHORT), 2)
    potentiallosspercent = round((potentialloss / VALUE_DEPOSIT * 100), 2)
    return {
        'lot_size': lot,
        'count_positions': sizeposition,
        'stop_loss_p': stoplosspoint,
        'potential_loss': potentialloss,
        'percent_deposit': potentiallosspercent
    }