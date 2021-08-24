const Block = require("./block");
const { GENESIS_DATA } = require("./config");

describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ['blockchain', 'data'];
    const block = new Block({ 
        timestamp: timestamp,
        lastHash: lastHash,
        hash: hash,
        data: data,
    });

    it('has a timestamp property', () => {
        expect(block.timestamp).toEqual(timestamp);
    });

    it('has a lastHash property', () => {
        expect(block.lastHash).toEqual(lastHash);
    });

    it('has a hash property', () => {
        expect(block.lastHash).toEqual(hash);
    });

    it('has a data property', () => {
        expect(block.data).toEqual(data);
    });

    describe('genesis block', () => {
        const genesisBlock = Block.genesis();
        console.log("The genesisi block is: ", genesisBlock);

        it('is not undefined', () => {
            expect(genesisBlock !== undefined).toBe(true);
        });

        it('is not null', () => {
            expect(genesisBlock !== null).toBe(true);
        });

        it('is an instance of the Block class', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });
        
        it('returns the genesis data object', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

    describe('mineBlock()', () => {
        const lastBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.mineBlock({ lastBlock, data });

        it('returns a block instance', () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it('uses the `lastHash` of its `lastBlock` as its `hash`', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        it('sets the `data`', () => {
            expect(minedBlock.data).toEqual(data);
        });

        it('has a `timestamp`', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });
    });
})