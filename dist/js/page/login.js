define(["jquery"],function(t){t("#btn").on("click",function(){var n="",o=t.trim(t(".name").val()),a=t.trim(t(".pwd").val());""===o?n="请输入账号":""===a&&(n="请输入密码"),n?t(".tip").html(n):t.ajax({url:"/loginname",type:"post",dataType:"json",data:{name:o,pwd:a},success:function(n){console.log(0),console.log(n)}})})});