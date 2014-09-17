// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require conquer/js/jquery-1.8.3.min.js
//= require conquer/jquery-slimscroll/jquery-ui-1.9.2.custom.min.js
//= require conquer/jquery-slimscroll/jquery.slimscroll.min.js
//= require conquer/fullcalendar/fullcalendar/fullcalendar.min.js
//= require conquer/bootstrap/js/bootstrap.min.js
//= require conquer/js/jquery.blockui.js
//= require conquer/js/jquery.cookie.js
//= require conquer/js/excanvas.js
//= require conquer/js/respond.js
//= require conquer/jqvmap/jqvmap/jquery.vmap.js
//= require conquer/jqvmap/jqvmap/maps/jquery.vmap.russia.js
//= require conquer/jqvmap/jqvmap/maps/jquery.vmap.world.js
//= require conquer/jqvmap/jqvmap/maps/jquery.vmap.europe.js
//= require conquer/jqvmap/jqvmap/maps/jquery.vmap.germany.js
//= require conquer/jqvmap/jqvmap/maps/jquery.vmap.usa.js
//= require conquer/jqvmap/jqvmap/data/jquery.vmap.sampledata.js
//= require conquer/jquery-knob/js/jquery.knob.js
//= require conquer/jquery-knob/js/jquery.sparkline.min.js
//= require conquer/jquery-knob/js/justgage.1.0.1.min.js
//= require conquer/jquery-knob/js/raphael.2.1.0.min.js
//= require conquer/js/jquery.peity.min.js
//= require conquer/gritter/js/jquery.gritter.js
//= require conquer/uniform/jquery.uniform.min.js
//= require conquer/js/jquery.pulsate.min.js
//= require conquer/bootstrap-daterangepicker/date.js
//= require conquer/bootstrap-daterangepicker/daterangepicker.js
//= require conquer/bootstrap-daterangepicker/daterangepicker.js
//= require conquer/clockface/js/clockface.js
//= require conquer/fancybox/source/jquery.fancybox.pack.js
//= require conquer/bootstrap-wizard/jquery.bootstrap.wizard.min
//= require conquer/js/app.js
//= require highcharts
//= require exporting
//= require jquery.validate
//= require apprise-v2
//= require jquery.form
//= require  conquer/data-tables/jquery.dataTables
//= require  conquer/data-tables/DT_bootstrap.js
//= require apprise-1.5.full
//= require sud
//= require checks
//= require  conquer/bootstrap-datepicker/js/bootstrap-datepicker.js
//= require  conquer/bootstrap-daterangepicker/date.js
//= require  conquer/bootstrap-daterangepicker/daterangepicker.js
//= require  conquer/bootstrap-timepicker/js/bootstrap-timepicker.js
//= require jquery.jstree
//= require ajaxfileupload
//= require jstreegrid
//= require jquery.hotkeys
//= require jquery.cookie
//= require jquery.treetable-ajax-persist.js
//= require jquery.treetable-3.0.0.js
//= require persist-min.js
//= require bootstrap-datetimepicker.min

jQuery(document).ready(function () {
    // initiate layout and plugins
    App.setMainPage(true);
    App.init();

});
//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-37564768-1']);
//_gaq.push(['_setDomainName', 'keenthemes.com']);
//_gaq.push(['_setAllowLinker', true]);
//_gaq.push(['_trackPageview']);
//(function () {
//    var ga = document.createElement('script');
//    ga.type = 'text/javascript';
//    ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
//    var s = document.getElementsByTagName('script')[0];
//    s.parentNode.insertBefore(ga, s);
//})();
// ********************************************Listing JavaScript**************************************************************************

setTimeout("$('#flash_notices').html(' ');", 10000);

function hudMsg(type, message, timeOut) {

    $('.hudmsg').remove();

    if (!timeOut) {
        timeOut = 3000;
    }

    var timeId = new Date().getTime();

    if (type != '' && message != '') {

        $('<div class="hudmsg ' + type + '" id="msg_' + timeId + '"><img src="/assets/msg_' + type + '.png" alt="" />' + message + '</div>').hide().appendTo('body').fadeIn();

        var timer = setTimeout(
            function () {
                $('.hudmsg#msg_' + timeId + '').fadeOut('slow', function () {
                    $(this).remove();
                });
            }, timeOut
        );
    }
}
//
//
function trunk_fun(id) {

    if ($("#" + id).attr("class") == "modify-trunk-gray-table") {

        $(".modify-trunk-gray-table").each(function () {

            $(this).css("backgroundColor", "#616161");

        });

        $(".modify-trunk-light-grey-table").each(function () {

            $(this).css("backgroundColor", "#BFBFBF");

        });

        $("#" + id).css("backgroundColor", "#5B815B");

    }

    else if ($("#" + id).attr("class") == "modify-trunk-light-grey-table") {

        $(".modify-trunk-light-grey-table").each(function () {

            $(this).css("backgroundColor", "#BFBFBF");

        });

        $(".modify-trunk-gray-table").each(function () {

            $(this).css("backgroundColor", "#616161");

        });

        $("#" + id).css("backgroundColor", "#5B815B");

    }

    $('#trunk_id').val(id);

}

function my_fun(id) {

    $(".previous").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#carrier_id').val(id);

}
function admin_fun(id) {
    $(".previous").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#user_id').val(id);
}

function admin_select(id) {
    $(".admin-select").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#user_id').val(id);
}

function country_select(id, name, code, obj) {
    $("#modify_desti_btn").fadeOut('slow')
    $('.shadow').show();
    $('.ajax_loader').show();
    var new_id = $(obj).attr('id');
    $(".country_select").each(function () {
        var this_id = $(this).attr('id');
        if (this_id == new_id) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }

    });
    $('#destination_partial').fadeIn("slow");
    $('#country_destination_name').val("");
    $('#country_us_destination').val("");
    $(".country-select").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#country_" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#country_id').val(id);
    $('#country_name').val(name);
    if (code != 1 || name == "Canada") {
        var container = $("#destination_div");
        $.ajax({

            url:'/mycarriers/get_destination?id=' + id,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {

                container.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });
        var container1 = $("#code_div");
        $.ajax({
            url:'/mycarriers/get_code?id=' + 0,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container1.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });
        var container2 = $("#code_div_y");
        $.ajax({
            url:'/mycarriers/get_code_usa_y?id=' + 0,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container2.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });

        $("#dest_div1").css("display", "none");
        $("#dest_div").css("display", "block");
        $("#add_code_div1").css("display", "none");
        $("#add_code_div").css("display", "block");

    } else {
        var container = $("#destination_div");
        $.ajax({
            url:'/mycarriers/get_destination_usa?id=' + id,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });
        var container1 = $("#code_div");
        $.ajax({
            url:'/mycarriers/get_code_usa?id=' + 0,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container1.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });
        var container2 = $("#code_div_y");
        $.ajax({
            url:'/mycarriers/get_code_usa_y?id=' + 0,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container2.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });

        $("#dest_div").css("display", "none");
        $("#dest_div1").css("display", "block");
        $("#add_code_div").css("display", "none");
        $("#add_code_div1").css("display", "block");

    }
}

function destination_select(id, code, name, obj) {
    $("#modify_desti_btn").fadeIn('slow')
    $('.shadow').show();
    $('.ajax_loader').show();
    var new_id = $(obj).attr('id');
    $(".destination_select").each(function () {
        var this_id = $(this).attr('id');
        if (this_id == new_id) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }

    });
    $('#code_partial').fadeIn("slow");
    $('#country_destination_name').val(name);
    $('#country_us_destination').val(name);
    $('#destination_id').val(id.split('_')[1]);
    var container = $("#code_div");
    if (code != 1) {
        $.ajax({
            url:'/mycarriers/get_code?id=' + id.split('_')[1] + "&country_id=" + code,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container.html(data.html);
                if (test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle)")) {
                    test.uniform();
                }
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });
    } else {
        $.ajax({
            url:'/mycarriers/get_code_usa?id=' + id.split('_')[1] + "&country_id=" + code,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container.html(data.html);
                if (test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle)")) {
                    test.uniform();
                }
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                window.location.reload();
            }
        });
        var container1 = $("#code_div_y");
        $.ajax({
            url:'/mycarriers/get_code_usa_y?id=' + 0,
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container1.html(data.html);
                if (test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle)")) {
                    test.uniform();
                }
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                // window.location.reload();
            }
        });
    }
}

function code_select(id, code) {
    $('#code_y_partial').fadeIn("slow");
    $('.shadow').show();
    $('.ajax_loader').show();
    var name = $('#country_name').val();
    $(".code-select").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#code_id').val(id.split('_')[1]);
    var container = $("#code_div_y");
    if (code == 1 && name == "United States") {
        $.ajax({
            url:'/mycarriers/get_code_usa_y?id=' + id.split('_')[1],
            type:'get',
            dataType:'json',
            processData:false,
            success:function (data) {
                container.html(data.html);
                $('.shadow').hide();
                $('.ajax_loader').hide();
            },
            error:function (data) {
                // window.location.reload();
            }
        });
    }
    else {
        $('.shadow').hide();
        $('.ajax_loader').hide();
    }
}

function code_y_select(id) {
    $(".code-select1").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
}

function delete_admin() {
//   alert($('#user_id').val())
//    if (($('#user_id').val() == " ") || ($('#user_id').val() == undefined) || ($('#user_id').val() == '{:id=>"user_id"}')) {
//        apprise("Select admin from the list");
//        return;
//    }
    apprise("Are you sure you want to delete admin?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#admin_div");
            var id;
            id = $('#user_id').val();
            $.ajax({
                url:'/administrator/delete_admin?id=' + id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Admin Deleted.');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function remove_phone(id) {
    apprise("Are you sure you want to delete Noc Phone Number?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#phone");
            $.ajax({
                url:'/subscribers/remove_phone?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'Phone Deleted.');
                }
            });
        }
    });
}

function disable_carrier() {
    if (isNaN($('#carrier_id').val())) {
        apprise("Select carrier from the list");
        return;
    }
    apprise("Are you sure you want to disable this carrier?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#carriers_show");
            var id;
            id = $('#carrier_id').val();
            $.ajax({
                url:'/mycarriers/disable_carrier?id=' + id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Carrier Disabled.');
//                window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function enable_carrier() {
    if (isNaN($('#carrier_id').val())) {
        apprise("Select carrier from the list");
        return;
    }
    apprise("Are you sure you want to enable this carrier?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#carriers_show");
            var id;
            id = $('#carrier_id').val();
            $.ajax({
                url:'/mycarriers/enable_carrier?id=' + id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Carrier Enabled.');
//                window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function delete_carrierss() {
    if (isNaN($('#carrier_id').val())) {
        apprise("Select carrier from the list");
        return;
    }
    apprise("Are you sure you want to delete this carrier?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#carriers_show");
            var id;
            id = $('#carrier_id').val();
            $.ajax({
                url:'/mycarriers/delete_carrier?id=' + id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Carrier Deleted.');
//                    window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function modify_carrier() {
    if (isNaN($('#carrier_id').val())) {
        apprise("Select carrier from the list");
        return;
    }
    apprise("Are you sure you want to modify this carrier?", {'confirm':true}, function (r) {
        if (r) {
//            var container = $(".rightContainer");
            var id = $('#carrier_id').val();
            window.location.replace("/mycarriers/" + id + "/edit")
        }
    });
}


function delete_country(country_id) {
    apprise("Are you sure you want to delete this country?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#country_div");

            $.ajax({
                url:'/mycarriers/delete_country?id=' + country_id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Country Removed');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            var container1 = $("#destination_div");
            $.ajax({
                url:'/mycarriers/get_destination?id=' + 0,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container1.html(data.html);
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function delete_destination(destination_id) {
    apprise("Are you sure you want to delete this destination?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#destination_div");

            $.ajax({
                url:'/mycarriers/delete_destination?id=' + destination_id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Destination Removed');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function delete_destination_usa(destination_id) {
    apprise("Are you sure you want to delete this destination?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#destination_div");

            $.ajax({
                url:'/mycarriers/delete_destination_usa?id=' + destination_id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Destination Removed');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            var container1 = $("#code_div");
            $.ajax({
                url:'/mycarriers/get_code?id=' + 0,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container1.html(data.html);
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function delete_code(code_id) {
    apprise("Are you sure you want to delete this destination code?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#code_div");

            $.ajax({
                url:'/mycarriers/delete_code?id=' + code_id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Destination Code Removed');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function delete_code_usa(code_id) {
    apprise("Are you sure you want to delete this destination code?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#code_div");
            $.ajax({
                url:'/mycarriers/delete_code_usa?id=' + code_id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    hudMsg('success', 'Destination Code Removed');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            var container1 = $("#code_div_y");
            $.ajax({
                url:'/mycarriers/get_code_usa_y?id=' + 0,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data) {
                    container1.html(data.html);
                },
                error:function (data) {
                    // window.location.reload();
                }
            });
        }
    });
}

function delete_code_usa_y(code_id) {
    apprise("Are you sure you want to delete this destination code?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#code_div_y");
            $.ajax({
                url:'/mycarriers/delete_code_usa_y?id=' + code_id,
                type:'get',
                dataType:'json',
                processData:false,
                success:function (data, response) {
                    container.html(data.html);
                    hudMsg('success', 'Yth Digit Removed From Code');
                },
                error:function (data, response) {
                    // window.location.reload();
                }
            });
        }
    });
}

function del_ip_detail(id) {
    apprise("Are you sure you want to delete Trunk Ip?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#detail_ip");
            $.ajax({
                url:'/trunk_groups/remove_trunk_ip?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'IP Deleted.');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}


function edit_del_ip_detail(id) {
    apprise("Are you sure you want to delete Trunk Ip?", {'confirm':true}, function (r) {
        if (r) {
            $('.shadow').show();
            $('.ajax_loader').show();
            var container = $("#detail_ip");
            $.ajax({
                url:'/trunk_groups/edit_remove_trunk_ip?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'IP Deleted.');
                    $('.shadow').hide();
                    $('.ajax_loader').hide();
                },
                error:function (data) {
                    hudMsg('error', data.responseText);
                    $('.shadow').hide();
                    $('.ajax_loader').hide();
                }
            });
        }
    });
}

function del_blocK_list(id) {
    apprise("Are you sure you want to delete Block List?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#detail_block");
            $.ajax({
                url:'/trunk_groups/remove_block_list?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'Block list Deleted.');
                },
                error:function (data) {
                    hudMsg('error', data.responseText);
                }
            });
        }
    });
}

function del_force_route(id, number) {
    apprise("Are you sure you want to delete Force Route?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#force_route_block");
            $.ajax({
                url:'/trunk_groups/remove_force_route?id=' + id + '&number=' + number,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'Force Route Deleted.');
                },
                error:function (data) {
//                    window.location.reload();
                }
            });
        }
    });
}

function del_rule_list(id) {
    apprise("Are you sure you want to delete Rule List?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#detail_rule_list");
            $.ajax({
                url:'/trunk_groups/remove_rule_list?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'Rule list Deleted.');
                },
                error:function (data) {

                }
            });
        }
    });
}


function edit_del_rewrite_detail(id) {
    apprise("Are you sure you want to delete Trunk Rewrite Rule?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#detail_rewrite");
            $.ajax({
                url:'/trunk_groups/edit_remove_rewrite_rule?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'Rewrite Rule Deleted.');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function del_rewrite_detail(id) {
    apprise("Are you sure you want to delete Trunk Rewrite Rule?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#detail_rewrite");
            $.ajax({
                url:'/trunk_groups/remove_rewrite_rule?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    hudMsg('success', 'Rewrite Rule Deleted.');
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function disable_trunk_group() {

    var id = $("#trunk_id").val();
    if (isNaN(id) || id == " ") {
        apprise("Please Select Trunk Group.");
    }
    else {
        apprise("Are you sure you want to disable this Trunk Group?", {'confirm':true}, function (r) {
            if (r) {
                var container = $("#trunk_detail");
                var id;
                id = $('#trunk_id').val();
                $.ajax({
                    url:'/trunk_groups/disable_trunk_group?id=' + id,
                    type:'get',
                    dataType:'json',
                    processData:false,
                    success:function (data) {
                        container.html(data.html);
                        //window.location.reload();
                        hudMsg('success', 'Trunk Group Disabled.');
                    },
                    error:function (data) {
                        window.location.reload();
                    }
                });
            }
        });
    }
}


function enable_trunk_group() {
    var id = $("#trunk_id").val();
    if (isNaN(id) || id == " ") {
        apprise("Please Select Trunk Group.");
    }
    else {
        apprise("Are you sure you want to enable this Trunk Group?", {'confirm':true}, function (r) {
            if (r) {
                var container = $("#trunk_detail");
                $.ajax({
                    url:'/trunk_groups/enable_trunk_group?id=' + id,
                    type:'get',
                    dataType:'json',
                    processData:false,
                    success:function (data) {
                        container.html(data.html);

                        hudMsg('success', 'Trunk Group Enabled.');
                    },
                    error:function (data) {
                        window.location.reload();
                    }
                });
            }
        });
    }
}

function modify_trunk_group() {
    var id = $("#trunk_id").val();
    if (isNaN(id) || id == " ") {
        apprise("Please Select Trunk Group.");
    }
    else {
        apprise("Are you sure you want to modify this Trunk Group?", {'confirm':true}, function (r) {
            if (r) {
                var id;
                id = $('#trunk_id').val();
                window.location.replace("/trunk_groups/" + id + "/edit")
            }
        });
    }
}

function delete_trunk_group() {
    var id = $("#trunk_id").val();
    if (isNaN(id) || id == " ") {
        apprise("Please Select Trunk Group.");
    }
    else {
        apprise("Are you sure you want to delete this Trunk Group?", {'confirm':true}, function (r) {
            if (r) {
                var container = $("#trunk_detail");
                var id;
                id = $('#trunk_id').val();
                $.ajax({
                    url:'/trunk_groups/delete_trunk_group?id=' + id,
                    type:'get',
                    dataType:'html',
                    processData:false,
                    success:function (data) {
                        container.html(data);
                        hudMsg('info', 'Trunk Group Deleted.');
                    },
                    error:function (data) {
                        window.location.reload();
                    }
                });
            }
        });
    }
}


function ratesheet_select(id) {
    $("#flag").val(id);
    $("#d_link").val(id);
    $(".ratesheet-select").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#rate_id').val(id.split('_')[1]);
}


$(document).ready(function () {

    $("#trunk_id").val(" ");
    $("#flag").val("");
    $('#t_dest_id').val("");
//
    $("#direction_order").change(function () {
        var trial = $("#direction_order option:selected").text();
        if (trial == "Originating") {
            $(".sheet-dynamic").show();
            $(".sheet-dynamic-orig").show();
            $("#poi_checkbox_id").show();
            $(".msg-display").show();
            $("#state_dropdown").show();
            $("#ani-portion").show();
            $("#lower-portion").show();
            $("#lower-portion-force").show();
            $("#npdi-number").hide();
        }
        else if (trial == "Terminating") {
            $(".sheet-dynamic").hide();
            $(".sheet-dynamic-orig").hide();
            $("#poi_checkbox_id").hide();
            $(".msg-display").hide();
            $("#state_dropdown").hide();
            $("#ani-portion").hide();
            $("#lower-portion").hide();
            $("#lower-portion-force").hide();
            $("#npdi-number").show();
        }
        else if (trial == "Direction Type") {
            $(".sheet-dynamic").hide();
            $(".sheet-dynamic-orig").hide();
            $("#poi_checkbox_id").hide();
            $(".msg-display").hide();
            $("#state_dropdown").hide();
            $("#ani-portion").hide();
            $("#lower-portion").hide();
            $("#lower-portion-force").hide();
            $("#npdi-number").hide();
            apprise("Please Select Direction.");
        }
        if ($("#trunk_group_poi_enabled").is(":checked") && trial == "Originating") {
            $("#state_dropdown").show();
        } else {
            $("#state_dropdown").hide();
        }
    });

    $("#payment-dropdown").change(function () {
        var trial = $("#payment-dropdown option:selected").text();
        if (trial == "Select Payment Type" || trial == "Credit Card") {
            $(".text_field_hide_show").hide();
        }
        else {
            $(".text_field_hide_show").show();
        }

    });

    $("#originator").change(function () {
        var trial = $("#originator option:selected").text();
        var container = $("#orig_destination");
        $("#trunk_idss").val($("#originator option:selected").val());

        if (trial == "Select Originator") {
            $("#country_reported").hide();
            $("#usa_canada_dest").hide();
        }
        else {
            $.ajax({
                url:'/reportings/show_originator_destinations?id=' + $("#trunk_idss").val(),
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    $("#country_reported").show();
                },
                error:function (data) {
                    window.location.reload();
                }
            });

        }

    });


    $("#terminator").change(function () {
        var trial = $("#terminator option:selected").text();
        $("#trunk_id_t").val($("#terminator option:selected").val());
        $("#terminator_trunk_id").val($("#terminator").val());
        var container = $("#term_destination");
        if (trial == "Select Terminator") {
            $("#country_ter").hide();
            $("#usa_canada_dest_ter").hide();
        }
        else {
            $.ajax({
                url:'/reportings/show_terminator_destinations?id=' + $("#terminator_trunk_id").val(),
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                    $("#country_ter").show();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }

    });
//
//
////    $("#usa_canada_dest").change(function () {
////        alert("ok");
////        var trial = $("#usa_canada_dest option:selected").text();
////        if (trial == "Select NPA") {
////        }
////        else {
////            alert("ok");
////            var container = $("#desti");
////            $.ajax({
////                url:'/reportings/get_originator_country_destination?trial=' + trial,
////                type:'get',
////                dataType:'html',
////                processData:false,
////                success:function (data) {
////                    container.html(data);
////                }
////            });
////        }
////
////    });
//
    $("#country_reported").change(function () {
        var container = $("#usa-canada");
        var trial = $("#country_reported option:selected").text();
        if (trial == "Select Country") {
            $("#usa_canada_dest").hide();
        }
        else if (trial == "Canada") {
            $.ajax({
                url:'/reportings/show_destination?id=' + "Canada",
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            $("#usa_canada_dest").show();
        }
        else if (trial == "United States") {
            $.ajax({
                url:'/reportings/show_destination?id=' + "United States",
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            $("#usa_canada_dest").show();
        }
        else {
            $("#usa_canada_dest").hide();
        }

    });

    $("#country_ter").change(function () {
        var container = $("#usa-canada");
        var trial = $("#country_ter option:selected").text();
        if (trial == "Select Country") {
            $("#usa_canada_dest_ter").hide();
        }
        else if (trial == "Canada") {
            $.ajax({
                url:'/reportings/show_destination_ter?id=' + "Canada",
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            $("#usa_canada_dest_ter").show();
        }
        else if (trial == "United States") {
            $.ajax({
                url:'/reportings/show_destination_ter?id=' + "United States",
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data);
                },
                error:function (data) {
                    window.location.reload();
                }
            });
            $("#usa_canada_dest_ter").show();
        }
        else {
            $("#usa_canada_dest_ter").hide();
        }

    });


    $("#terminator_carrier_id").change(function () {
        var trial = $("#terminator_carrier_id option:selected").text();
        //  alert(trial);

    });

    $('#black_list_id').val = "";
    $('#routing_id').val = "";


});

function financial_pdf_generate(id) {
    $(".previous").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#carrier_id').val(id);
}

function daily_terminator_selection(id) {

    $(".daily-terminator-select").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#daily-terminator-select').val(id);
}


function daily_originator_selection(id) {

    $(".daily-originator-select").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#daily-originator-select').val(id);
}


function delete_black_list_rule(id) {
    apprise("Are you sure you want to delete black list rule?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#rule_list");
            $.ajax({
                url:'/routings/delete_black_list_rule?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    container.html(data.html);
                    window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function select_routing(id) {

    $(".routing_list").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#routing_id').val(id);
}

function disable_routing(id) {

    if (isNaN($('#routing_id').val())) {
        apprise("Select routingPlan from the list");
        return;
    }
    apprise("Are you sure you want to disable this routing plan?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#display_sub");
            var id;
            id = $('#routing_id').val();
            $.ajax({
                url:'/routings/disable_routing_plan?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    hudMsg('success', 'Routing Disabled.');
                    window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function enable_routing(id) {

    if (isNaN($('#routing_id').val())) {
        apprise("Select routingPlan from the list");
        return;
    }
    apprise("Are you sure you want to enable this routing plan?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#display_sub");
            var id;
            id = $('#routing_id').val();
            $.ajax({
                url:'/routings/enable_routing_plan?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    hudMsg('success', 'Routing Enabled.');
                    window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function delete_routing(id) {

    if (isNaN($('#routing_id').val())) {
        apprise("Select routingPlan from the list");
        return;
    }
    apprise("Are you sure you want to delete this routing plan?", {'confirm':true}, function (r) {
        if (r) {
            var container = $("#display_sub");
            var id;
            id = $('#routing_id').val();
            $.ajax({
                url:'/routings/delete_routing_plan?id=' + id,
                type:'get',
                dataType:'html',
                processData:false,
                success:function (data) {
                    hudMsg('success', 'Routing Deleted.');
                    window.location.reload();
                },
                error:function (data) {
                    window.location.reload();
                }
            });
        }
    });
}

function modify_routing() {

    if (isNaN($('#routing_id').val())) {
        apprise("Select routingPlan from the list");
        return;
    }
    var id = $('#routing_id').val();
    window.location.replace("/routings/modify_route_plan?id=" + id)

}

$("#rewrite_btn").click(function () {
    if (!jQuery("#add_rewrite_form").valid()) {
        return false;
    }
    else {
        var container = $("#detail_rewrite");
        $("#add_rewrite_form").submit(function () {
            $(this).unbind('submit').ajaxSubmit({
                success:function (data) {
                    container.html(data);
                },
                error:function (data) {
                    window.location.reload();
                }
            })
        });
    }
});

function select_terminator_destination(id, code) {
    $(".previous").children().each(function () {
        $(this).removeClass("color_class");
    });
    $("#" + id).children().each(function () {
        $(this).addClass("color_class");
    });
    $('#t_dest_id').val(id);
    $('#daily_code_id').val(code);
}

function daily_terminator_graph() {
    if (isNaN($('#t_dest_id').val())) {
        apprise("Please Select Destination");
        return;
    }

    else {
        apprise("Are you sure you want to generate graph?", {'confirm':true}, function (r) {
            if (r) {
                window.open("daily_terminator_graph?trunk_id=" + $("#trunk_id_t").val() + "&code_id=" + $("#daily_code_id").val(), "_blank");
            }
        });
    }

}

function daily_originator_graph() {
    if (isNaN($('#t_dest_id').val())) {
        apprise("Please Select Destination");
        return;
    }

    else {
        apprise("Are you sure you want to generate graph?", {'confirm':true}, function (r) {
            if (r) {
                //window.location.replace("daily_originator_graph?dest_id=" + $('#t_dest_id').val());
                window.open("daily_originator_graph?trunk_id=" + $("#trunk_idss").val() + "&code_id=" + $("#daily_code_id").val(), "_blank");
            }
        });
    }

}

$.fn.multiSelect = function (o) {
    var defaults = {
        multiselect:true,
        selected:'color_class',
        filter:' > *',
        unselectOn:false,
        keepSelection:true,
        list:$(this).selector,
        e:null,
        element:null,
        start:false,
        stop:false,
        unselecting:false
    }
    return this.each(function (k, v) {
        var options = $.extend({}, defaults, o || {});
        // selector - parent, assign listener to children only
        $(document).on('mousedown', options.list + options.filter, function (e) {
            if (e.which == 1) {
                if (options.handle != undefined && !$(e.target).is(options.handle)) {
                    // TODO:
                    // keep propagation?
                    // return true;
                }
                options.e = e;
                options.element = $(this);
                multiSelect(options);
            }
            return true;
        });

        if (options.unselectOn) {
            // event to unselect

            $(document).on('mousedown', options.unselectOn, function (e) {
                if (!$(e.target).parents().is(options.list) && e.which != 3) {
//                        $(options.list + ' .' + options.selected).removeClass(options.selected);
                    if (options.unselecting != false) {
                        options.unselecting();
                    }
                }
            });

        }

    });


}

function multiSelect(o) {

    var target = o.e.target;
    var element = o.element;
    var list = o.list;

    if ($(element).hasClass('ui-sortable-helper')) {
        return false;
    }

    if (o.start != false) {
        var start = o.start(o.e, $(element));
        if (start == false) {
            return false;
        }
    }

    if (o.e.shiftKey && o.multiselect) {
        // get one already selected row
        $(element).addClass(o.selected);
        first = $(o.list).find('.' + o.selected).first().index();
        last = $(o.list).find('.' + o.selected).last().index();

        // if we hold shift and try to select last element that is upper in the list
        if (last < first) {
            firstHolder = first;
            first = last;
            last = firstHolder;
        }

        if (first == -1 || last == -1) {
            return false;
        }


        $(o.list).find('.' + o.selected).removeClass(o.selected);

        var num = last - first;
        var x = first;

        for (i = 0; i <= num; i++) {
            $(list).find(o.filter).eq(x).addClass(o.selected);
            x++;
        }
    }
    else if ((o.e.ctrlKey || o.e.metaKey) && o.multiselect) {
        // reset selection
        if ($(element).hasClass(o.selected)) {
            $(element).removeClass(o.selected);
        } else {
            $(element).addClass(o.selected);
        }
    }
    else {
        // reset selection
//
        if (o.keepSelection && !$(element).hasClass(o.selected)) {
            $(list).find('.' + o.selected).removeClass(o.selected);
            $(element).addClass(o.selected);
        } else {
            $(list).find('.' + o.selected).removeClass(o.selected);
            $(element).addClass(o.selected);
        }

    }

    if (o.stop != false) {
        o.stop($(list).find('.' + o.selected), $(element));
    }

}
//
function no_show_for_all(obj) {
    var _value = $("#trunk_group_block_drop_down option:selected").text();
    if (_value == "ALL") {
        $('#trunk_group_block_blockdigs').hide();
        $('#trunk_group_block_blockdigs').attr('value', null);
    }
    else {
        $('#trunk_group_block_blockdigs').show();
    }

}





















































































































