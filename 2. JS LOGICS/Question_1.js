///Merging two arrays of data fetched from seperate APIS into a single list.
const firstNames = [
    "Alex",
    "Maria",
    "Liam",
    "Olivia",
    "Ethan",
    "Sophia",
    "James",
    "Emily",
    "Daniel",
    "Chloe"
];


    const lastNames = [
        "Johnson",
        "Garcia",
        "Smith",
        "Brown",
        "Williams",
        "Davis",
        "Miller",
        "Wilson",
        "Anderson",
        "Thomas"
    ];

const fullNames = [...firstNames, ...lastNames]
console.log(fullNames);




// Combine firstNames and lastNames to create fullNames
const fullNames1 = firstNames.map((firstName, index) => 
    `${firstName} ${lastNames[index]}`
  );
  
  console.log(fullNames1);

  /*The map() method iterates through the firstNames array.
For each firstName, it constructs a string by concatenating the firstName and the corresponding lastName (using the same index).
The result is an array of full names like "Alex Johnson", "Maria Garcia", etc. */