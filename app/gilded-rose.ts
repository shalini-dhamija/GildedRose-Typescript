export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch(this.items[i].name){
                case 'Sulfuras, Hand of Ragnaros':
                    break;
                case 'Aged Brie':
                    if(this.items[i].sellIn<=0){
                        for(let j=0; j<2; j++)
                            if(this.items[i].quality<50) this.items[i].quality=this.items[i].quality+1;
                    }
                    else{                        
                        if(this.items[i].quality<50) this.items[i].quality=this.items[i].quality+1;
                    }
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':                    
                    if(this.items[i].sellIn>10){
                        if(this.items[i].quality<50) this.items[i].quality=this.items[i].quality+1;
                    }
                    else if(this.items[i].sellIn<11 && this.items[i].sellIn>6){
                        for(let j=0; j<2; j++)
                            if(this.items[i].quality<50) this.items[i].quality=this.items[i].quality+1;
                    }
                    else if(this.items[i].sellIn<6 && this.items[i].sellIn>0){
                        for(let j=0; j<3; j++)
                            if(this.items[i].quality<50) this.items[i].quality=this.items[i].quality+1;
                    }
                    else if(this.items[i].sellIn===0){
                        this.items[i].quality=0;
                    }
                    break;
                case 'Conjured Mana Cake':
                    for(let j=0; j<2; j++)
                            if(this.items[i].quality>0) this.items[i].quality=this.items[i].quality-1;
                    break;
                default:
                    if(this.items[i].sellIn<=0){
                        for(let j=0; j<2; j++)
                            if(this.items[i].quality>0) this.items[i].quality=this.items[i].quality-1;
                    }
                    else{
                        if(this.items[i].quality>0) this.items[i].quality=this.items[i].quality-1;
                    }
                    break;
            }
            if(this.items[i].name!=='Sulfuras, Hand of Ragnaros')
                this.items[i].sellIn = this.items[i].sellIn - 1;
        }

        return this.items;
    }
}
