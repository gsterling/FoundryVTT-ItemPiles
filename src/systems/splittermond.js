export default {
  
  "VERSION": "1.0.2",
  
  // The actor class type is the type of actor that will be used for the default item pile actor that is created on first item drop.
  "ACTOR_CLASS_TYPE": "npc",
  
  // The item quantity attribute is the path to the attribute on items that denote how many of that item that exists
  "ITEM_QUANTITY_ATTRIBUTE": "system.quantity",
  
  // The item price attribute is the path to the attribute on each item that determine how much it costs
  "ITEM_PRICE_ATTRIBUTE": "system.price.value.gp",
  
  // Item types and the filters actively remove items from the item pile inventory UI that users cannot loot, such as spells, feats, and classes
  "ITEM_FILTERS": [
    {
      "path": "type",
      "filters": "spell,strength,weakness,mastery,species,culture,ancestry,education,resource,npcfeature,moonsign,language,culturelore,statuseffect,spelleffect"
    }
  ],
  
  // Item similarities determines how item piles detect similarities and differences in the system
  "ITEM_SIMILARITIES": ["name", "type", "system.sufferedDamage", "system.quality"],
  
  // Currencies in item piles is a versatile system that can accept actor attributes (a number field on the actor's sheet) or items (actual items in their inventory)
  // In the case of attributes, the path is relative to the "actor.system"
  // In the case of items, it is recommended you export the item with `.toObject()` and strip out any module data
  "CURRENCIES": [
    {
      type: "attribute",
      name: "Solare",
      img: "icons/commodities/currency/coins-assorted-mix-copper.webp",
      abbreviation: "{#}S",
      data: {
        path: "system.currency.S",
      },
      primary: false,
      exchangeRate: 10000
    },
    {
      type: "attribute",
      name: "Lunare",
      img: "icons/commodities/currency/coin-embossed-unicorn-silver.webp",
      abbreviation: "{#}L",
      data: {
        path: "system.currency.L",
      },
      primary: false,
      exchangeRate: 100
    },
    {
      type: "attribute",
      name: "Telare",
      img: "icons/commodities/currency/coins-assorted-mix-platinum.webp",
      abbreviation: "{#}T",
      data: {
        path: "system.currency.T",
      },
      primary: true,
      exchangeRate: 1
    }
  ]
}