function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 1; i < result.length; i++) {
    let newVal = result[i]
    let key = result[i].year
    let j = i - 1
    while ((j >= 0) && (result[j].year < key)) {
      result[j + 1] = result[j]
      j--
    }
    result[j + 1] = newVal
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
