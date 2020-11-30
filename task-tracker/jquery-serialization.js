(function ($) {
    $.fn.extend({
        toObject: function () {
            var result = {};
            this.serializeArray().map((item) => {
                result[item.name] = item.value;
            });
            return result;
        },
        fromObject: function (obj) {
            this.find(":input").map((v) => {
                var name = $(v).attr("name");
                if (obj[name]) {
                    $(v).val(obj[name]);
                } else {
                    $(v).val("");
                }
            });
        },
    });
})(jQuery);
