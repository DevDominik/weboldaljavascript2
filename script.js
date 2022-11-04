function szamit(id) {
    let szam = 0
    let elso = document.getElementById("elso").value
    let masodik = document.getElementById("masodik").value
    console.log(id)
    elso = parseFloat(elso)
    masodik = parseFloat(masodik)
    if (id == "szorzas") {
        szam = elso*masodik
    } else if (id == "osztas") {
        szam = elso/masodik
    } else if (id == "osszeadas") {
        szam = elso+masodik
    } else if (id == "kivonas") {
        szam = elso-masodik
    }
    document.getElementById("eredmeny").innerHTML = szam
}