// for Bookmarklet
(function(w,b,m,mb,s,d){
    d=b.data('full-screen');
    if(!d){
        b.data('full-screen',d={f:0,mH:w.height(),mbH:'100%',mM:0,sZ:2,sC:'#fff',rT:[$('#meeting-panel .root_conversation').css('top'),0,'-24px'],
            p1:function(o,p,b,t){t=o[p](),o[p](d[b]),d[b]=t},
            p2:function(o,p,b,t){t=o.css(p),o.css(p,d[b]),d[b]=t},
            M:{
                B:changeMyGroupsBadge,b:function(n){d.M.B(n);document.title=originalTitle}
            },
            x:function(){
                d.f=(d.f+1)%3;
                (changeMyGroupsBadge=d.M[d.f?'b':'B'])();
                if(d.f<2){
                    d.t=d.f?setInterval(function(){ if(mb.height()!==w.height()) mb.height(w.height()) },200) : clearInterval(d.t);
                    d.p1(m,'height','mH');
                    d.p1(mb,'height','mbH');
                    d.p2(m,'margin','mM');
                    d.p2(s,'z-index','sZ');
                    d.p2(s,'background-color','sC');
                    $('#header,#footer,#guide,#side-panel,#main-header,#main-subheader,#online-demo-support-tab,.ui-widget-header').toggle();
                }
                $('#meeting-panel .root_conversation').css('top',d.rT[d.f]);
            }
        });
        $(document).keydown(function(e){
            if(e.ctrlKey&&e.which===122)
                d.x()
        });
    }
    d.x();
})($(window),$('body'),$('#main'),$('#main-body'),$('.SWCAW'))
