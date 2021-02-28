;(function(){
    var 
      _flixLoader = {
        mappingTable:{
          'data-flix-distributor' : {'inpage':'','button':'d','value':null,'hotspot':'d'},
          'data-flix-language' : {'inpage':'','button':'l','value':null,'hotspot':'l'},
          'data-flix-mpn' : {'inpage':'mpn','button':'mpn','value':null,'hotspot':'mpn'},
          'data-flix-ean' : {'inpage':'ean','button':'ean','value':null,'hotspot':'ean'},
          'data-flix-url' : {'inpage':'url','button':'url','value':null, 'hotspot':'url'},
          'data-flix-sku' : {'inpage':null,'button':'sku','value':null, 'hotspot':'sku'},
          'data-flix-button' : {'inpage':null,'button':'dom','value':null, 'hotspot':null},
          'data-flix-inpage' : {'inpage':null,'button':null,'value':null, 'hotspot':null},
          'data-flix-button-image' : {'inpage':null,'button':'img','value':null, 'hotspot':null},
          'data-flix-energylabel' : {'inpage':'energylabel','button':'energylabel','value':null, 'hotspot':null},
          'data-flix-embed' : {'inpage':null,'button':'embed','value':null, 'hotspot':null},
          'data-flix-brand' : {'inpage':'brand','button':'brand','value':null, 'hotspot':'brand'},
          'data-flix-fallback-language' : {'inpage':'fl','button':'fl','value':null, 'hotspot':'fl'},
          'data-flix-price' : {'inpage':null,'button':'p','value':null, 'hotspot':'p'},
          'data-flix-hotspot': {'inpage': null, 'button': null, 'value': null, 'hotspot':'hotspot'},
          'data-flix-autoload': {'inpage': null, 'button': null, 'value': null, 'hotspot':null},
          'data-flix-mobilesite' : {'inpage':'ms','button':'ms','value':null, 'hotspot':null},
          'data-flix-rec' : {'inpage':null,'button':null,'value':null, 'hotspot':null,'model':{"alternative":"m3","crossell":"m5","upsell":"m6"}}
        },
        instance:null,
    ab: {"d":{"78":"1","179":"1","184":"1","219":"1","228":"1","353":"1","604":"1","664":"1","944":"1","1326":"1","2754":"1","6050":"1","8778":"1","10589":"1","11100":"1","16585":"1"},"d_hotspot":{"795":"1","2190":"1","15274":"1","5759":"1","4124":"1"},"button":{"mpn":{},"ean":{}},"inpage":{"mpn":{"ctl-672-n":"1","null":"1","dtc133w0b":"1","ctl-6100wlk-n":"1","ctl-4100k-n":"1","pth-660-n":"1","dth-3220":"1","ctl-4100wlk-n":"1","dth-2420":"1","pth-660-s":"1","wac4949268621069":"1","m3703135":"1","wac4949268621342":"1","dtk1660k0b":"1","cds610s":"1","cs-610ck":"1","wac4949268620024":"1","cs-190":"1","pth460k1b":"1","ctl-6100wle-n":"1","ctl-4100wle-n":"1"},"ean":{"4949268621366":"1","4949268621076":"1","4949268621052":"1","4949268621434":"1","4949268621335":"1","4949268622592":"1","4949268621342":"1","4949268621427":"1","4949268620123":"1","4949268621397":"1","4949268621755":"1","4949268620017":"1","4949268621359":"1","4949268620024":"1","4949268621403":"1","4949268621311":"1","4949268621083":"1","4949268621939":"1","4949268621922":"1","4949268622448":"1","4949268619981":"1","4949268621274":"1","4949268621069":"1","3015220898211":"1","4949268621465":"1","4949268619899":"1","4949268622387":"1","4949268621472":"1","4719072708283":"1","4719072730291":"1","4719072724665":"1","4719072688318":"1","4719072725068":"1","4719072714147":"1","4719072658052":"1","4719072725624":"1","4719072696054":"1","4719072725570":"1","4719072660673":"1","4719072682040":"1","4719072718824":"1","4719072718855":"1"}},"hotspot":{"mpn":{"htf-520ip7":"1","b00ut0e9p":"1","bc10r3e9j":"1","hai6901018064777":"1","34004229":"1","hb18fgsaaa":"1","hd90-a3979-s":"1","htf-540dp7":"1"},"ean":{"6901018076923":"1","6901018075186":"1","6901018064777":"1","6901018072048":"1","6901570096278":"1","6921081583623":"1","6901018074592":"1","6901570096216":"1","6901570096254":"1"}}},
        isAb:function(type){
          try{
            if (!this.ab.d.hasOwnProperty(this.mappingTable['data-flix-distributor']['value'])) { return false; }
            if (this.ab[type]['mpn'].hasOwnProperty((this.mappingTable['data-flix-mpn']['value'] != null ? this.mappingTable['data-flix-mpn']['value'] : '').toLowerCase())) { return true; }
            if (this.ab[type]['ean'].hasOwnProperty((this.mappingTable['data-flix-ean']['value'] != null ? this.mappingTable['data-flix-ean']['value'] : '').toLowerCase())) { return true; }
          }
          catch(e){
              this.log(e.message);
          }
          return false;
        },
        ismobile: function() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|build|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
        },
        getAutoloadedModules: function() {
              var autoloaded_modules = this.mappingTable['data-flix-autoload']['value'] == null ? []
              : this.mappingTable['data-flix-autoload']['value'].replace(' ','').split(',');
          return autoloaded_modules;
        },
        mobileDistributorIds : {"2754":1,"2162":1,"370":1},
        abc: {"7109":[2]},
        init:function() {
          try {
            var scs = document.getElementsByTagName('script');
            for(var i=0;i<scs.length;i++){
              if (scs[i].src.indexOf('dev-delivery')>0 || scs[i].src.indexOf('flixfacts.com/js/loader')>0 || scs[i].src.indexOf('flixsyndication.net/minisite/ssl/js/loader')>0 || scs[i].src.indexOf('flixsyndication.net/minisite/ssl/logo/code/js/l.js')>0 || scs[i].src.indexOf('flixsyndication.net/js/loader')>0 || scs[i].src.indexOf('logo.flixfacts.co.uk/code/js/l.js')>0 || scs[i].src.indexOf('flixfacts.co.uk/link.php')>0) {
                this.instance=scs[i];
                break;
              }
            }
            this.errLog();
            this.parse();
            this.setGvid();

              var d_id = this.mappingTable['data-flix-distributor']['value'];
              var ab_res_id = 'ab_'+d_id;
              window.flixJsCallbacks[ab_res_id] = null;
              if(typeof URLSearchParams == 'function') {
                  var urlParams = new URLSearchParams(window.location.search);
                  var ab_url = 'https://dkht7e625fi95.cloudfront.net/track/';
                  if (location.href.search('flix-local') !== -1) ab_url = 'http://localhost/hotspot-ab/';
                  var dt_ids = {};

                  if(this.abc && typeof this.abc[d_id] != "undefined") {dt_ids[d_id] = this.abc[d_id];}
                  if(urlParams.get('ab_d_id') && urlParams.get('ab_t_id')) {d_id = urlParams.get('ab_d_id'); dt_ids[d_id] = [urlParams.get('ab_t_id')];}
                  if (typeof dt_ids[d_id] !== "undefined") {
                      for (var i = 0; i < dt_ids[d_id].length; i++) {
                          var xhr = new XMLHttpRequest();
                          xhr.onreadystatechange = function() {
                              if (xhr.readyState === 4 && xhr.status === 200) window.flixJsCallbacks[ab_res_id] = JSON.parse(xhr.responseText);
                          };
                          xhr.open('GET', ab_url + d_id + '-' + dt_ids[d_id][i] +'.json?v=1.1', false);
                          xhr.send();
                      }
                  }
              }

              if(d_id === '7109' && this.mappingTable['data-flix-mpn']['value'] === null && this.mappingTable['data-flix-sku']['value'] !== null) {
                  this.mappingTable['data-flix-mpn']['value'] = this.mappingTable['data-flix-sku']['value'];
              }

              var autoloaded_modules = this.mappingTable['data-flix-autoload']['value'] == null ? [] : this.mappingTable['data-flix-autoload']['value'].replace(' ','').split(',');
              if(["0","false"].indexOf(this.mappingTable['data-flix-autoload']['value']) === -1) {
                  if(autoloaded_modules.length === 0 || autoloaded_modules.indexOf('minisite') > -1) this.load('button');
                  if(autoloaded_modules.length === 0 || autoloaded_modules.indexOf('inpage') > -1) this.load('inpage');
                  if(autoloaded_modules.length === 0 || autoloaded_modules.indexOf('hotspot') > -1) this.load('hotspot');
              }

          } 
          catch(e) {
            this.log(e.message);
          }
        },
        setValue:function(name,value){
          if(name == "data-flix-ean" && value != "" && value.length<13) {
            value = Array(13 + 1 - value.length).join('0') + value;
          }
      try{
        if(name == "data-flix-rec" && value != "") {
          var prws = value.split(",");
          var res ={};
          for (var i=0;i<prws.length;i++){
            var itm = prws[i].split(":");
            if(itm.length>1){
              var model_name = this.mappingTable[name].model[itm[0]] || "m3";
              res[model_name]=itm[1]
            }else{
              var model_name = "m3";
              res[model_name]=itm[0]
            }
           }
           value = res;
        }
      }catch(e){}
          var fname = (this.mappingTable[name]!=undefined ) ? this.mappingTable[name] : this.mappingTable[this.mapOldParam(name)];
          if (fname!=undefined && value) {
            fname['value']=value;
          }
        },
        mapOldParam:function(name){
          try
          {
            for (var i in this.mappingTable){
              if (this.mappingTable[i]['button']==name) {
                return i;
              }
            }
          }
          catch (e) {
            this.log(e.message);
          }
        },
        validate:function(){
          if(this.mappingTable['data-flix-button']['value'] == null && this.mappingTable['data-flix-inpage']['value']==null){
            this.mappingTable['data-flix-button']['value'] = 'flix-minisite';
          }
          
          if(this.mappingTable['data-flix-distributor']['value'] == null){
            this.log('distributor is not set');
            return false;
          }

          if (this.mappingTable['data-flix-language']['value']==null){
            this.log('language is not set');
            return false;
          }

          if( !! this.ab.d_hotspot[this.mappingTable['data-flix-distributor']['value']] && ! this.mappingTable['data-flix-hotspot']['value']) {
            this.mappingTable['data-flix-hotspot']['value'] = 'flix-hotspot';
          }
          else if( this.ab.d[ this.mappingTable['data-flix-distributor']['value']] && 
          ( (this.mappingTable['data-flix-ean']['value'] != null ? this.mappingTable['data-flix-ean']['value'] : '').toLowerCase() in this.ab.hotspot.ean || (this.mappingTable['data-flix-mpn']['value'] != null ? this.mappingTable['data-flix-mpn']['value'] : '').toLowerCase() in this.ab.hotspot.mpn )) {
            this.mappingTable['data-flix-hotspot']['value'] = 'flix-hotspot';
          }
          return true;
        },
        _s : function(url,append_dom,options){
            var _fscript = document.createElement('script');
            _fscript.setAttribute("type","text/javascript");
            _fscript.setAttribute("src", url);
            _fscript.async = "true";
            for (var i in options) {i=="id" ? _fscript.id=options[i] : _fscript.setAttribute(i,options[i]);}
            append_dom.appendChild(_fscript);
            _fscript.addEventListener('error', function(){              
              var i = new Image();
              var det = window.location.href;              
              i.src=location.protocol+"//rt.flix360.com/jserr?f="+encodeURIComponent(url)+"&d="+encodeURIComponent(det)+"&m="+encodeURIComponent('Flix domain blocked');
            },false);
            return _fscript;
        },
        _jx : function( url, append_dom, et_type ) {
          try{
            var
                u = "//media.flixcar.com/perf/log.gif" 
              , payload = {
                  et: et_type,
                  age: null,
                  ip_address: null,
                  d: this.mappingTable['data-flix-distributor']['value'],
                  f_xp: "inpage",
                  pn: window.location.href,
                  perf: {
                      "startTime": null,
                      "duration": null,
                      "fetchStart": null,
                      "domainLookupStart": null,
                      "domainLookupEnd": null,
                      "connectStart": null,
                      "connectEnd": null,
                      "secureConnectionStart": null,
                      "requestStart": null,
                      "responseStart": null,
                      "responseEnd": null,
                      "transferSize": null
                  }
                }
              , xhr = this._xhr()
              , _fscript = document.createElement('script')
              , img = new Image()
            ;
            xhr.onreadystatechange = function() {
              var perf = performance.getEntriesByType('resource');
              var maxSize = 150;
              var iters = 3;
              if( !! perf ){
                (function parsePerf(){
                  perf.forEach(function(d){
                    if( "xmlhttprequest" === d.initiatorType && !! d.name.match(/media\.flixcar\.com/)) {
                      for( var p in payload.perf ){
                        if( payload.perf.hasOwnProperty(p)){
                          payload.perf[p] = d[p];
                        }
                      }
                    }
                    else if( --iters >= 0 ) {
                      maxSize =( maxSize + 150);
                      performance.setResourceTimingBufferSize(maxSize);
                      parsePerf();
                    }
                  });     
                }());
              }
              if (xhr.readyState === 4) {
                payload.age = xhr.getResponseHeader("Age");
                payload.ip_address = xhr.getResponseHeader("X-IP-Address");
                _fscript.setAttribute("type","text/javascript");
                _fscript.textContent = xhr.responseText;
                append_dom.appendChild(_fscript);
                img.src = u + "?payload=" + encodeURIComponent( JSON.stringify( payload ));
              }
            }
            xhr.open('GET', url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send();
          }
          catch( e ) {
            console.info(e.message);
          }
        },
        log: function(msg){
          try{
            console.log(msg);
          }catch(e){}
        },
        _xhr: function(){
          var xhr;
          if (window.ActiveXObject) {
            try {
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e) {
              console.info(e.message);
              xhr = null;
            }
          }
          else {
            xhr = new XMLHttpRequest();
          }
          return xhr;
        },
        load:function(type){
          var autoloaded_modules =  this.getAutoloadedModules();
          if( this.ismobile() && ( type == 'button'  || type == 'hotspot' ) ) {
              if(autoloaded_modules && autoloaded_modules.length>0 && autoloaded_modules.indexOf('hotspot') > -1){}else{
                return false;
              }
          }        
          if ( ! this.validate() ) return false;
          var elem = this.mappingTable['data-flix-'+type]['value'];
          if (elem==null) return false;
          var dom = document.getElementById(elem);

          if (!dom && type != 'hotspot'){
            try {
              var div = document.createElement('div');
              div.id=elem;
              this.instance.parentNode.appendChild(div);
            } 
            catch(e) {
              this.log(e.message);
              return false;
            }
          }

          try {
            var url = this.getUrl(type);
            var options={};
            var scache = this.isAb(type) ? "&fcache="+Math.random() : "";
            scache+="&ext=.js";
       

            if (!this.isAb(type)) options.crossorigin = "true";
            if (type=='button') {
              this._s(url+scache,document.getElementById(elem),options);
              var styleElement = document.createElement("style");
              var cssCode="#"+elem+" a img {padding-right:3px;}";
              styleElement.type = "text/css";
              if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = cssCode;
              } 
              else {
                styleElement.appendChild(document.createTextNode(cssCode));
              }
              document.getElementsByTagName("head")[0].appendChild(styleElement);
            }
            else if (type == 'inpage'){
              var 
                  perf_ean = this.mappingTable['data-flix-ean']['value']
                , perf_mpn = this.mappingTable['data-flix-mpn']['value']
                , perf_d = this.mappingTable['data-flix-distributor']['value']
                , perf = []
              ;
              if( perf.indexOf( perf_d ) >= 0 && !! window.performance && typeof window.performance.getEntriesByType === 'function') {
                var et = ( !! this.ismobile() ) ? "pagemobile" : "page";
                this._jx(url+scache, document.getElementById( elem ), et);
              }
              else {
                this._s(url+scache,document.getElementById(elem),options);
              }
            } 
            else if (type == 'hotspot'){
                this._s(url+scache,document.getElementsByTagName('head')[0],options);
            }
          }
          catch (e) {
            this.log(e.message);
            return false;
          }
        },
        getUrl:function(btype) {
          var url = '';
          var url_in = '';
          var url_mn = '';
          var url_hs = '';
          for (var i in this.mappingTable)
          {
            if (this.mappingTable[i]['value']==null) continue;
            if (this.mappingTable[i][btype]==null) continue;

            value_m = this.mappingTable[i]['value'];

            value_n = value_m.replace(/'/g, "%27");

            url+="&"+ this.mappingTable[i][btype]+"="+encodeURIComponent(value_n);

            if (i=='data-flix-inpage') continue;
            if (i=='data-flix-price') continue;
            if (i=='data-flix-button-image') continue;
            if (i=='data-flix-button') continue;
            if (i=='data-flix-price') continue;
            if (i=='data-flix-button-image') continue;
            if (i=='data-flix-fallback-language') continue;
            if (i=='data-flix-brand') continue;
            if (i=='data-flix-energylabel') continue;
            if (i=='data-flix-mobilesite') continue;

            url_in+= ((this.mappingTable[i]['inpage']=='') ? '' : this.mappingTable[i]['inpage']+"/" ) + escape(this.mappingTable[i]['value'])+"/";
            url_mn+= ((this.mappingTable[i]['inpage']=='') ? '' : this.mappingTable[i]['inpage']+"/" ) + escape(this.mappingTable[i]['value'])+"/";
            url_hs+= ((this.mappingTable[i]['inpage']=='') ? '' : this.mappingTable[i]['inpage']+"/" ) + escape(this.mappingTable[i]['value'])+"/";

          }

          url+=('https:' == document.location.protocol) ? "&ssl=1":"";

          if (this.mappingTable['data-flix-mpn']['value']==null && this.mappingTable['data-flix-ean']['value']==null) {
            var uc = encodeURIComponent(window.location.pathname); /*get a unique url*/
            this.setValue('data-flix-url', uc.replace(/\W/g,""));
            url_in+=uc.replace(/\W/g,"");
            url_mn+=uc.replace(/\W/g,"");
            url_hs+=uc.replace(/\W/g,"");
          }

          var minisite_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/js/minisite/' : 'http://media.flixcar.com/delivery/js/minisite/';
          var inpage_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/js/inpage/' : 'http://media.flixcar.com/delivery/js/inpage/';
          var hotspot_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/js/hotspot/' : 'http://media.flixcar.com/delivery/js/hotspot/';

          var distributorIds = {"8772":1};
          if ( distributorIds.hasOwnProperty(this.mappingTable['data-flix-distributor']['value'])) {
                minisite_url = ('https:' == document.location.protocol) ? 'https://d20d8a0b518lq3.cloudfront.net/delivery/js/minisite/' : 'http://d20d8a0b518lq3.cloudfront.net/delivery/js/minisite/';
                inpage_url = ('https:' == document.location.protocol) ? 'https://d20d8a0b518lq3.cloudfront.net/delivery/js/inpage/' : 'http://d20d8a0b518lq3.cloudfront.net/delivery/js/inpage/';
                hotspot_url = ('https:' == document.location.protocol) ? 'https://d20d8a0b518lq3.cloudfront.net/delivery/js/hotspot/' : 'http://d20d8a0b518lq3.cloudfront.net/delivery/js/hotspot/';
          }

          if( this.ismobile() /*&& this.mobileDistributorIds.hasOwnProperty(this.mappingTable['data-flix-distributor']['value']) */ ){
              inpage_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/mobile/js/' : 'http://media.flixcar.com/delivery/mobile/js/';
            if( this.isAb("inpage")) {
              inpage_url = "//media.flixcar.com/ab/mobile/js/";
            }
            url=( url.replace("&ms=Yes", "") ) +"&forcedstop=bymobile" ;
            var autoloaded_modules =  this.getAutoloadedModules();
            if(autoloaded_modules && autoloaded_modules.length>0 && autoloaded_modules.indexOf('hotspot') > -1){
                 url=url.replace("&forcedstop=bymobile", "&forcedstop=false&mobileHotspot=Y")
            }
          }



          //url = (btype=='button') ? minisite_url + url_mn.substr(0,url_mn.length-1) + '?' + url.substr(1) : inpage_url + url_in.substr(0,url_in.length-1) + "?" + url;

          if (btype == 'button')
              url = minisite_url + url_mn.substr(0, url_mn.length - 1) + '?' + url.substr(1);
          if (btype == 'inpage')
              url = inpage_url + url_in.substr(0, url_in.length - 1) + "?" + url;
          if (btype == 'hotspot')
              url = hotspot_url + url_hs.substr(0, url_hs.length - 1) + "?" + url;


          return url;
        },
        parse:function(){
          var qmark = this.instance.src.indexOf('?');
          if(qmark != -1) {
            var itms =  this.instance.src.substr(qmark+1).split("&");
            for (var i=0;i<itms.length;i++ ) {
              var kv = itms[i].split("=");
              this.setValue(kv[0],decodeURIComponent(kv[1]));
            }
          }else{
            for (var i in this.mappingTable ) {
              try{
                this.setValue(i,this.instance.getAttribute(i));
              }catch(e){ this.log(e.message);}
            }
          }
        },
        errLog: function(){
          try {
            window.addEventListener('error', function (err) {
              if (!err) return;
              if(err.filename && /flix(facts|car|syndication)\./g.test(err.filename)) {
                var det = err.colno ? 'l:' + err.lineno +', c:'+ err.colno : 'l:' + err.lineno;
                det+=" "+window.location.href;
                var i = new Image;
                i.src="//rt.flix360.com/jserr?f="+encodeURIComponent(err.filename)+"&d="+encodeURIComponent(det)+"&m="+encodeURIComponent(err.message);
              }
            });
          } catch(e){
              this.log(e.message);
          }
        },
        getCookieValue:function(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        },
        setGvid:function() {
          if(this.getCookieValue('flixgvid')){            
            window.flixJsCallbacks['gvid'] = this.getCookieValue('flixgvid');            
            return
          }
          if ( document.getElementById('data-flix-t-script') ) return;
          window['flixgvid'] = function(obj){
            try{
              delete window['flixgvid'];
              window.flixJsCallbacks['gvid'] = obj['gvid'];
              document.cookie = 'flixgvid='+obj['gvid']+'; path=/; SameSite=None;Secure';
            }catch(e){}
          };
          var lambdaDistributorIds = {"3986":1,"6933":1,"13395":1};
          var switch_base = lambdaDistributorIds.hasOwnProperty(this.mappingTable['data-flix-distributor']['value']) ? '//media.flixcar.com/gvid':'//media.flixcar.com/gvid'; 
          this._s(switch_base,document.getElementsByTagName('head')[0],{"id":"data-flix-t-script"});

        }
      };
    var 
      flixJsCallbacks = {
        _loadCallback:null,
        _loadInpageCallback:null,
        _loadMinisiteCallback:null,
        _loadNoshowCallback:null,
        _loadMouseFlowCallback: null,

        setLoadCallback:function(cFunction,ftype){
          try{
            if (cFunction && typeof(cFunction) === "function" ) {
              switch(ftype) {
                case "inpage": this._loadInpageCallback = cFunction;  break;
                case "minisite" : this._loadMinisiteCallback = cFunction; break;
                case "noshow" : this._loadNoshowCallback = cFunction; break;
                case "mouseflow": this._loadMouseFlowCallback = cFunction; break;
                default:  this._loadCallback = cFunction; break;
              }
            }
            else { throw cFunction+" is not a function";}
          }
          catch(e) {
            try {console.log(e);}catch(e1){}
          }
        },
        loadService:function(ftype) {
            switch(ftype) {
                case "inpage": _flixLoader.load('inpage');  break;
                case "minisite" : _flixLoader.load('button'); break;
                case "hotspot" : _flixLoader.load('hotspot'); break;
            }
        }
    };
    var getFlixCallback = function(){
      return flixJsCallbacks;
    };
    window['flixJsCallbacks'] = getFlixCallback();
    _flixLoader.init();
})();
