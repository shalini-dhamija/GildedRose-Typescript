import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose - "Sulfuras, Hand of Ragnaros"', function () {

    it('for item "Sulfuras, Hand of Ragnaros", never decrease in quality and never has to be sold', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 11, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(49) && expect(items[0].sellIn).to.equal(11);
    });

    it('for item "Sulfuras, Hand of Ragnaros", allows quality than 50', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 60) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(60) && expect(items[0].sellIn).to.equal(10);
    });    
});

describe('Gilded Rose - "Aged Brie"', function () {

    it('for item "Aged Brie", increases in quality as it gets older and till it reaches 50. sellin value decreases by 1', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 11, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(10);
    });

    it('for item "Aged Brie", quality does not increase when it reaches 50. sellin value decreases by 1', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(9);
    });
    
    it('for item "Aged Brie", if sellIn reaches 0, increment quality by 2', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 48) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(-1);
    });     

    it('for item "Aged Brie", if sellIn reaches 0, increment quality by 2 until it reaches 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(-1);
    }); 
});

describe('Gilded Rose - "Backstage passes"', function () {

    it('for item "Backstage passes", sellIn less than 6, increment quantity by 3', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(4);
    });

    it('for item "Backstage passes", sellIn less than 6, increment quantity by 3 until 50', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(4);
    });

    it('for item "Backstage passes", sellIn less than 11, increment quantity by 2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 48) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(9);
    });

    it('for item "Backstage passes", sellIn less than 11, increment quantity by 2 until 50', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) && expect(items[0].sellIn).to.equal(9);
    });
    
    it('for item "Backstage passes", sellIn greater than equal to 11, increment quaantity by 1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) //&& expect(items[50].sellIn).to.equal(10);
    });     

    it('for item "Backstage passes", sellIn greater than equal to 11, increment quaantity by 1 until 50', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50) //&& expect(items[50].sellIn).to.equal(10);
    });  

    it('for item "Backstage passes", if sellIn reaches 0, quality drops to 0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 48) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0) && expect(items[0].sellIn).to.equal(-1);
    }); 
});

describe('Gilded Rose - "Any other item"', function () {

    it('for item "Any other item", Quality degrades by 1 if sellIn is greater than 0', function() {
        const gildedRose = new GildedRose([ new Item('Test', 11, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(48) && expect(items[0].sellIn).to.equal(10);
    });

    it('for item "Any other item", Quality degrades twice as fast if sellIn is less than or equal to 0', function() {
        const gildedRose = new GildedRose([ new Item('Test', 0, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(47) && expect(items[0].sellIn).to.equal(-1);
    });  
});

