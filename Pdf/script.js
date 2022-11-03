function generatePDF(){
    const element = document.getElementById("invoice");

    html2PDF()
    .from(element)
    .save()
}