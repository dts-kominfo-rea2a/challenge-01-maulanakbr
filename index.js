// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Monica's assets
let listColorMonica = new Set();

listColorMonica.add("Yellow");
listColorMonica.add("Pink");
listColorMonica.add("White");
listColorMonica.add("Purple");

let listRestaurantMonica = new Set();

listRestaurantMonica.add("Bento");
listRestaurantMonica.add("Sushi");
listRestaurantMonica.add("Pancake");
listRestaurantMonica.add("Eggy");
listRestaurantMonica.add("Tempura");
listRestaurantMonica.add("Bento");
listRestaurantMonica.add("Eggy");
listRestaurantMonica.add("Padang");
listRestaurantMonica.add("Tteok");
listRestaurantMonica.add("Sushi");
listRestaurantMonica.add("Sushi");

const educationMonica = [
    {name: "SD 01", city: "Jakarta", graduate: "2016"},
    {name: "SMP 02", city: "Jakarta", graduate: "2019"},
    {name: "SMA 03", city: "Tangerang"}
];

const firstUser = {
    name: "Monica",
    age: "17",
    gender: "Female",
    email: "monica@dingdong.com",
    favoriteColor: [...listColorMonica],
    isHavePet: "Yes",
    education: educationMonica,
    favoriteRestaurant: [...listRestaurantMonica]
};

// Wendy's assets
let listColorWendy = new Set();

listColorWendy.add("Blue");
listColorWendy.add("Black");
listColorWendy.add("Grey");

let listRestaurantWendy = new Set();

listRestaurantWendy.add("Tempura");
listRestaurantWendy.add("Bento");
listRestaurantWendy.add("Sushi");
listRestaurantWendy.add("Pancake");
listRestaurantWendy.add("Padang");
listRestaurantWendy.add("Katsu");
listRestaurantWendy.add("Geprek");
listRestaurantWendy.add("Pancake");
listRestaurantWendy.add("Eggy");


const educationWendy = [
    {name: "SD 02", city: "Jakarta", graduate: "2010"},
    {name: "SMP 03", city: "Bogor", graduate: "2013"},
    {name: "SMA 01", city: "Surabaya", graduate: "2016"},
    {name: "Universitas Maju", city: "Tangerang"}
];

const secondUser = {
    name: "Wendy",
    age: "23",
    gender: "Male",
    email: "wendy@dingdong.com",
    favoriteColor: [...listColorWendy],
    isHavePet: "No",
    education: educationWendy,
    favoriteRestaurant: [...listRestaurantWendy]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};