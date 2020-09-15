(()=>{


  function getCurrentInvetory(){
      var spreadsheetID = "1YbejU_b2OpqyF2htEgZxAPrrb9uNwINduryeJdXcEDM";
      var sheetTab = "3";
      var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/"+sheetTab+"/public/values?alt=json";
      console.log(url);
      $.getJSON(url, function(data) {
          var entry = data.feed.entry;
          // var length = entry.length;
          $(".Student").remove();

          $(entry).each(function(index, element){

              // if (index === (length - 1)) {
              //     $('#total').text(this.gsx$value.$t);
              // }else{
                  var inventoryItem = $('<tr class="Student">').appendTo('.table');
                  inventoryItem.append(
                      $(document.createElement('td')).text(this.gsx$time.$t).addClass('acc-StudentID')
                  );
                  inventoryItem.append(
                      $(document.createElement('td')).text(this.gsx$studentid.$t).addClass('acc-Firstname')
                  );
                  inventoryItem.append(
                      $(document.createElement('td')).text(this.gsx$firstname.$t).addClass('acc-Lastname')
                  );
                  inventoryItem.append(
                      $(document.createElement('td')).text(this.gsx$lastname.$t).addClass('acc-TimeStamp')
                  );
                         // }
                  });
      });
      setTimeout(getCurrentInvetory, 300);
  } 
  function run(){
    getCurrentInvetory();
  }  
  run();
})();

