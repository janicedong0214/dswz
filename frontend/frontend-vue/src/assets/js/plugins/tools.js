//通过毫秒数获取时、分、秒
export default {
    getHMS(times=0){
        times = times/1000;
        let hh = Number.parseInt(times/(60*60));
        let mm = Number.parseInt(times%(60*60)/60);
        let ss = Number.parseInt(times%(60*60)%60);
        // hh = 
        return {
            hh:hh>9?String(hh):'0'+hh,
            mm:mm>9?String(mm):'0'+mm,
            ss:ss>9?String(ss):'0'+ss
        }
    }
}