const {getTokenBalance} = require('../helper/solana')

async function tvl() {
    const [usdcAmount, usdtAmount, solAmount, paiAmount, merAmount, btcAmount, srmAmount, mSolAmount, pSolAmount, saberAmount, saberUsdtUsdcLpAmount, ustAmount, ethAmount, portAmount, stSolAmount] = await Promise.all([
        getTokenBalance("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("So11111111111111111111111111111111111111112", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("2poo1w1DL6yd2WNTCnNTzDqkC6MBXq7axo77P16yrBuf", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
        getTokenBalance("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj", "8x2uay8UgrLiX8AAYyF6AkK9z91nNtN6aLwfqPkf6TAQ"),
    ])

    const [usdhAmountHubble, mSolAmountHubble, stSolAmountHubble, btcAmountHubble, solAmountHubble] = await Promise.all([
        getTokenBalance("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX", "GU1nCjN7mcLiSX1dtBw2t9agYCw3ybXfu1me41Q2tGT3"),
        getTokenBalance("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "GU1nCjN7mcLiSX1dtBw2t9agYCw3ybXfu1me41Q2tGT3"),
        getTokenBalance("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS", "GU1nCjN7mcLiSX1dtBw2t9agYCw3ybXfu1me41Q2tGT3"),
        getTokenBalance("9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "GU1nCjN7mcLiSX1dtBw2t9agYCw3ybXfu1me41Q2tGT3"),
        getTokenBalance("So11111111111111111111111111111111111111112", "GU1nCjN7mcLiSX1dtBw2t9agYCw3ybXfu1me41Q2tGT3"),
    ])
    const [uxdAmountUxd, usdcAmountUxd, usdtAmountUxd, solAmountUxd, mSolAmountUxd] = await Promise.all([
        getTokenBalance("7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT", "Hy6gCkJyMmWMaoxLyzELRReLzdBdZ1YEjNGjQzF9LDPa"),
        getTokenBalance("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "Hy6gCkJyMmWMaoxLyzELRReLzdBdZ1YEjNGjQzF9LDPa"),
        getTokenBalance("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "Hy6gCkJyMmWMaoxLyzELRReLzdBdZ1YEjNGjQzF9LDPa"),
        getTokenBalance("So11111111111111111111111111111111111111112", "Hy6gCkJyMmWMaoxLyzELRReLzdBdZ1YEjNGjQzF9LDPa"),
        getTokenBalance("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "Hy6gCkJyMmWMaoxLyzELRReLzdBdZ1YEjNGjQzF9LDPa"),
    ])

    const [ushAmountHedge, btcAmountHedge, solAmountHedge, mSolAmountHedge] = await Promise.all([
        getTokenBalance("9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6", "4bf5HQQZ9qtGGCuxYNnhiTrKpTMTX6HSoLy5a7wUjCEb"),
        getTokenBalance("9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E", "4bf5HQQZ9qtGGCuxYNnhiTrKpTMTX6HSoLy5a7wUjCEb"),
        getTokenBalance("So11111111111111111111111111111111111111112", "4bf5HQQZ9qtGGCuxYNnhiTrKpTMTX6HSoLy5a7wUjCEb"),
        getTokenBalance("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", "4bf5HQQZ9qtGGCuxYNnhiTrKpTMTX6HSoLy5a7wUjCEb"),
    ])

    return {
        'usd-coin': usdcAmount + saberUsdtUsdcLpAmount + usdcAmountUxd,
        'terrausd': ustAmount,
        'tether': usdtAmount + usdtAmountUxd,
        'solana': solAmount + pSolAmount + solAmountHubble + solAmountUxd + solAmountHedge,
        'msol': mSolAmount + mSolAmountHubble + mSolAmountUxd + mSolAmountHedge,
        'usdp': paiAmount,
        'mercurial': merAmount,
        'bitcoin': btcAmount + btcAmountHubble + btcAmountHedge,
        'serum': srmAmount,
        'saber': saberAmount,
        'ethereum': ethAmount,
        'port-finance': portAmount,
        'usdh': usdhAmountHubble,
        'lido-staked-sol': stSolAmount + stSolAmountHubble,
        'uxd-stablecoin': uxdAmountUxd,
        'hedge-usd': ushAmountHedge
    }
}

module.exports = {
    timetravel: false,
    tvl
};
