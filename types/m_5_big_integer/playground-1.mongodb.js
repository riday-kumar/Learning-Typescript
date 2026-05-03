use ("university")

// db.createCollection("students")

// db.students.insertMany([
//     {_id: 1, name : "Akshay Kumar", age : 23, class : "BSC"},
//     {_id: 2, name : "Salman Khan", age : 23, class : "BCA"},
//     {_id: 3, name : "Shahid Kapur", age : 23, class : "BSC"},
//     {_id: 4, name : "John Abraham", age : 23, class : "BTech"},
//     {_id: 5, name : "Amir Khan", age : 23, class : "BCA"},
//     {_id: 6, name : "Sanjay Dutt", age : 23, class : "BSC"},
//     {_id: 7, name : "Suniel Shetty", age : 23, class : "BTech"},
//     {_id: 8, name : "Priya Chupra", age : 23, class : "BCOM"},
//     {_id: 9, name : "kartik Saha", age : 23, class : "BCA"},
//     {_id: 10, name : "SoroSoti Debi", age : 23, class : "BTech"}
// ])

// db.students.find()

// db.students.aggregate([
//     {
//         $match: {
//           age : {
//             $gt :20
//           }
//         }
//     },
//     {
//         $group: {
//         _id : "$class",
//         count: {$sum : 1}
//     }}
// ])


// db.students.updateOne(
//     {age : 23},
//     {$set : {
//         age : 25
//     }}
// )

// db.students.aggregate([
//     {
//         $match: {
//           age : {
//             $gt :20
//           }
//         }
//     },
//     {
//         $group: {
//         _id : "$class",
//         // count: {$count:{}},
//         students : {$push : "$name"}
//     }},
//     // {$sort: {
//     //   count: -1
//     // }}
    
// ])


// db.students.aggregate([
//     {
//         $match: {
//           age : {
//             $gt :20
//           }
//         }
//     },
//     {
//         $group: {
//         _id : "$class",
//         students : {$push : "$$ROOT"}
//     }},
// ])

// db.students.aggregate([
//     {
//         $group: {
//           _id: "$class",
//           Maximum_Student_Age: {
//             $max: "$age"
//           }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group: {
//           _id: "$class",
//           Maximum_Student_Age: {
//             $avg: "$age"
//           }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group: {
//           _id: null,
//           Maximum_Student_Age: {
//             $avg: "$age"
//           }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group: {
//           _id: null,
//           Median_Age: {
//             $median:{
//                 input : "$age",
//                 method : "approximate"
//             }
//           }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group: {
//           _id: "$class",
//           First_Student: {
//             $first: "$name"
//           }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group: {
//           _id: "$class",
//           First_Student: {
//             $first: "$$ROOT"
//           }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $group: {
//           _id: "$class",
//           Last_Student: {
//             $last: "$$ROOT"
//           }
//         }
//     }
// ])

db.students.aggregate([
    {
        $group: {
          _id: "$class",
          Top_Student: {
            $top:{
                output : ["$name", "age"],
                sortBy : {"age" : 1}
            }
          }
        }
    }
])