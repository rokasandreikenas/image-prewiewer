    var enlargeImg = document.getElementById("img02")
    var description = document.getElementById("description");
   
    function showDataWithImages() {

        var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        function reportStatus() {
            if (oXHR.readyState == 4)               // Request completed.
                showTheList(this.responseText);     // All set. Now show the data.
        }

        oXHR.onreadystatechange = reportStatus;
        oXHR.open("GET", "https://picsum.photos/v2/list", true);   // true = asynchronous request, false = synchronous request.
        oXHR.send();

        function showTheList(json) {
            var arrItems = [];
            arrItems = JSON.parse(json);

            var div = document.getElementById('photos');  
            div.innerHTML = '';

            for (i = 0; i <= arrItems.length - 1; i++) {
                var img = document.createElement('img');  
                img.src = arrItems[i].download_url;                
                img.alt = arrItems[i].author + " <br/>"+ arrItems[i].height + "x" + arrItems[i].width;
                img.id = arrItems[i].id;
                img.className="image";

                img.onclick = function() {                  
                    enlargeImg.src = this.src;
                    description.innerHTML = this.alt;
                }

                var divImg = document.createElement('div');
                divImg.appendChild(img);
            
                div.appendChild(divImg);
            }
        }
    }

    function openUrl() {
        window.open(enlargeImg.src);
    }

    window.onload = function() {
     showDataWithImages();
    }

