function getBook() {

  fetch("https://api.myjson.com/bins/1h3vb3")
    .then(response => response.json())
    .then(json => {
      app.book = json.books;
      app.loading = true;


      console.log(book);

    })
    .catch(error => console.log(error))
}

getBook();

var app = new Vue({
  el: "#maincontent",
  data: {
    book: [],
    filteredBook: [],
  }
});

function myFunction() {
  var input, filter, ul;
  var filteredBooks = [];
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  for (var i = 0; i < books.length; i++) {
    ul = books[i].titulo;
    if (ul.toUpperCase().indexOf(filter) > -1) {
      filteredBooks.push(books[i])
    }
  }
  changeText(filteredBooks);
}


//function contains(text_one, text_two) {
//  if (text_one.indexOf(text_two) != -1)
//    return true;
//}
//$("#searchText").keyup(function () {
//  var searchText = $("#searchText").val().toLowerCase();
//  if (!contains(searchText,$(this).text().toLowerCase())) {
//    $(this).hide();
//  } else {
//    $(this).show();
//  }
//});

//-----------Fancy Box-------------------

$("#test").on('click', function () {

  $.fancybox.open([
    {
      src: "https://preview.ibb.co/bC5ELQ/alex_min.png",
      opts: {
        thumb: "https://preview.ibb.co/bC5ELQ/alex_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/dvM9AQ/eddie_min.png",
      opts: {
        thumb: "https://preview.ibb.co/dvM9AQ/eddie_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/nF3Un5/flecha_min.png",
      opts: {
        thumb: "https://preview.ibb.co/nF3Un5/flecha_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/hPod4k/joan_min.png",
      opts: {
        thumb: "https://preview.ibb.co/hPod4k/joan_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/iVRAuk/maruti_min.png",
      opts: {
        thumb: "https://preview.ibb.co/iVRAuk/maruti_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/n82iEk/oruc_min.png",
      opts: {
        thumb: "https://preview.ibb.co/n82iEk/oruc_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/n06LH5/vcarpio_min.png",
      opts: {
        thumb: "https://preview.ibb.co/n06LH5/vcarpio_min.png",
      }
    },
    {
      src: "https://preview.ibb.co/dPxsYv/Albert_min.png",
      opts: {
        thumb: "https://preview.ibb.co/dPxsYv/Albert_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/e1z6tv/Bryn_min.png",
      opts: {
        thumb: "https://preview.ibb.co/e1z6tv/Bryn_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/fqbmtv/Eduardo_min.png",
      opts: {
        thumb: "https://preview.ibb.co/fqbmtv/Eduardo_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/ctuvmF/Erica_min.png",
      opts: {
        thumb: "https://preview.ibb.co/ctuvmF/Erica_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/hBtc0a/Gerard_min.png",
      opts: {
        thumb: "https://preview.ibb.co/hBtc0a/Gerard_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/esZT6F/Juan_min.png",
      opts: {
        thumb: "https://preview.ibb.co/esZT6F/Juan_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/jv3c0a/Lluis_min.png",
      opts: {
        thumb: "https://preview.ibb.co/jv3c0a/Lluis_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/bBJXYv/Muhammad_min.png",
      opts: {
        thumb: "https://preview.ibb.co/bBJXYv/Muhammad_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/ja3XYv/Nuria_min.png",
      opts: {
        thumb: "https://preview.ibb.co/ja3XYv/Nuria_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/hCVqLa/Vicent_min.png",
      opts: {
        caption: 'Seventeen caption',
        thumb: "https://preview.ibb.co/hCVqLa/Vicent_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/iVRmtv/Victor_min.png",
      opts: {
        thumb: "https://preview.ibb.co/iVRmtv/Victor_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/dGcsYv/Auger_min.png",
      opts: {
        thumb: "https://preview.ibb.co/dGcsYv/Auger_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/h8s4fa/Edu_min.png",
      opts: {
        thumb: "https://preview.ibb.co/h8s4fa/Edu_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/csHsYv/Francesc_min.png",
      opts: {
        thumb: "https://preview.ibb.co/csHsYv/Francesc_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/gjX4fa/Ignasi_min.png",
      opts: {
        thumb: "https://preview.ibb.co/gjX4fa/Ignasi_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/cV1QmF/Raul_min.png",
      opts: {
        thumb: "https://preview.ibb.co/cV1QmF/Raul_min.png"
      }
    },
    {
      src: "https://preview.ibb.co/kHC9Va/Gabriel_min.png",
      opts: {
        thumb: "https://preview.ibb.co/kHC9Va/Gabriel_min.png"
      }
    }

  ], {
    loop: true,
    thumbs: {
      autoStart: true
    }
  });

});

//},
