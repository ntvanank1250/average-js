function tinhdiemtrungbinh() {
   let vatly = Number(document.getElementById("vatly").value)
   console.log("diem vat ly", vatly)
   let hoahoc = Number(document.getElementById("hoahoc").value)
   console.log("diem hoa hoc", hoahoc)
   let sinhhoc = Number(document.getElementById("sinhhoc").value)
   console.log("diem sinh hoc", sinhhoc)
   let tong = (vatly + hoahoc + sinhhoc)
document.getElementById("tong").innerText = tong;
document.getElementById("trungbinh").innerText = tong/3;
  
} 
