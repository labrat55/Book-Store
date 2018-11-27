function getBook() {
 
  fetch("https://api.myjson.com/bins/1h3vb3")
    .then(response => response.json())
    .then(book => {
  app.book = book;
   app.loading = true;
    
 
      console.log(book);
    
    })
   .catch(error => console.log(error))
 }

getBook();

var app = new Vue({
  el: "#frog",
  data: { 
    book:[],
    images: [
      "https://preview.ibb.co/bC5ELQ/alex_min.png", "https://preview.ibb.co/dvM9AQ/eddie_min.png", "https://preview.ibb.co/nF3Un5/flecha_min.png", "https://preview.ibb.co/hPod4k/joan_min.png", "https://preview.ibb.co/iVRAuk/maruti_min.png",  "https://preview.ibb.co/n82iEk/oruc_min.png", "https://preview.ibb.co/bHMWPk/roosy_min.png", "https://preview.ibb.co/n06LH5/vcarpio_min.png", "https://preview.ibb.co/dPxsYv/Albert_min.png", "https://preview.ibb.co/e1z6tv/Bryn_min.png", "https://preview.ibb.co/fqbmtv/Eduardo_min.png", "https://preview.ibb.co/ctuvmF/Erica_min.png", "https://preview.ibb.co/hBtc0a/Gerard_min.png", "https://preview.ibb.co/esZT6F/Juan_min.png", "https://preview.ibb.co/jv3c0a/Lluis_min.png", "https://preview.ibb.co/bBJXYv/Muhammad_min.png", "https://preview.ibb.co/ja3XYv/Nuria_min.png", "https://preview.ibb.co/hCVqLa/Vicent_min.png", "https://preview.ibb.co/iVRmtv/Victor_min.png", "https://preview.ibb.co/dGcsYv/Auger_min.png", "https://preview.ibb.co/h8s4fa/Edu_min.png", "https://preview.ibb.co/csHsYv/Francesc_min.png", "https://preview.ibb.co/gjX4fa/Ignasi_min.png", "https://preview.ibb.co/cV1QmF/Raul_min.png", "https://preview.ibb.co/kHC9Va/Gabriel_min.png", 
    ]
   
  }
})

