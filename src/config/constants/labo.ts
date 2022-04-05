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
const bgsp = '0xe9f861b22cd5240494ecc14afea02659ec59864f'
const masterChef = '0x65FE214382fD9e0d6cF054EeD65C150C88ed6834'

// LABO RELATED PIDS

const pidLaboBusd = 20
const pidLaboBnb = 1
const pidLabo = 0

// OTHER PIDS THAT ARE REFERENCED THROUGHOUT THE CODE

const pidBnbBusd = 2

// SET countBack TO TRUE TO COUNT BACK AS FAR AS countLength

const countBack = false
const countLength = 2

// CHANGE LABO FOR THE TOKEN BEIGN TESTED

const xPerBlock = "_BGSPPerBlock" // referenced in getMasterChefAddress()
const pendingX = "pendingBGSP"

// SEARCH AND REPLACE THIS STRING IF USING ANY OTHER THAN LABO: await masterChefContract.methods.pendingBGSP in \src\state\pools\fetchPoolsUser.ts

// USE OUR CUSTOM WAY OF FETCHING PRICE

const fetchAutomatic = false;
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
 
export default labo;
