document.getElementById("addMakanan").addEventListener("submit", (event) => {
  event.preventDefault();
  const makanan = document.getElementById("makanan").value;
  const minuman = document.getElementById("minuman").value;
  const hidanganPenutup = document.getElementById("hidanganPenutup").value;
  const jumlah = document.getElementById("jumlah").value;

  const data = {
    makanan,
    minuman,
    hidanganPenutup,
    jumlah,
  };

  axios
    .post("http://localhost:3000/Menu", data)
    .then((response) => {
      console, log("data berhasil di tambah" + response);
      window.location.reload(true);
    })
    .catch((error) => {
      console.log("data gagal di tambah" + error);
    });
});
