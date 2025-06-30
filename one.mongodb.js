
use("students");
db.students.insertOne({ name: "Alice", age: 25, course: "Math" });
db.students.find({ age: { $gt: 20 } });
