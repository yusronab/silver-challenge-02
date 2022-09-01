function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Yusron Arly Bazarah
  
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result.push(cars[i])
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
