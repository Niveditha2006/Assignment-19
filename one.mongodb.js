
use("niveditha");

db.students.insertOne({
  name: "Alice",
  age: 20,
  course: "Computer Science"
});

db.employees.insertMany([
  { name: "Bob", salary: 32000, department: "HR" },
  { name: "Charlie", salary: 45000, department: "Engineering" }
]);

db.products.find({});

db.users.find({ age: { $gt: 25 } });

db.orders.find({ status: { $in: ["pending", "shipped"] } });


db.users.updateOne(
  { username: "john_doe" },
  { $set: { email: "john_doe@example.com" } }
);


db.students.deleteOne({ roll: 101 });

db.employees.find({ salary: { $gte: 30000 } });

db.books.find({
  author: "Chetan Bhagat",
  publishedYear: { $gt: 2010 }
});

db.customers.countDocuments({ city: "Delhi" });

db.users.find({}).limit(5);

db.logs.find({}).skip(10).limit(5);

db.products.find({}).sort({ price: 1 });

db.users.find({}).sort({ createdAt: -1 });
