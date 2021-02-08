

 
 
(function ($) {

    $.fn.contentGallary = function (options) {

        var settings = $.extend({
            data: null,

        }, options);

        goBack = function (index) {

            var preIndex = index - 1;
            settings.data.forEach(function (v, i) {
                if (v.id == preIndex) {
                    showDetails(v);

                }
            });
        }

        goFarword = function (index) {

            var nextIndex = index + 1;
            settings.data.forEach(function (v, i) {
                if (v.id == nextIndex) {
                    showDetails(v);

                }
            });
        }

        removePopUp = function () {

            $("#popupArea").html("");
        }

        showDetails = function (v) {
            
            var popUp = `

     <div class="modal" id="popup">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" onclick="removePopUp()" >&times;</span>
                <h4>${v.title}</h4>
            </div>
            <div class="modal-body">

<div class='content'>
${unescape(v.detail)}
</div>
<div class='navigation-container'>
<div class='leftarrow'><a href='javascript:void(0)' onclick="goBack(${v.id});"><i class="fa fa-arrow-left arrow"></i></a></div>
<div class='rightarrow'>
<a href='javascript:void(0)' onclick="goFarword(${v.id});"><i class="fa fa-arrow-right arrow"></i></a>
</div>
</div>
            </div>

        </div>

    </div>


`

            $("#popupArea").html(popUp);
        }


        $("body").append("<div id='popupArea'></div>");


        return this.each(function () {
            $this = $(this);
            $this.html("");
            settings.data.forEach(function (v, i) {
                v.detail = escape(v.detail);
                $this.html($this.html() +
                    `<div class='content-area' onclick='showDetails(${JSON.stringify(v)})'>
                                            <a href="javascript:void(0)">${v.title}</a>
                                            </div>`);
            });
        });

       
    }



    

})(jQuery);
