// CONFIGURE HERE THE VARIABLES THAT WILL BE CHANGED BEFORE THE PRESALE

//----------------------------------------------------------------------------------------------------------------------------------------------

// BGSP ADDRESSES

const laboBusdAddr = '0xB830Cc1bb2CdF44a6eb6898e8119455B87dA11FE'
const laboBnbAddr = '0x66bffcac0782200d6276142768f79600a458bb04'
const bgspBnbAddr = '0x66bffcac0782200d6276142768f79600a458bb04'
const laboBusdAddrV2 = '0x9F7d34d03B0b56263705e1253EE83BF434509D6C'
const laboBnbAddrV2 = '0x66bffcac0782200d6276142768f79600a458bb04'
const bgspBnbAddrV2 = '0x66bffcac0782200d6276142768f79600a458bb04'
const laboAddr = '0xe9f861b22cd5240494ecc14afea02659ec59864f'
const bgspAddr = '0xe9f861b22cd5240494ecc14afea02659ec59864f'
const masterChef = '0x65FE214382fD9e0d6cF054EeD65C150C88ed6834'

// LABO RELATED PIDS

const pidLaboBusd = 20
const pidbgspBnb = 1
const pidbgsp = 0

// OTHER PIDS THAT ARE REFERENCED THROUGHOUT THE CODE

const pidBnbBusd = 0

// SET countBack TO TRUE TO COUNT BACK AS FAR AS countLength

const countBack = false
const countLength = 2

// CHANGE LABO FOR THE TOKEN BEIGN TESTED

const xPerBlock = "BGSPPerBlock" // referenced in getMasterChefAddress()
const pendingX = "pendingBGSP"

// SEARCH AND REPLACE THIS STRING IF USING ANY OTHER THAN LABO: await masterChefContract.methods.pendingBGSP in \src\state\pools\fetchPoolsUser.ts

// USE OUR CUSTOM WAY OF FETCHING PRICE

const fetchAutomatic = true;
const fetchPriceCustom = false;

// BitQuery RESPONSE POSITIONS

const busdPosition = 0
const tokenPosition = 1

// IS LOCKED

const unlockWalletButton = false;

// IS FARMS CONFIGURED

const isFullyConfigured = true;
const showFarmInfoModal = true;


//----------------------------------------------------------------------------------------------------------------------------------------------

// EDIT ABOVE NOT HERE

const labo = {
    addr: {
        laboBusdAddr,
        laboBnbAddr,
        bgspBnbAddr,
        laboBusdAddrV2,
        laboBnbAddrV2,
        bgspBnbAddrV2,
        bgspAddr,
        laboAddr,
        masterChef,
    },
    pids: {
        pidLaboBusd, 
        pidLaboBnb,
        pidbgspBnb,
        pidbgsp,
        pidLabo,
        pidBnbBusd,
        pidList: [
            pidLaboBusd, // LABO-BUSD LP [0]
            pidLaboBnb, // LABO-BNB LP [1]
            pidBnbBusd, // BNB-BUSD LP [2]
            1, // USDT-BUSD LP [3]
            2, // BTCB-BNB LP [4]
            3, // ETH-BNB LP [5]
            4, // DAI-BUSD LP [6]
            5, // USDC-BUSD LP [7]
            6, // DOT-BNB LP [8]
            7, // CAKE-BUSD LP [9]
            8, // CAKE-BNB LP [10]
            pidLabo, // LABO [11]
            10, // BUSD [12]
            11, // WBNB [13]
            12, // EGG [14]
            18, // BTCB [15]
            14, // ETH [16]
            15, // DAI [17]
            16, // USDC [18]
            17, // DOT [19]
            19, // BSCX [20]
            13, // AUTO [21]
            22, // LABO-GYA [22]
            23, // LABO-DSL [23]
            24, // LABO-BUSD LP V2 [24]
            25, // LABO-BNB LP V2 [25]
            26, // BUSD-BNB LP V2 [26]
            27, // USDT-BUSD LP V2 [27]
            28, // BTCB-BNB LP V2 [28] 
            29, // ETH-BNB LP V2 [29]
            30, // DAI-BUSD LP V2 [30] 
            31, // USDC-BUSD LP V2 [31]
            31, // DOT-BNB LP V2 [32]
            32, // CAKE-BNB LP V2 [33]
            33, // ADA-WBNB LP V2 [34]


        ],
    },
    strings: {
        xPerBlock,
        pendingX
    },
    fetch: {
        fetchAutomatic,
        fetchPriceCustom
    },
    queryPosition: {
        busd: busdPosition,
        token: tokenPosition
    },
    isLocked: {
        unlockWalletButton
    },
    isFullyConfigured,
    showFarmInfoModal
}
 
export default labo;
