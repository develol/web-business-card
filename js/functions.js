///////////////////
//// FUNCTIONS ////
///////////////////
function mobile() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function age_count(date) {
    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    now = now.toISOString().substr(0, 19).replace('T',' ');
    var age = now.substr(0, 4) - date.substr(0, 4);
    if(now.substr(5) < date.substr(5)) --age;
    return age;
}

function r_color(n1=0,n2=0, wc=''){
    if((getComputedStyle(document.documentElement).getPropertyValue('--first_color')=='#111111')&&(n2==0)){
        var wc=1;
        document.getElementById('page_3_1').style.background='rgba(128,128,128, 0.45)';
        document.getElementById('page_3_1i').style.opacity='0.45';
        document.getElementById('page_3_1_1').style.opacity='0.6';
    }
    if((getComputedStyle(document.documentElement).getPropertyValue('--first_color')=='#eeeeee')&&(n2==0)){
        var wc=0;
        document.getElementById('page_3_1').style.background='rgba(128,128,128, 0.15)';
        document.getElementById('page_3_1i').style.opacity='0.15';
        document.getElementById('page_3_1_1').style.opacity='0.3';
    }
    setTimeout(function (){
        if(wc==0){
            var w_color1 = ['e', 'c', 'a', '8', '6', '4', '2', '1'];
            var w_color2 = ['1', '3', '5', '7', '9', 'b', 'd', 'e'];
        }
        if(wc==1){
            var w_color1 = ['1', '3', '5', '7', '9', 'b', 'd', 'e'];
            var w_color2 = ['e', 'c', 'a', '8', '6', '4', '2', '1'];
        }
        document.documentElement.style.setProperty('--first_color', 
            '#'+w_color1[n1]+w_color1[n2]+w_color1[n1]+w_color1[n2]+w_color1[n1]+w_color1[n2]
        );
        document.documentElement.style.setProperty('--second_color', 
            '#'+w_color2[n1]+w_color2[n2]+w_color2[n1]+w_color2[n2]+w_color2[n1]+w_color2[n2]
        );
        n2++;
        if(n2==w_color1.length){
            n2=0;
            n1++;
        }
        if(n1<w_color1.length){
            r_color(n1,n2,wc);
        }
    }, 1);
}
// 
function p_show(num){
    r_color();
    document.getElementById('title').innerHTML=mname[num-1];
    setTimeout(function (){
        document.getElementById('page_'+num).classList.add('p_show');
        document.getElementById('page_'+num).style.zIndex = 5; 
    }, 640);
    for(var i=1; i<4; i++){
        if(i!=num){
            document.getElementById('page_'+i).classList.remove('p_show');
            document.getElementById('page_'+i).style.zIndex = 0; 
        }
    }
}
//
function radToDeg(rad){
    return rad/Math.PI * 180;
}
//
function menuEl(num){
    document.getElementById('menu_el'+num).style.color = 'var(--second_color)'; 
    setTimeout(function (){
        document.getElementById('menu_el'+num).style.left = '-'+(
            document.getElementById('menu_el'+num).offsetWidth*1
            -getComputedStyle(document.documentElement).getPropertyValue('--me1_pr')*1
        )+'px';
        document.getElementById('menu_el'+num).style.color = 'var(--first_color)'; 
    }, 768);
}
//
function load(tp){
    let wd=document.body.clientWidth;
    let hg=document.body.clientHeight;
    if((wd/hg)<1.62){
        hg=wd*0.61
    }
    if((wd/hg)>2.1){
        wd=hg*2.1
    }
    let kw = wd/1366;
    let kh = hg/666;
    document.documentElement.style.setProperty('--height', hg);
    document.documentElement.style.setProperty('--width', wd);
    for(var key in dstl){
        document.documentElement.style.setProperty('--'+key, (dstl[key]*((kw+kh)/2)));
    }
    for(var key in wstl){
        document.documentElement.style.setProperty('--'+key, (wstl[key]*kw));
    }
    for(var key in hstl){
        document.documentElement.style.setProperty('--'+key, (hstl[key]*kh));
    }
    let an=Math.atan(kw/kh)*-1;
    let r3=Math.sqrt((kw*kw+kh*kh)/2)*hstl['pbe3_hg'];
    let r4=Math.sqrt((kw*kw+kh*kh)/2)*hstl['pbe4_hg'];
    document.documentElement.style.setProperty('--pbe3_tr', radToDeg(an));
    document.documentElement.style.setProperty('--pbe4_tr', radToDeg(an));
    document.documentElement.style.setProperty('--pbe3_hg', r3);
    document.documentElement.style.setProperty('--pbe4_hg', r4);
    if((document.body.clientHeight-hg)>(document.getElementById('bottom_text').offsetHeight*2)){
        document.getElementById('bottom_text').style.display = 'block';
        document.documentElement.style.setProperty('--bt_tp', (
            hg+(document.body.clientHeight-(
                getComputedStyle(document.documentElement).getPropertyValue('--pbe6_tp')*1+
                getComputedStyle(document.documentElement).getPropertyValue('--pbe6_hg')*1+
                getComputedStyle(document.documentElement).getPropertyValue('--pbe1_tp')*1
            )-document.getElementById('bottom_text').offsetHeight)/2
        ));
    }else{
        document.getElementById('bottom_text').style.display = 'none';
    }
    if((document.body.clientWidth-wd)>(document.getElementById('right_text').offsetWidth*2)){
        document.getElementById('right_text').style.display ='block';
        document.documentElement.style.setProperty('--rt_tp', (
            wd+(document.body.clientWidth-(
                getComputedStyle(document.documentElement).getPropertyValue('--pbe5_lt')*1+
                getComputedStyle(document.documentElement).getPropertyValue('--pbe5_wd')*1+
                getComputedStyle(document.documentElement).getPropertyValue('--pbe2_lt')*1
            )-document.getElementById('right_text').offsetWidth)/2
        ));
    }else{
        document.getElementById('right_text').style.display = 'none';
    }
    document.documentElement.style.setProperty('--pbe3_tp', (
        getComputedStyle(document.documentElement).getPropertyValue('--pbe1_tp')-
        ((r3/2)-((r3/2)*Math.cos(an*-1)))
    )+(getComputedStyle(document.documentElement).getPropertyValue('--pbe_br')/2));
    document.documentElement.style.setProperty('--pbe4_tp', (
        (
            (
                getComputedStyle(document.documentElement).getPropertyValue('--pbe2_tp')*1+
                getComputedStyle(document.documentElement).getPropertyValue('--pbe2_hg')*1
            )-
            (
                (r4/2)-
                ((r4/2)*Math.cos(an*-1))
            )
        )-(getComputedStyle(document.documentElement).getPropertyValue('--pbe_br'))
    ));
    if(tp==1){
        for(var i=1; i<4; i++){
            if(load_st[i-1]==1){
                menuEl(i);
            }  
        }
    }
}
//
function page_first_1(){
    let x = document.getElementsByClassName('page_border_el');
    for (let i = 0; i < x.length; i++) {
        x[i].style.opacity = '1';
    }
    page_first_2();
} 
//
function page_first_2(){
    tit0 = new TypeIt("#page_first_line", {
        strings: [  '<b class="font64"><a class="third_color">K</a>rekhalev <a class="third_color">V</a>sevolod</b>', 
                    '<b class="font42">SW/HW Engineer <a class="third_color">&&</a> SW/HW Developer</b>', 
                    '&nbsp;&nbsp;&nbsp;',
                    '&nbsp;&nbsp;&nbsp;<a class="img_ico">B</a> <a title="Click to write" class="lnk" href="mailto:work@deve.lol">work<b class="third_color">@</b>deve.lol</a>',
                    '&nbsp;&nbsp;&nbsp;<a class="img_ico">G</a> <a title="Click to open" class="lnk" href="https://www.instagram.com/lokerdlife/">lokerdlife</a>',
                    '&nbsp;&nbsp;&nbsp;<a class="img_ico">C</a> <a title="Click to copy" class="lnk" id="siteLink" onclick="copy_lnk();">www.deve.lol</a>'],
        afterComplete: (instance) => {
            if(!mobile()){
                page_first_menu(1);
            }           
            for(var i=2; i<4; i++){
                document.getElementById('page_'+i).style.display = 'unset'; 
            }
        },
        speed:tit_time,
        nextStringDelay: nsd_time 
    }).go();
}  
//
function page_first_menu(num){  
    document.getElementById('menu_el'+num).classList.toggle('move_to');        
    menuEl(num);      
    setTimeout(function (){
        document.getElementById('menu_el'+num).classList.toggle('move_to');
        if(num!=3){
            page_first_menu(num+1);
        }
        load_st[num-1]=1;
        document.getElementById('title').innerHTML=mname[0];
    }, 2048);
}
//
function copy_lnk(){
    if(whyyy_st == 0){
        document.getElementById('to_copy').value = 'www.deve.lol';
        let res = to_copy('Link');
        whyyy_st = 1;
        tit1 = new TypeIt("#siteLink", {
            startDelete: true, 
            afterComplete: (instance) => {
                whyyy_st = 0;                                          
            },
            speed:tit_time,
            cursor: false,
            nextStringDelay: nsd_time 
        })
        .exec(async () => {
            document.getElementById('siteLink').style.textDecoration = 'unset';
        })
        .type(res)
        .pause(2048)
        .delete(res.length)
        .exec(async () => {
            document.getElementById('siteLink').style.textDecoration = 'underline';
        })
        .type("www.deve.lol")
        .go();
    }
}
//
function to_copy(text='Text'){
    document.getElementById('to_copy').select();
    let ret;
    try {  
        var successful = document.execCommand('cut');  
        var msg = successful ? 'copied.' : 'was not copied.';  
        ret = text+' ' + msg;  
    } catch(err) {  
        ret = 'Oops, unable to copy '+text+'...';  
    }  
    return ret;
}
//
function move_page_2(){
    setTimeout(function (){
        let date = new Date().getFullYear();
        document.getElementById('page_2_1').style.width='calc(var(--mp2_wd) * 1px)'; //867 
        document.getElementById('page_2_2').style.width='calc(var(--mp2_wd) * 1px)'; 
        document.getElementById('page_2_3').style.width='calc(var(--mp2_wd) * 1px)'; 
        document.getElementById('page_2_1').style.height='calc(var(--mp2_hg) * 1px)'; //190 
        document.getElementById('page_2_2').style.height='calc(var(--mp2_hg) * 1px)'; 
        document.getElementById('page_2_3').style.height='calc(var(--mp2_hg) * 1px)'; 

        document.getElementById('page_2_1').style.left='calc(var(--mp21_lt) * 1px)'; //32
        document.getElementById('page_2_2').style.left='calc(var(--mp22_lt) * 1px)'; //467 
        document.getElementById('page_2_3').style.left='calc(var(--mp23_lt) * 1px)'; //32
        document.getElementById('page_2_1').style.top='calc(var(--mp21_tp) * 1px)'; //32
        document.getElementById('page_2_2').style.top='calc(var(--mp22_tp) * 1px)'; //238
        document.getElementById('page_2_3').style.top='calc(var(--mp23_tp) * 1px)'; //444

        document.getElementById('page_2_1_1').style.width='calc(var(--mp21_wd) * 1px)'; //96
        document.getElementById('page_2_2_1').style.width='calc(var(--mp21_wd) * 1px)'; 
        document.getElementById('page_2_3_1').style.width='calc(var(--mp21_wd) * 1px)'; 
        document.getElementById('page_2_1_1').style.height='calc(var(--mp21_hg) * 1px)'; //96
        document.getElementById('page_2_2_1').style.height='calc(var(--mp21_hg) * 1px)'; 
        document.getElementById('page_2_3_1').style.height='calc(var(--mp21_hg) * 1px)'; 
        document.getElementById('page_2_1_1').style.fontSize='calc(var(--mp21_fs) * 1px)'; //96
        document.getElementById('page_2_2_1').style.fontSize='calc(var(--mp21_fs) * 1px)'; 
        document.getElementById('page_2_3_1').style.fontSize='calc(var(--mp21_fs) * 1px)';

        document.getElementById('page_2_1_2').style.width='calc(var(--mp22_wd) * 1px)'; //677 
        document.getElementById('page_2_2_2').style.width='calc(var(--mp22_wd) * 1px)'; 
        document.getElementById('page_2_3_2').style.width='calc(var(--mp22_wd) * 1px)'; 
        document.getElementById('page_2_1_2').style.height='calc(var(--mp22_hg) * 1px)'; //182
        document.getElementById('page_2_2_2').style.height='calc(var(--mp22_hg) * 1px)'; 
        document.getElementById('page_2_3_2').style.height='calc(var(--mp22_hg) * 1px)'; 

        document.getElementById('page_2_1_2a').innerHTML= date-2015;
        document.getElementById('page_2_2_2a').innerHTML= date-2016; 
        document.getElementById('page_2_3_2a').innerHTML= date-2017; 
         
    }, 1024);
}
//
function move_page_3(){
    setTimeout(function (){
        document.getElementById('page_3_1_1').style.top = 'calc(var(--pg311_tp) * 1px)';
        document.getElementById('page_3_1_1').style.left = 'calc(var(--pg311_lt) * 1px)';
        document.getElementById('page_3_1_1').style.width = 'calc(var(--pg311_wd) * 1px)';
        document.getElementById('page_3_1_1').style.height = 'calc(var(--pg311_hg) * 1px)';

        document.getElementById('page_3_1_2').style.top = 'calc(var(--pg312_tp) * 1px)';
        document.getElementById('page_3_1_2').style.left = 'calc(var(--pg312_lt) * 1px)';
        
        document.getElementById('page_3_1_3').style.top = 'calc(var(--pg313_tp) * 1px)';
        document.getElementById('page_3_1_3').style.left = 'calc(var(--pg313_lt) * 1px)';

        document.getElementById('page_3_1_4').style.top = 'calc(var(--pg311_tp) * 1px)';
        document.getElementById('page_3_1_4').style.left = 'calc(var(--pg311_lt) * 1px)';
        document.getElementById('page_3_1_4').style.width = 'calc(var(--pg314_wd) * 1px)';
        document.getElementById('page_3_1_4').style.height = 'calc(var(--pg314_hg) * 1px)';

        document.getElementById('page_3_1_5').style.top = 'calc(var(--pg315_tp) * 1px)';
        document.getElementById('page_3_1_5').style.left = 'calc(var(--pg311_lt) * 1px)';
        document.getElementById('page_3_1_5').style.width = 'calc(var(--pg315_wd) * 1px)';
        document.getElementById('page_3_1_5').style.height = 'calc(var(--pg315_hg) * 1px)';

        document.getElementById('page_3_1_6').style.top = 'calc(var(--pg316_tp) * 1px)';
        document.getElementById('page_3_1_6').style.left = 'calc(var(--pg311_lt) * 1px)';
        document.getElementById('page_3_1_6').style.width = 'calc(var(--pg316_wd) * 1px)';
        document.getElementById('page_3_1_6').style.height = 'calc(var(--pg314_hg) * 1px)';

        document.getElementById('page_3_1_4_2a').innerHTML = age_count('1999-01-19 23:59:59');
    }, 1024);
}
//
function ck_browser(){
    let nVer = navigator.appVersion;
    let nAgt = navigator.userAgent;
    let browserName  = 0;
    let fullVersion  = ''+parseFloat(navigator.appVersion); 
    let majorVersion = parseInt(navigator.appVersion,10);
    let nameOffset,verOffset,ix, ret=false;

    if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
        browserName = 1;
        fullVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
        fullVersion = nAgt.substring(verOffset+8);
    }
    else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
        browserName = 2;
        fullVersion = nAgt.substring(verOffset+4);
    }
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        browserName = 3;
        fullVersion = nAgt.substring(verOffset+7);
    }
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        browserName = 4;
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1) 
        fullVersion = nAgt.substring(verOffset+8);
    }
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        browserName = 5;
        fullVersion = nAgt.substring(verOffset+8);
    }

    if ((ix=fullVersion.indexOf(";"))!=-1){
        fullVersion=fullVersion.substring(0,ix);
    }
    if ((ix=fullVersion.indexOf(" "))!=-1){
        fullVersion=fullVersion.substring(0,ix);
    }
    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion); 
        majorVersion = parseInt(navigator.appVersion,10);
    }

    if(browserName!=0){
        switch(browserName) {
        case 1:
            if(majorVersion>=42){
                ret=true;
            }
            else{
                ret=false;
            }
            break;
        case 2:
            if(majorVersion>=79){
                ret=true;
            }
            else{
                ret=false;
            }
            break;
        case 3:
            if(majorVersion>=58){
                ret=true;
            }
            else{
                ret=false;
            }
            break; 
        case 4:
            if(majorVersion>=12){
                ret=true;
            }
            else{
                ret=false;
            }
            break; 
        case 5:
            if(majorVersion>=57){
                ret=true;
            }
            else{
                ret=false;
            }
            break;   
        default:
            ret=false;
            break;
        }
    }
    else{
        ret=false;
    }

    return ret;
}
//
function nb_load(){
    let wd=document.body.clientWidth;
    let hg=document.body.clientHeight;
    let kw = wd/1366;
    let kh = hg/666;
    document.getElementById('loading').style.height = hg+'px';
    document.getElementById('loading').style.width = wd+'px';
    document.getElementById('loading_div').style.top=((hg - document.getElementById('loading_div').offsetHeight)/2)+'px';
    document.getElementById('loading_div_div').style.fontSize= (((kw+kh)/2)*27)+'px';
    document.getElementById('loading_div').style.fontSize= (((kw+kh)/2)*36)+'px';
    document.getElementById('loading_div_a').style.fontSize= (((kw+kh)/2)*72)+'px';
}