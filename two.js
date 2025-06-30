const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('testdb'); 

    await db.collection('students').deleteOne({ roll: 101 });

    const employees = await db.collection('employees').find({ salary: { $gte: 30000 } }).toArray();

    const books = await db.collection('books').find({ author: "Chetan Bhagat", publishedYear: { $gt: 2010 } }).toArray();

    const customerCount = await db.collection('customers').countDocuments({ city: "Delhi" });

    const usersLimit = await db.collection('users').find().limit(5).toArray();

    const logs = await db.collection('logs').find().skip(10).limit(5).toArray();

    const sortedProducts = await db.collection('products').find().sort({ price: 1 }).toArray();

    const sortedUsers = await db.collection('users').find().sort({ createdAt: -1 }).toArray();

    const userFields = await db.collection('users').find({}, { projection: { name: 1, email: 1, _id: 0 } }).toArray();

    const students = await db.collection('students').find({ marks: { $gte: 60, $lte: 90 } }).toArray();

    const sales = await db.collection('sales').find({
      $or: [{ amount: { $lt: 500 } }, { amount: { $gt: 5000 } }]
    }).toArray();

    await db.collection('orders').updateMany(
      { deliveryDate: { $ne: null } },
      { $set: { status: 'completed' } }
    );

    await db.collection('users').deleteMany({ active: false });

    const specialUsers = await db.collection('users').find({
      $or: [{ city: 'Bangalore' }, { age: { $gt: 30 } }]
    }).toArray();
    
    console.log("Employees with salary >= 30000:", employees);
    console.log("Books by Chetan Bhagat:", books);
    console.log("Customers in Delhi:", customerCount);
    console.log("First 5 users:", usersLimit);
    console.log("Logs (skip 10, next 5):", logs);
    console.log("Sorted products (asc):", sortedProducts);
    console.log("Sorted users (desc):", sortedUsers);
    console.log("User name/email only:", userFields);
    console.log("Students with 60–90 marks:", students);
    console.log("Sales (amount <500 or >5000):", sales);
    console.log("Users from Bangalore or age > 30:", specialUsers);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
