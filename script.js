function insert_Row() {
    //Write your code here
	const table = document.getElementById("SampleTable");

	const newRow = table.insertRow(0);

	const cell1 = newRow.insertCell(0);
	cell1.innerHTML = "New Cell1";

	const Cell2 = newRow.insertCell(1);
	Cell2.innerHTML = "New Cell2";
  
  
}
