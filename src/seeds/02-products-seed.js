db = db.getSiblingDB("shop");

db.products.insertMany([
  {
    _id: ObjectId("68c5a0d9f45e62ed9233c5d3"),
    title: "Physical picture of a kitty",
    price: 0.99,
    description: "kitty",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg",
    userId: ObjectId("68c59cebf2b7f6e17ff9ea08"),
  },
  {
    _id: ObjectId("68c32686af5c529e81421f78"),
    title: "A book!",
    price: 12.99,
    description: "Funny-colored",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDXr4is7-bVjWtE-TI4q-l0jHX0SPN4_4Uw&s",
    userId: ObjectId("68c59cebf2b7f6e17ff9ea08"),
  },
  {
    _id: ObjectId("68c32686af5c529e814266e1"),
    title: "Red apple",
    price: 2.99,
    description: "Do not combine with a pen",
    imageUrl:
      "https://i5.walmartimages.com/seo/Fresh-Red-Delicious-Apple-Each_7320e63a-de46-4a16-9b8c-526e15219a12_3.e557c1ad9973e1f76f512b34950243a3.jpeg",
    userId: ObjectId("68c59cebf2b7f6e17ff9ea08"),
  },
  {
    _id: ObjectId("68c495a27829b9cab975da81"),
    title: "Pen",
    price: 249.99,
    description: "Pure prestige",
    imageUrl:
      "https://www.faber-castell.pl/-/media/Products/Product-Repository/Miscellaneous-ballpoint-pens/24-24-05-Ballpoint-pen/143499-Ballpoint-Pen-Basic-M-black/Images/143499_0_PM99.ashx?bc=ffffff&as=0&h=900&w=900&sc_lang=pl-PL&hash=0552B329890216C4F517A47B7B261E90",
    userId: ObjectId("68c49525baa988da36319592"),
  },
]);
