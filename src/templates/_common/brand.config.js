const brand_config_data = {
    brand_name: 'Deriv',
    platforms : {
        smarttrader: {
            name: 'SmartTrader',
            icon: 'logo_smart_trader.svg',
        },
        dtrader: {
            name: 'DTrader',
            icon: 'ic-brand-dtrader.svg',
        },
        dbot: {
            name: 'DBot',
            icon: 'ic-brand-dbot.svg',
        },
        dmt5: {
            name     : 'DMT5',
            full_name: 'Deriv MetaTrader 5',
            icon     : 'ic-brand-dmt5.svg',
        },
        dxtrade: {
            name: 'Deriv X',
            icon: 'ic-brand-dxtrade.svg',
        },
        bbot: {
            name: 'Binary Bot',
            icon: 'ic-brand-binarybot.svg',
        },
    },
};

const getBrandName = () => brand_config_data.brand_name;
const getPlatformSettings = platform_key => brand_config_data.platforms[platform_key];

module.exports = {
    getBrandName,
    getPlatformSettings,
};
