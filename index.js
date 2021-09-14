//function superbowlWin(historicData) {
//    for (const year of historicData) {
//        if (historicData[year][1] === 'W') {
//            return historicData[year][1];
//        }
//    }
//}

  function superbowlWin(array) { //takes in the array as an argument
    for (const listOfData of array) { //loops through each element with listofData as the list of indexes for the outer array
      if (listOfData.result === "W") { //looks through the element and logs the position of that element when the element if/when found
        return listOfData.year //returns whatever we want based on the position logged in the condition
      }
    }
  }