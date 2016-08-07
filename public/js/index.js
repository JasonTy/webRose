/*计算rem*/
var width=$("body").width();
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 1920) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(window).resize(function(){
    history.go(0);
})
$(".greet_box").css({"max-height":width});
var width=$(".name").width();
$(".name").css({height:width});
$(".name").css({"line-height":width-13+"px"});
$(".name_greet").css({"line-height":$('.name_greet').width()/6+"px"});
var baomingh=$(".baoming").css('width');
$(".baoming").css({height:baomingh,'line-height':baomingh});
/**/
$(".ft_center li>img").each(function(index,obj){
    $(this).on("mouseover click",function(){
        $(this).parent().find(".zhezhao").show()
    })
    $(this).on("mouseout",function(){
        $(this).parent().find(".zhezhao").hide()
    })
})

$(".submit").click(function(){
    var flag=true;
    $("input").each(function(index,obj){
        if($(this).val()==""){
            flag=false;
            $(".alert").html('有选项未填！');
            return false;
        }else{
            if(index==2&&!(/^1[34578][0-9]{9}$/g.test($(this).val()))){
                flag=false;
                $(".alert").html('手机号错误！');
                return false;
            }
            if(index==3&&!(/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/g.test($(this).val()))){
                flag=false;
                $(".alert").html('邮箱错误！');
                return false;
            }
        }
        flag=true;
    })
    if(flag){
        $(".alert").html('');
        $.ajax({
            url:'http://xiaokacoin.com/save.php',
            type:'post',
            data:{name:$("input[id='name']").val(),company:$("input[id='gs']").val(),phone:$("input[id='tel']").val(),email:$("input[id='email']").val()},
            success:function(data){
              
                if(data=='true'){
                    $(".alert").html('提交成功！')
                }else{
                    $(".alert").html('提交失败！')
                }
            }
        })
    }
})
