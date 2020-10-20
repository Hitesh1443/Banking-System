const User = require("./models/users");

const data = [
  {
    name: "John",
    email: "John@gmail.com",
    current_balance: 100000,
    address: "1563, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Vegeta",
    dob: "1/1/2000",
    martial_status: "Unmarried",
  },
  {
    name: "David",
    email: "David@gmail.com",
    current_balance: 100000,
    address: "1657, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Tobi",
    dob: "2/2/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Pollard",
    email: "Pollard@gmail.com",
    current_balance: 100000,
    address: "1658, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Madara",
    dob: "3/3/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Baristo",
    email: "Baristo@gmail.com",
    current_balance: 100000,
    address: "1456, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Samson",
    dob: "4/4/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Goku",
    email: "Goku@gmail.com",
    current_balance: 100000,
    address: "1446, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Jin",
    dob: "5/5/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Itachi",
    email: "Itachi@gmail.com",
    current_balance: 100000,
    address: "1654, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Kabuto",
    dob: "6/6/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Sasuke",
    email: "Sasuke@gmail.com",
    current_balance: 100000,
    address: "1116, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Orochimaru",
    dob: "7/7/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Midoriya",
    email: "Midoriya@gmail.com",
    current_balance: 100000,
    address: "1896, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Shazam",
    dob: "8/8/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Saitama",
    email: "Saitama@gmail.com",
    current_balance: 100000,
    address: "1657, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Bruce",
    dob: "9/9/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Dante",
    email: "Dante@gmail.com",
    current_balance: 100000,
    address: "1659, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Clark",
    dob: "10/10/2000",
    martial_status: "Unmarried",
  },
];

function seedDB() {
  data.forEach(function (seed) {
    User.create(seed, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

module.exports = seedDB;
