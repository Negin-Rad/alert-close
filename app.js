window.onload = init;

function init() {
    loadJSON('GET', 'https://jsonplaceholder.typicode.com/users', function(r) {



        build(r, 'output');
    });

    function loadJSON(method, url, callback) {
        var xHR = new XMLHttpRequest;
        var that = xHR;
        xHR.open(method, url, true);
        xHR.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                setTimeout(function() {
                    callback(JSON.parse(that.response));
                }, 2000);
            }
        }
        xHR.send();
    }

    function build(res, id) {
        var html = '';
        for (var i = 0; i < res.length; i++) {
            html += '<div class="alert alert-danger mt-2 px-3 py-1 b-round text-white ">';
            html += '<span>' + res[i].name + '</span>';
            html += '<button class="close" data-dismiss="alert">&times</button>';
            html += '<br>';
            html += 'visit: <a href="https://www.' + res[i].website + '" class="text-warning">' + res[i].website + '</a>';
            html += '</div>';
        }
        document.getElementById(id).innerHTML = html;
    }
}