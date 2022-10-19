///////////////////
//// VARIABLES ////
///////////////////
let load_st = []; //
let l_title = ""; //
let wd0=document.body.clientWidth; //
let hg0=document.body.clientHeight; //
let whyyy_st = 0; //
let tit_time = 50; //
let tit0; //
let tit1; //
let kw0 = wd0/1366; //
let kh0 = hg0/666; //
let mname = ['MAIN PAGE', 'SUMMARY', 'ABOUT ME'];
let rcb = false;
let nsd_time = 250;
//
let dstl = {
    pbe_br: 4,
    pfl_fs: 38, //32
    ii_fs: 24,
    me_fs: 32,
    ii_mg: -8,
    f64_fs: 84, //64
    f42_fs: 46, //42
    pg2_br: 4,
    pg23_pd:43,
    mp21_fs:96,
    pg2l1_fs: 24,
    pg2l2_fs: 14,
    pg2l3_fs:16,
    pg3141_fs:38,
    pg3142_fs:20,
    pg315_fs:16,
    pg3161_fs:16
}
//
let wstl = {
    pg31_plt:8,
    pg314_wd:654,
    pg315_wd:654,
    pg316_wd:538,
    pg311_lt2:1018,
    pg31_cpw102:102,
    pg31_cpw1302:1302,
    pg31_cpw1200:1200,
    pg31_cpw584:584,
    pg31_cpw670:670,
    pg31_cpw118:118,
    pg31_brw:16,
    pg313_lt:574,
    pg312_lt:1182,
    cpg31_wd:96,
    pg311_lt:600,
    pg311_wd:670,
    pg31_wd:1302,
    pg31_lt:32,
    pg2l3_mrrt:8,
    mp22_wd:677,
    mp21_wd:96,
    mp21_lt:32,
    mp22_lt:467,
    mp23_lt:32,
    mp2_wd:867,
    pg21_lt:293,
    pg22_lt:792,
    pg23_lt:103,
    pg24_lt: 186,
    pg2_wd: 217,
    pfl_lt: 192, //256
    mt_tr: 200,
    meh_tr: 200,
    ii_mr: -4,
    pbe1_wd: 1156,
    pbe1_lt: 32,
    pbe2_wd: 8,
    pbe2_lt: 32,
    pbe3_wd: 8,
    pbe3_lt: 1254,
    pbe4_wd: 8,
    pbe4_lt: 104,
    pbe5_wd: 8,
    pbe5_lt: 1326,
    pbe6_wd: 1156,
    pbe6_lt: 178,
    me1_lt: -999,
    me1_pr: 26,
    me1_pl: 26,
    me2_lt: -999,
    me2_pr: 46,
    me2_pl: 45,
    me3_lt: -999,
    me3_pr: 36,
    me3_pl: 35
}
//
let hstl = {
    pg31_ptp:8,
    pg311_tp4:59,
    pg311_tp6:566,
    pg316_tp:484,
    pg315_tp:118,
    pg314_hg:78,
    pg315_hg:350,
    pg311_tp2:300,
    pg31_cph102:102,
    pg31_cph500:500,
    pg31_cph602:602,
    pg31_cph538:538,
    pg31_cph452:452,
    pg31_cph118:118,
    pg31_btw:16,
    pg313_tp:482,
    pg312_tp:8,
    cpg31_hg:96,
    pg311_tp:32,
    pg311_hg:538,
    pg31_hg:602,
    pg31_tp:32,
    pg2l3_mrtp:8,
    pg2l3_mrbt:8,
    mp22_hg:182,
    mp21_hg:96,
    mp21_tp:32,
    mp22_tp:238,
    mp23_tp:444,
    mp2_hg:190,
    pg21_tp:103,
    pg22_tp:309,
    pg23_tp:515,
    pg24_tp: 4,
    pg2_hg: 48,
    pfl_tp: 144, //178
    me_pt: 2,
    me_pb: 2,
    me1_tp: 192,
    me2_tp: 248,
    me3_tp: 304,
    pbe1_hg: 8,
    pbe1_tp: 32,
    pbe2_hg: 456,
    pbe2_tp: 32,
    pbe3_hg: 210,
    pbe3_tp: 4,
    pbe4_hg: 210,
    pbe4_tp: 452,
    pbe5_hg: 456,
    pbe5_tp: 178,
    pbe6_hg: 8,
    pbe6_tp: 626,
    pbe6_fs: 6
}
////////////////
//// EVENTS ////
////////////////
//
window.onload = function(){
    rcb = ck_browser();
    if(rcb){
        load_st = [0,0,0];
        document.getElementById('loading').style.display = 'none';
        load(0);
        page_first_1();
        if(mobile()){
document.getElementById('bottom_text').innerHTML += '<br>Go to the site from a PC to get the full functionality.'
        }
    }
    else{
        document.getElementById('body').innerHTML = ''+
        '<div id="loading" style="position:absolute; top:0px; left:0px; z-index:10; background: #111111; width:100%; height:100%;">'+
            '<div id="loading_div" style="width: 100%; text-align: center; position: absolute; font-size: 36px; color: #eeeeee;">'+
                '<a id="loading_div_a" style="color: #ffae00; font-size: 72px;">Wow!</a><br>'+
                'Your browser is too cool for me!<br>'+
                '<div id="loading_div_div" style="color: #777777; font-size:27px;">(No. Update your browser)</div>'+
            '</div>'
        '</div>';
        nb_load();
    }
};
//
window.onblur = function(){
    l_title = document.getElementById('title').innerHTML;
    document.getElementById('title').innerHTML = 'KREV'
}
//
window.onfocus = function(){
    if(l_title!=''){
        document.getElementById('title').innerHTML = l_title;
        l_title = '';
    }
}
//
window.onresize = function(){
    if(rcb){
        load(1);
    }
    else{
        nb_load();
    } 
};