new Vue({
  el: '#listings' ,
  data: {
     data: [],
  },
  mounted() {
    this.$nextTick(function() {
      var book = this;
      $.ajax({
            url: "https://api.myjson.com/bins/1h3vb3",

            method: "GET",
            dataType: "JSON",
            success: function(e) {

                    book.data = e.data;

            },
        });
    })
  },

})