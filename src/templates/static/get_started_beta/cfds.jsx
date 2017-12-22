import React from 'react';
import { Section, HeaderSecondary, ListStrong, BuySellImage, MtBox, Box, NavButtons } from './common.jsx';
import { List, Table } from '../../_common/components/elements.jsx';

const ten_thousandth = '0.0001';
const thousandth     = '0.001';
const hundredth      = '0.01';
const tenth          = '0.1';
const three_tenth    = '0.3';
const five_tenth     = '0.5';
const one            = '1';
const ten            = '10';
const hundred        = '100';
const two_hundred    = '200';
const five_hundred   = '500';

const two_tenth_percent              = '0.2%';
const twelve_thousandth_percent      = '0.012%';
const twenty_five_thousandth_percent = '0.025%';

const Cfds = () => (
    <div className='static_full get-started-beta'>
        <h1>{it.L('MetaTrader 5')}</h1>
        <div className='gr-row'>
            <div className='gr-3 gr-hide-m sidebar-container'>
                <div className='sidebar'>
                    <List id='sidebar-nav' items={[
                        { id: 'what-cfds-trading',      href: '#what-cfds-trading',      text: it.L('What is CFD trading')},
                        { id: 'how-trade-cfds',         href: '#how-trade-cfds',         text: it.L('How to trade CFDs')},
                        { id: 'margin-policy',          href: '#margin-policy',          text: it.L('Margin policy')},
                        { id: 'contract-specification', href: '#contract-specification', text: it.L('Contract specifications')},
                    ]} />
                </div>
            </div>
            <div className='gr-9 gr-12-m'>
                <Section id='what-cfds-trading' header={it.L('What is CFD trading')}>
                    <p>{it.L('A Contract for Difference (CFD) is a financial derivative that allows you to potentially profit by speculating on the rise or fall of an underlying asset, without actually owning that asset.')}</p>
                    <p>{it.L('The movement of a CFD follows the movement of its underlying asset. This also determines your profit or loss – depending on the position that you have taken.')}</p>
                    <HeaderSecondary header={it.L('Advantages of CFD trading')} />
                    <ul className='checked'>
                        <ListStrong header={it.L('Trade with leverage')}  text={it.L('Trade a larger position than your exisiting capital.')} />
                        <ListStrong header={it.L('Hedge your portfolio')} text={it.L('Offset potential losses to your investment portfolio by hedging with CFDs.')} />
                        <ListStrong header={it.L('Go long and short')}    text={it.L('Trade long and short positions, depending on your preferred strategy.')} />
                    </ul>

                    <HeaderSecondary header={it.L('What you can trade with CFDs')} />
                    <p>{it.L('Contracts for difference (CFDs) allow you to speculate on a number of markets, including indices, shares, and commodities. At Binary.com, we offer popular cash indices as well as proprietary Volatility Indices that simulate market movement.')}</p>
                </Section>
                <Section id='how-trade-cfds' header={it.L('How to trade CFDs')}>
                    <p>{it.L('New to CFD trading? We explain a few basics that all CFD traders need to know before they start trading.')}</p>

                    <HeaderSecondary header={it.L('When to buy and sell')} />
                    <p>{it.L('When you are trading CFDs, you can choose to open a buy position (if you think that the price will rise) or a sell position (if you think that the price will fall).')}</p>
                    <BuySellImage />
                    <p>{it.L('Let\'s use the US 100 index as an example:')}</p>
                    <p>{it.L('If you decide to buy or \'go long\' on the US 100 index, your profit will continue to increase as long as the price of the US 100 index keeps rising. However, if the price falls, the losses you incur will also increase.')}</p>
                    <p>{it.L('The opposite is true if you decide to sell or \'go short\' on the US 100 index. This means that your profit will continue to increase as long as the price of the US 100 index keeps falling. However, if the price rises, the losses you incur will also increase.')}</p>

                    <HeaderSecondary header={it.L('How to calculate your profits and losses')} />
                    <p>{it.L('Let\'s say a US 100 contract is worth USD 1 per point in the underlying asset. If you decide to \'go long\' on the US 100, and the asset price rises by 10 points, that represents a USD 10 profit for you.')}</p>
                    <p>{it.L('However, if the asset price falls by 10 points, that represents a USD 10 loss for you.')}</p>
                    <p>{it.L('To learn more, please read our <a href=\'[_1]\'>contract specifications</a>.', '#contract-specification' )}</p>

                    <HeaderSecondary header={it.L('How to close a position')} />
                    <p>{it.L('When you decide to close an open contract, you only need to take the opposite position in order to close the contract.')}</p>
                    <p>{it.L('For example, if you buy a US 100 contract and it\'s not going as planned, you just need to sell it to cut your losses at the current market price.')}</p>
                </Section>
                <Section id='margin-policy' header={it.L('Margin policy')}>
                    <p>{it.L('Margin allows you to trade on leverage – giving you the same level of market exposure using much less capital.')}</p>
                    <p>{it.L('For example, if you wanted to purchase 100 units of a particular asset trading at USD 50 per unit through a traditional broker, it would cost you USD 5,000 for this transaction.')}</p>
                    <p>{it.L('With leverage, you can purchase 100 units of the same asset at a fraction of the cost.')}</p>

                    <HeaderSecondary header={it.L('How to calculate margin')} />
                    <p>{it.L('You can determine the margin for our CFDs by using the formula below:')}</p>
                    <MtBox text={it.L('For example, if you buy one lot of an underlying asset at a price of USD 20,000 and a margin rate of 0.01, the margin required to purchase that one lot will be calculated as follows:')} />

                    <HeaderSecondary header={it.L('What\'s a margin call and how is it applied')} />
                    <p>{it.L('When your account equity is unable to cover the margin requirement, your account will be placed under margin call. This does not affect your ability to open new positions.')}</p>

                    <HeaderSecondary header={it.L('What\'s a stop out level and how is it applied')} />
                    <p>{it.L('If your account is placed under margin call for an extended period of time, it will reach the stop out level where it is unable to sustain an open position. This will lead to your pending orders being cancelled and your open positions being forcibly closed (also known as "forced liquidation").')}</p>
                    <p>{it.L('When your account hits the forced liquidation level, your orders and positions are forcibly closed in the following sequence:')}</p>
                    <ol>
                        <li>{it.L('We analyse your pending orders')}</li>
                        <li>{it.L('We delete an order with the largest margin reserved')}</li>
                        <li>{it.L('If your margin level is still under the stop out level, your next order will be deleted. However, orders without margin requirements will not be deleted')}</li>
                        <li>{it.L('If your margin level is still under the stop out level, we will close an open position with the largest loss')}</li>
                        <li>{it.L('We will continue to close open positions until your margin level becomes higher than the stop out level')}</li>
                    </ol>
                </Section>
                <Section id='contract-specification' header={it.L('Contract specifications')}>
                    <HeaderSecondary header={it.L('Cash Indices')} />
                    <Table scroll data={{
                        thead: [[
                            { text: it.L('Symbol'),                      className: 'gr-padding-10' },
                            { text: it.L('Description'),                 className: 'gr-padding-10' },
                            { text: it.L('Volume 1.0 (trade size)'),     className: 'gr-padding-10' },
                            { text: it.L('Minimum volume (trade size)'), className: 'gr-padding-10' },
                            { text: it.L('Maximum volume (trade size)'), className: 'gr-padding-10' },
                            { text: it.L('Margin'),                      className: 'gr-padding-10' },
                        ]],
                        tbody: [
                            [{ text: 'AUS_200' }, { text: 'Australia 200'  }, { text: it.L('AUD 1 per point') }, { text: one }, { text: ten          }, { text: two_tenth_percent } ],
                            [{ text: 'DAX_30'  }, { text: 'Germany 30'     }, { text: it.L('EUR 1 per point') }, { text: one }, { text: hundred      }, { text: two_tenth_percent } ],
                            [{ text: 'ESP_35'  }, { text: 'Spain 35'       }, { text: it.L('EUR 1 per point') }, { text: one }, { text: hundred      }, { text: two_tenth_percent } ],
                            [{ text: 'EUR_50'  }, { text: 'Euro 50'        }, { text: it.L('EUR 1 per point') }, { text: one }, { text: ten          }, { text: two_tenth_percent } ],
                            [{ text: 'FRA_40'  }, { text: 'France 40'      }, { text: it.L('EUR 1 per point') }, { text: one }, { text: five_hundred }, { text: two_tenth_percent } ],
                            [{ text: 'GBR_100' }, { text: 'UK 100'         }, { text: it.L('GBP 1 per point') }, { text: one }, { text: five_hundred }, { text: two_tenth_percent } ],
                            [{ text: 'JP_225'  }, { text: 'Japan 225'      }, { text: it.L('JPY 1 per point') }, { text: ten }, { text: hundred      }, { text: two_tenth_percent } ],
                            [{ text: 'NED_25'  }, { text: 'Netherlands 25' }, { text: it.L('EUR 1 per point') }, { text: one }, { text: hundred      }, { text: two_tenth_percent } ],
                            [{ text: 'US_30'   }, { text: 'US 30'          }, { text: it.L('USD 1 per point') }, { text: one }, { text: two_hundred  }, { text: two_tenth_percent } ],
                            [{ text: 'US_100'  }, { text: 'US 100'         }, { text: it.L('USD 1 per point') }, { text: one }, { text: two_hundred  }, { text: two_tenth_percent } ],
                            [{ text: 'US_500'  }, { text: 'US 500'         }, { text: it.L('USD 1 per point') }, { text: one }, { text: two_hundred  }, { text: two_tenth_percent } ],
                        ],
                    }} />

                    <HeaderSecondary header={it.L('Volatility Indices')} />
                    <Table scroll data={{
                        thead: [[
                            { text: it.L('Symbol'),                      className: 'gr-padding-10' },
                            { text: it.L('Volume 1.0 (trade size)'),     className: 'gr-padding-10' },
                            { text: it.L('Minimum volume (trade size)'), className: 'gr-padding-10' },
                            { text: it.L('Maximum volume (trade size)'), className: 'gr-padding-10' },
                            { text: it.L('Minimum volume increment'),    className: 'gr-padding-10' },
                            { text: it.L('Pip size'),                    className: 'gr-padding-10' },
                            { text: it.L('Minimum spread'),              className: 'gr-padding-10' },
                            { text: it.L('Margin'),                      className: 'gr-padding-10' },
                        ]],
                        tbody: [
                            [{ text: 'Volatility 10 Index'     }, { text: it.L('USD 1 per point') }, { text: tenth       }, { text: hundred }, { text: hundredth }, { text: thousandth     }, { text: twenty_five_thousandth_percent }, { text: two_tenth_percent } ],
                            [{ text: 'Volatility 25 Index'     }, { text: it.L('USD 1 per point') }, { text: five_tenth  }, { text: hundred }, { text: hundredth }, { text: thousandth     }, { text: '0.006%'                       }, { text: two_tenth_percent } ],
                            [{ text: 'Volatility 50 Index'     }, { text: it.L('USD 1 per point') }, { text: five_tenth  }, { text: hundred }, { text: hundredth }, { text: ten_thousandth }, { text: twelve_thousandth_percent      }, { text: two_tenth_percent } ],
                            [{ text: 'Volatility 75 Index'     }, { text: it.L('USD 1 per point') }, { text: hundredth   }, { text: hundred }, { text: hundredth }, { text: ten_thousandth }, { text: '0.018%'                       }, { text: two_tenth_percent } ],
                            [{ text: 'Volatility 100 Index'    }, { text: it.L('USD 1 per point') }, { text: hundredth   }, { text: hundred }, { text: hundredth }, { text: hundredth      }, { text: twenty_five_thousandth_percent }, { text: two_tenth_percent } ],
                            [{ text: 'HF Volatility 10 Index'  }, { text: it.L('USD 1 per point') }, { text: tenth       }, { text: hundred }, { text: hundredth }, { text: thousandth     }, { text: '0.005%'                       }, { text: two_tenth_percent } ],
                            [{ text: 'HF Volatility 50 Index'  }, { text: it.L('USD 1 per point') }, { text: five_tenth  }, { text: hundred }, { text: hundredth }, { text: thousandth     }, { text: twelve_thousandth_percent      }, { text: two_tenth_percent } ],
                            [{ text: 'HF Volatility 100 Index' }, { text: it.L('USD 1 per point') }, { text: three_tenth }, { text: hundred }, { text: hundredth }, { text: thousandth     }, { text: twelve_thousandth_percent      }, { text: two_tenth_percent } ],
                        ],
                    }} />

                    <HeaderSecondary header={it.L('How to read the table above')} />
                    <p>{it.L('A Contract for Difference (CFD) is a financial derivative that allows you to profit by speculating on the rise or fall of an underlying asset. Your profit and loss is calculated through the difference in the buy and sell prices of the underlying asset.')}</p>
                    <p>{it.L('For example, a CFD on Binary.com\'s US 30 index offers a USD 1 per point contract. If you buy a Volume 1.0 contract for the US 30 with a current ask price of USD 20,000 and later sell it at a bid price of USD 20,010, your net profit will be calculated as follows:')}</p>

                    <Box text={`(${it.L('Sell Price')} – ${it.L('Buy Price')}) x ${it.L('Volume')} x ${it.L('Price Per Point')} = ${it.L('Profit')}`}
                        text_two={`(20010 – 20000) x 1 x 1 = ${it.L('USD')} 10`} />

                    <p>{it.L('Each time you open a position on an index symbol, you can start with a minimum volume transaction as indicated in the table above.')}</p>
                    <p>{it.L('Margin indicates how much investment you can control based on your initial capital. For example, a 1% margin will allow you to control up to USD 100,000 using only USD 1,000 of your own money as deposit.')}</p>
                    <p>{it.L('To learn more, read our Margin Policy that further explains our margin requirements.')}</p>

                    <HeaderSecondary header={it.L('Important notes on our swap rates (overnight funding)')} />
                    <p>{it.L('If you keep any positions open overnight, an interest adjustment will be made to your trading account as indication of the cost required to keep your position open.')}</p>
                    <p>{it.L('This interest adjustment (or swap rate) is based on market rates, on top of a 2% fee.')}</p>
                    <p>{it.L('The interest adjustment is calculated in points, meaning we will convert the relevant market rates to points in the base instrument.')}</p>
                    <p>{it.L('Please take note that our swap rate also depends on the time and days you hold your positions open:')}</p>
                    <ul className='bullet'>
                        <li>{it.L('You will be subjected to swap rates if you keep a position open past the market close.')}</li>
                        <li>{it.L('Positions that are still open on Friday at market close will be charged three times the swap rate to account for weekends, a standard practice for all brokers.')}</li>
                        <li>{it.L('Our swap rate may also be adjusted to take holidays into account.')}</li>
                    </ul>
                </Section>
                <NavButtons parent='mt5' section='cfds' />
            </div>
        </div>
    </div>
);

export default Cfds;
