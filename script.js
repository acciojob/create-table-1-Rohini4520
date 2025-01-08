function insert_Row() {
    // Get the table element by its ID
    const table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    const newRow = table.insertRow(0);

    // Insert the first cell into the new row
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // Insert the second cell into the new row
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
}
