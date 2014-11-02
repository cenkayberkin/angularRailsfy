c1 = Category.create(name: "Cheap Diamonds")
c2 = Category.create(name: "Rare Diamonds")

p1 = Product.create(name: "Azurite", description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
  shine: "8", price: 110.50, rarity: 7,  category: c1, color: "#CCC", faces: "14")

p2 = Product.create(name: "Bloodstone", description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
  shine: "9", price: 22.90, rarity: 6, category: c1, color: "#EEE", faces: "12")

p3 = Product.create(name: "Zircon", category: c1 , description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
  shine: "70", price: 2200, rarity: 2, color: "#000", faces: "6")

p4 = Product.create(name: "Special Diamond", description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
  shine: "70", price: 3100, rarity: 2, category: c2,color: "#000", faces: "6")

p5 = Product.create(name: "Special Zircon", description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
  shine: "70", price: 5100, rarity: 2, category: c2,color: "#000", faces: "6")

p6 = Product.create(name: "Special Azurite", description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
  shine: "70", price: 6100, rarity: 2, category: c2, color: "#000", faces: "6")

im1 = Image.create(url: "images/gem-01.gif", product: p2)
im2 = Image.create(url: "images/gem-02.gif", product: p1)
im3 = Image.create(url: "images/gem-03.gif", product: p2)
im4 = Image.create(url: "images/gem-04.gif", product: p4)
im5 = Image.create(url: "images/gem-05.gif", product: p6)
im6 = Image.create(url: "images/gem-06.gif", product: p3)
im7 = Image.create(url: "images/gem-07.gif", product: p5)
im8 = Image.create(url: "images/gem-08.gif", product: p3)
im9 = Image.create(url: "images/gem-09.gif", product: p1)


