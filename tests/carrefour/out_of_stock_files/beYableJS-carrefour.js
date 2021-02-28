"use strict"; /*16.637496699269279517*/
var by_data = by_data || {};
var beYableTenant = "none";
var beYableCartFromLocalStorage = true;

var isActive = true;
if (isActive) {

    function getP(n, url = window.location.href) {
        n = n.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + n + '(=([^&#]*)|&|#|$)'),
            res = regex.exec(url);
        if (!res) return null;
        if (!res[2]) return '';
        return decodeURIComponent(res[2].replace(/\+/g, ' '));
    }
    function getF() {
        var err = new Error(), src, lstStckFrm = new RegExp(/.+\/(.*?):\d+(:\d+)*$/), crrntStckFrm = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);
        if ((src = lstStckFrm.exec(err.stack.trim())) && src[1] !== "") return src[1];
        else if ((src = crrntStckFrm.exec(err.stack.trim()))) return src[1];
        else if (err.fileName != undefined) return err.fileName;
        return "";
    }
    function loadS(sc) {
        var yattune = document.createElement('script');
        yattune.type = 'text/javascript';
        yattune.async = true;
        yattune.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'az693360.vo.msecnd.net/api/' + sc;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(yattune, s);
    }

    (function () {
        if (getP('by_dbg') === 'prvw') {
            var f = getF();
            if (f && f.indexOf('_preview') === -1) {
                loadS(f.slice(0, -3) + "_preview.js");
                return;
            }
        }

        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", function () {
                by_Main();
            });
        }
        else { by_Main(); }


        function by_Main() {

            if (typeof dataLayer !== "undefined") {
                var index = 0; var currentnb = -1;
                setInterval(function () {

                    try {
                        var nb = dataLayer.length;
                        if (nb > currentnb) {
                            currentnb = nb;
                            for (var i = 0; i < nb; i++) {
                                var d = dataLayer[i];
                                if (i >= index) {

                                    if (Object.prototype.toString.call(d) == "[object Arguments]") {
                                        var l = d.length;
                                        if (l > 2) {
                                            if (d[1] == "add_to_cart") {
                                                if (d[2].items && d[2].items.length > 0) {
                                                    var id = d[2].items[0].id;

                                                    var items = [];
                                                    var indice = -1;
                                                    var ls = localStorage.getItem('beyable-cartd');
                                                    if (ls) {
                                                        items = by_GetArrayFromLocalStorage(decodeURIComponent(localStorage.getItem('beyable-cartd')));
                                                        var litems = items.length;
                                                        for (var k = 0; k < litems; k++) {
                                                            var item = items[k];
                                                            if (item.id == id) {
                                                                indice = k;
                                                            }
                                                        }
                                                    }

                                                    if (indice != -1) {
                                                        var qty = d[2].items[0].quantity;
                                                        items[indice].qty = qty;
                                                        items[indice].price = d[2].items[0].price / (qty - 1);
                                                    }
                                                    else {
                                                        var newitem = {};
                                                        newitem.id = id;
                                                        newitem.name = d[2].items[0].name;
                                                        newitem.price = d[2].items[0].price;
                                                        newitem.qty = 1;
                                                        newitem.from = "from=" + tc_vars.env_template + ",frompage=" + tc_vars.page_name;
                                                        items.push(newitem);
                                                    }

                                                    by_SetArrayToLocalStorage(items);

                                                    index = i + 1;
                                                }
                                            }

                                            if (d[1] == "remove_from_cart") {
                                                if (d[2].items && d[2].items.length > 0) {
                                                    var id = d[2].items[0].id;

                                                    var items = [];
                                                    var indice = -1;
                                                    var ls = localStorage.getItem('beyable-cartd');
                                                    if (ls) {
                                                        items = by_GetArrayFromLocalStorage(decodeURIComponent(localStorage.getItem('beyable-cartd')));
                                                        var litems = items.length;
                                                        for (var k = 0; k < litems; k++) {
                                                            var item = items[k];
                                                            if (item.id == id) {
                                                                indice = k;
                                                            }
                                                        }
                                                    }

                                                    if (indice != -1) {
                                                        var qty = d[2].items[0].quantity;
                                                        items[indice].qty = qty;
                                                        items[indice].price = d[2].items[0].price * (1 / (qty + 1));

                                                        if (items[indice].qty == 0)
                                                            items.splice(indice, 1);

                                                        by_SetArrayToLocalStorage(items);
                                                    }

                                                    index = i + 1;
                                                }
                                            }

                                            if (d[1] == "empty_cart") {
                                                localStorage.removeItem('beyable-cartd');
                                                by_CreateCookie('beyable-cart', 0, 1 / 24);

                                                index = i + 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }, 500);
            }

            if (typeof tc_vars !== "undefined") {

                if (tc_vars.user_storeIDM != "") {
                    beYableTenant = tc_vars.user_storeIDM;
                }

                if (tc_vars.user_login == "1") {

                    by_CreateCookie("beyable-rgr", 1, 395);

                    if (tc_vars.user_lastOrderDate != "" || tc_vars.user_transactionTotal > 0) {
                        by_CreateCookie("beyable-cli", 1, 395);
                    }
                }


                by_data.bjs_urltype = by_GetUrlTtype(tc_vars.env_template);


                by_data.bjs_urltags = [];

                if (tc_vars.user_lastOrderDate && tc_vars.user_lastOrderDate != "") {
                    by_data.bjs_urltags.push("hasLastOrderDate=oui");
                    by_data.bjs_urltags.push("user_lastOrderDate=" + tc_vars.user_lastOrderDate);
                }
                if (tc_vars.user_transactionTotal && tc_vars.user_transactionTotal != "") {
                    by_data.bjs_urltags.push("user_transactionTotal=" + tc_vars.user_transactionTotal);
                }
                if (tc_vars.user_login && tc_vars.user_login != "") {
                    by_data.bjs_urltags.push("user_login=" + tc_vars.user_login);
                }
                if (tc_vars.user_newsletterCarrefour && tc_vars.user_newsletterCarrefour != "") {
                    by_data.bjs_urltags.push("user_newsletterCarrefour=" + tc_vars.user_newsletterCarrefour);
                }
                if (tc_vars.user_newsletterOne && tc_vars.user_newsletterOne != "") {
                    by_data.bjs_urltags.push("user_newsletterOne=" + tc_vars.user_newsletterOne);
                }
                if (tc_vars.user_storeFormat && tc_vars.user_storeFormat != "") {
                    by_data.bjs_urltags.push("user_storeFormat=" + tc_vars.user_storeFormat);
                }

                if (location.href.indexOf('https://www.carrefour.fr/magasin/') > -1) {
                    if (tc_vars.store_ID != "") {
                        by_data.bjs_urltags.push("store_ID=" + tc_vars.store_ID);
                    }
                }

                // On ajoute des groupes pour l'animco.
                var groupforanimco = localStorage.getItem('beyable-groupforanimco');
                if (!groupforanimco) {
                    groupforanimco = Math.floor(Math.random() * Math.floor(3));
                    localStorage.setItem('beyable-groupforanimco', groupforanimco);
                }
                by_data.bjs_urltags.push('animco=' + groupforanimco);

                // On ajoute des groupes pour les codes promo.
                var groupforcodespromo = localStorage.getItem('beyable-groupforpromotype');
                if (!groupforcodespromo) {
                    groupforcodespromo = Math.floor(Math.random() * Math.floor(4));
                    localStorage.setItem('beyable-groupforpromotype', groupforcodespromo);
                }
                by_data.bjs_urltags.push('promotype=' + groupforcodespromo);

                var sessionid = by_GetCookie(beYableKey);
                if (sessionid == "") {
                    // Le visiteur en est à sa première page (pas d'identifiant session).
                    if (tc_vars.user_storeID == "") {
                        // Pas de magain rattaché
                        by_CreateCookie('beyable-sessionnotwithstore', 1, 1 / 48);
                    }
                }
                var usernotwithstore = by_GetCookie('beyable-sessionnotwithstore');
                if (usernotwithstore != "") {
                    by_CreateCookie('beyable-sessionnotwithstore', 1, 1 / 48);
                    // On remet le cookie à 30 minutes glissantes.
                    by_data.bjs_urltags.push("usernotwithstore=1");
                }


                if (tc_vars.page_template == "checkout-order-confirmation") {
                    by_data.bjs_urltype = "T";
                }

                if (by_data.bjs_urltype == "C") {
                    if (tc_vars.page_cat1Name != "") {
                        by_data.bjs_urlval1 = tc_vars.page_cat1Name;
                        by_data.bjs_urlval2 = "univers";
                        by_data.bjs_urltags.push("univers=" + tc_vars.page_cat1Name);
                    }
                    if (tc_vars.page_cat2Name != "") {
                        by_data.bjs_urlval1 = tc_vars.page_cat2Name;
                        by_data.bjs_urlval2 = "rayon";
                        by_data.bjs_urltags.push("rayon=" + tc_vars.page_cat2Name);
                    }
                    if (tc_vars.page_cat3Name != "") {
                        by_data.bjs_urlval1 = tc_vars.page_cat3Name;
                        by_data.bjs_urlval2 = "sousrayon";
                        by_data.bjs_urltags.push("sousrayon=" + tc_vars.page_cat3Name);
                    }
                }

                if (by_data.bjs_urltype == "FP") {
                    by_data.bjs_urlid = tc_vars.product_EAN;
                    by_data.bjs_urlval1 = tc_vars.product_price;
                    by_data.bjs_urlval5 = tc_vars.product_name;

                    by_data.bjs_urlstock = tc_vars.product_availability;

                    by_data.bjs_urltags.push("brand=" + tc_vars.product_brand);
                    by_data.bjs_urltags.push("business=" + tc_vars.product_business);
                    by_data.bjs_urltags.push("univers=" + tc_vars.product_cat1);
                    by_data.bjs_urltags.push("rayon=" + tc_vars.product_cat2);
                    by_data.bjs_urltags.push("sousrayon=" + tc_vars.product_cat3);
                    by_data.bjs_urltags.push("product_checkOnly=" + tc_vars.product_checkOnly);

                    if (tc_vars.product_availability && tc_vars.product_availability != "") {
                        by_data.bjs_urltags.push("product_availability=" + tc_vars.product_availability);
                    }
                }

                if (by_data.bjs_urltype == "B") {

                    // se baser sur tc_vars
                    var cartd = ''; var carttot = 0;
                    var length = tc_vars.products_list.length;
                    for (var i = 0; i < length; i++) {
                        var prod = tc_vars.products_list[i];
                        var tags = '';

                        var temp = encodeURIComponent(prod.product_name) + '$ci$' + prod.product_price + '$ci$' + prod.product_quantity + '$ci$$ci$' + tags + '$ci$$ci$' + prod.product_EAN + '$beyable_ci$';
                        cartd = cartd + temp;
                        carttot = carttot + parseInt(prod.product_quantity) * parseFloat(prod.product_price);

                    }
                    localStorage.setItem('beyable-cartdexp', new Date().getTime());
                    localStorage.setItem("beyable-cartd", cartd);
                    by_CreateCookie('beyable-cart', carttot, 1 / 24);

                    if (typeof window.ONECF_INITIAL_STATE !== "undefined") {
                        if (window.ONECF_INITIAL_STATE.shop && window.ONECF_INITIAL_STATE.shop.cart && window.ONECF_INITIAL_STATE.shop.cart.totalAmountWithFees) {
                            carttot = window.ONECF_INITIAL_STATE.shop.cart.totalAmountWithFees;
                            by_CreateCookie('beyable-cart', carttot, 1 / 24);
                            cartd = '';
                            var length = window.ONECF_INITIAL_STATE.shop.cart.items.length;
                            for (var i = 0; i < length; i++) {
                                var products = window.ONECF_INITIAL_STATE.shop.cart.items[i].products;
                                var nbpone = products.length;
                                for (var ki = 0; ki < nbpone; ki++) {
                                    var prod = products[ki];
                                    if (prod.available) {
                                        var attributes = prod.product.attributes;
                                        var tags = '';
                                        var unitprice = prod.totalItemPrice / prod.counter;
                                        var temp = encodeURIComponent(attributes.slug) + '$ci$' + unitprice + '$ci$' + prod.counter + '$ci$$ci$' + tags + '$ci$$ci$' + attributes.ean + '$beyable_ci$';
                                        cartd = cartd + temp;
                                        //carttot = carttot + parseInt(prod.counter) * parseFloat(unitprice);
                                    }
                                }

                            }
                            localStorage.setItem('beyable-cartdexp', new Date().getTime());
                            localStorage.setItem("beyable-cartd", cartd);

                        }
                    }
                }

                if (by_data.bjs_urltype == "T") {

                    try {
                        by_CreateCookie('beyable-cart', 0, 1 / 24);
                        localStorage.removeItem('beyable-cartdexp');
                        localStorage.removeItem('beyable-cartd');

                        var session = by_GetCookie(beYableKey);
                        if (session != "") {
                            var mnt = tc_vars.order_amount;

                            var qtyprd = tc_vars.order_quantityTotal;
                            var reference = tc_vars.order_ID;
                            var moypai = tc_vars.order_paymentType;
                            var reduc = tc_vars.order_promotionCode;

                            var indcli = tc_vars.user_transactionTotal == 0 ? "1" : "0";

                            var sessionId = session.split('.')[0];

                            var conv = mnt + '$bey$' + qtyprd + '$bey$0$bey$' + reference + '$bey$' + moypai + '$bey$' + reduc + '$bey$' + 'Valide$bey$' + indcli + '$bey$' + beYableTenant + '$bey$mode_livraison=' + tc_vars.order_deliveryMethod;

                            var i = new Image();
                            i.src = "//webappv3-001-beyable-prod.azurewebsites.net/api/v2/displays?beyable_key=" + beYableKey + "&operation=update_target&answerId=" + conv + "&taglog=" + sessionId + "&fork=&method=POST";
                            document.body.appendChild(i);
                        }

                    } catch (error) {

                    }
                }



                // Envoyer vers ContentSquare
                var dejaCS = false;
                if (!dejaCS) {
                    window.addEventListener('BY_loaded', function (e) {
                        dejaCS = true;
                        var data = e.detail.data;
                        by_data.act_messages = [];
                        if (data.Messages) {
                            var nb = data.Messages.length;

                            for (var i = 0; i < nb; i++) {
                                var cpg = data.Messages[i];
                                if (cpg.MustBeDisplayed) {
                                    var message = {};
                                    message.id = cpg.ForkId;
                                    message.name = cpg.ForkName;
                                    message.variation = cpg.Variation;
                                    message.status = "pending";
                                    by_data.act_messages.push(message);
                                }
                            }
                        }
                    });
                }

                var dejaCSd = false;
                if (!dejaCSd) {
                    window.addEventListener('BY_campaigndisplayed', function (e) {
                        dejaCSd = true;
                        var data = e.detail.data;
                        if (data.MustBeDisplayed) {
                            var cpgs = by_data.act_messages; var nb = cpgs.length;
                            for (var i = 0; i < nb; i++) {
                                var cpg = cpgs[i];
                                if (cpg.id == data.ForkId) {
                                    cpg.status = "displayed";
                                }
                            }
                        }
                    });
                }

                // Fin envoyer vers ContentSquare



                // Tracer des événements
                var dejaevents = false;
                if (!dejaevents) {
                    window.addEventListener('BY_loaded', function (e) {
                        dejaevents = true;

                        var data = e.detail.data;
                        if (location.href.indexOf('mon-compte/consentements') > -1) {
                            var buttons = document.querySelectorAll('button[type="submit"]');
                            if (buttons.length > 0) {
                                var button = buttons[0];
                                button.addEventListener('click', function () {
                                    var optin_email_newsletterOne = document.getElementsByName('allowMarketing')[0];
                                    if (optin_email_newsletterOne.checked) {
                                        BY.by_SendEvent(0, 'evt:optin_email_newsletterOne=1');
                                    }
                                    var optin_sms_newsletterOne = document.getElementsByName('allowSms')[0];
                                    if (optin_sms_newsletterOne.checked) {
                                        BY.by_SendEvent(0, 'evt:optin_sms_newsletterOne=1');
                                    }

                                    var optin_email_newsletterCarrefour = document.getElementsByName('allowOoshopGroupMkt')[0];
                                    if (optin_email_newsletterCarrefour.checked) {
                                        BY.by_SendEvent(0, 'evt:optin_email_newsletterCarrefour=1');
                                    }

                                    var optin_sms_newsletterCarrefour = document.getElementsByName('allowOoshopGroupSms')[0];
                                    if (optin_sms_newsletterCarrefour.checked) {
                                        BY.by_SendEvent(0, 'evt:optin_sms_newsletterCarrefour=1');
                                    }

                                });
                            }
                        }

                        if (location.href.indexOf('abonnement-livraison-domicile') > -1) {
                            var abo = '';
                            if (location.href.indexOf('abonnement-livraison-domicile-1') > -1) abo = "abonnement1";
                            if (location.href.indexOf('abonnement-livraison-domicile-2') > -1) abo = "abonnement2";
                            if (location.href.indexOf('abonnement-livraison-domicile-3') > -1) abo = "abonnement3";

                            if (abo != '') {
                                var div = document.getElementById('data-produit-acheter');
                                if (div) {
                                    var buttons = div.getElementsByTagName('button');
                                    if (buttons.length > 0) {
                                        var button = buttons[0];
                                        var dejaadded = false;
                                        button.addEventListener('click', function () {
                                            if (!dejaadded) {
                                                dejaadded = true;
                                                BY.by_SendEvent(0, 'evt:abonnementaddedtocart=' + abo);

                                                // Enregistrer un lead
                                                var tenant = typeof beYableTenant !== "undefined" ? beYableTenant : "";
                                                var conv = 'event$bey$abonnementaddedtocart=' + abo + '$bey$' + data.MustBeDisplayed + '$bey$' + tenant;
                                                var i = new Image();
                                                i.src = 'https://webappv3-001-beyable-prod.azurewebsites.net/api/v2/displays?beyable_key=' + beYableKey + "&operation=update_lead&answerId=" + conv + "&taglog=" + data.SessionId.split('.')[0] + "&fork=&method=POST";
                                                document.body.appendChild(i);
                                            }

                                        });
                                    }
                                }
                            }
                        }
                    });
                }



                // Afficher les campagnes (conditions chez le client)
                var dejaconditions = false;
                if (!dejaconditions) {
                    window.addEventListener('BY_loaded', function (e) {
                        dejaconditions = true;
                        var data = e.detail.data;
                        var messages = data.Messages;
                        if (messages) {
                            var nbc = messages.length;
                            for (var i = 0; i < nbc; i++) {
                                var cpg = messages[i];

                                if (cpg.ForkId == "13cf0921-b84e-43f4-83d1-01a372b8a2bb") {
                                    if (tc_vars.user_ID != '') {
                                        var userId = tc_vars.user_ID;
                                        var u = "https://beyableprodrt001.blob.core.windows.net/users/" + userId + ".json";
                                        var x = new XMLHttpRequest();
                                        x.onreadystatechange = function () {
                                            if (this.readyState == 4 && this.status == 200) {
                                                window["condition13cf0921b84e43f483d101a372b8a2bb"] = {};
                                            }
                                        };
                                        x.open("GET", u, true);
                                        x.send();
                                    }
                                }

                                if (cpg.ForkId == "ca6070fc-836e-480b-9fb4-b74c863e81b8") {
                                    var by_timeraddtocart = setInterval(function () {
                                        var nbd = dataLayer.length;
                                        for (var i = 0; i < nbd; i++) {
                                            var d = dataLayer[i];
                                            if (Object.prototype.toString.call(d) != "[object Arguments]") continue;
                                            var l = d.length;
                                            if (l <= 2) continue;
                                            if (d[1] != "add_to_cart") continue;
                                            if (!d[2].items && d[2].items.length == 0) continue;

                                            var id = d[2].items[0].id;

                                            BY.by_SendEvent(0, 'evt:BODUMaddedtocart=' + id);

                                            // Enregistrer un lead
                                            var tenant = typeof beYableTenant !== "undefined" ? beYableTenant : "";
                                            var conv = 'event$bey$BODUMaddedtocart=' + id + '$bey$' + data.MustBeDisplayed + '$bey$' + tenant;
                                            var i = new Image();
                                            i.src = 'https://webappv3-001-beyable-prod.azurewebsites.net/api/v2/displays?beyable_key=' + beYableKey + "&operation=update_lead&answerId=" + conv + "&taglog=" + data.SessionId.split('.')[0] + "&fork=&method=POST";
                                            document.body.appendChild(i);

                                            clearInterval(by_timeraddtocart);
                                        }
                                    }, 1500);
                                }
                            }
                        }
                    });
                }
            }


            // Envoyer les affichages dans GA
            var dejaGADisplayed = false;
            if (!dejaGADisplayed) {
                window.addEventListener("BY_campaigndisplayed", function (e) {
                    dejaGADisplayed = true;
                    if (typeof ga !== "undefined") {
                        var d = e.detail.data;
                        var trackers = []; var gs = ga.getAll();
                        for (var i = 0; i < gs.length; i++) {
                            var t = gs[i];
                            var rObj = {};
                            rObj.name = t.get("name");
                            rObj.trackingId = t.get("trackingId");
                            trackers.push(rObj);
                        }

                        var variation = d.Variation == "" ? "ORIGINAL" : "VARIATION";
                        var campaignName = d.ForkName + " - " + variation;
                        for (var i = 0; i < trackers.length; i++) {
                            var t = trackers[i];
                            if (t.name == "gaOne") {
                                if (d.MustBeDisplayed) {
                                    ga(t.name + '.send', { hitType: 'event', eventCategory: 'BEYABLE', eventAction: 'view', eventLabel: "T-" + campaignName, nonInteraction: true });
                                }
                                else {
                                    ga(t.name + '.send', { hitType: 'event', eventCategory: 'BEYABLE', eventAction: 'view', eventLabel: "C-" + campaignName, nonInteraction: true });
                                }
                            }
                        }
                    }
                });
            }

            // Envoyer les clics dans GA
            var dejaGAclicked = false;
            if (!dejaGAclicked) {
                window.addEventListener("BY_campaignclicked", function (e) {
                    dejaGAclicked = true;
                    if (typeof ga !== "undefined") {
                        var d = e.detail.data;
                        var trackers = []; var gs = ga.getAll();
                        for (var i = 0; i < gs.length; i++) {
                            var t = gs[i];
                            var rObj = {};
                            rObj.name = t.get("name");
                            rObj.trackingId = t.get("trackingId");
                            trackers.push(rObj);
                        }

                        var variation = d.Variation == "" ? "ORIGINAL" : "VARIATION";
                        var campaignName = d.ForkName + " - " + variation;
                        for (var i = 0; i < trackers.length; i++) {
                            var t = trackers[i];
                            if (t.name == "gaOne") {
                                ga(t.name + '.send', { hitType: 'event', eventCategory: 'BEYABLE', eventAction: 'click', eventLabel: "T-" + campaignName, nonInteraction: true });
                            }
                        }
                    }
                });
            }

            // Envoyer les interactions dans GA
            var dejaGAinteracted = false;
            if (!dejaGAinteracted) {
                window.addEventListener("BY_campaigninteracted", function (e) {
                    dejaGAinteracted = true;
                    if (typeof ga !== "undefined") {
                        var d = e.detail.data;
                        var trackers = []; var gs = ga.getAll();
                        for (var i = 0; i < gs.length; i++) {
                            var t = gs[i];
                            var rObj = {};
                            rObj.name = t.get("name");
                            rObj.trackingId = t.get("trackingId");
                            trackers.push(rObj);
                        }

                        var variation = d.Variation == "" ? "ORIGINAL" : "VARIATION";
                        var campaignName = d.ForkName + " - " + variation;
                        for (var i = 0; i < trackers.length; i++) {
                            var t = trackers[i];
                            if (t.name == "gaOne") {
                                ga(t.name + '.send', { hitType: 'event', eventCategory: 'BEYABLE', eventAction: 'click', eventLabel: "T-" + campaignName, nonInteraction: true });
                            }
                        }
                    }
                });
            }

            loadS('beYableJSv3-001.js');


            // Recharger le script sur les pages catalogue
            if (location.href.indexOf('catalogue/carrefour/') > -1) {
                if (typeof dataLayer !== "undefined") {
                    var currentnb = -1; var indexviews = 0;
                    setInterval(function () {
                        try {
                            var nb = dataLayer.length;
                            if (nb == currentnb) return;
                            
                            for (var i = currentnb; i < nb; i++) {
                                var d = dataLayer[i];                                
                                if (Object.prototype.toString.call(d) != "[object Arguments]") continue;

                                var l = d.length;
                                if (l <= 2) continue;
                                if (d[1] != "page_view") continue;

                                indexviews++;
                                if (indexviews > 1) {
                                    // Supprimer la campagne du DOM
                                    var key = 'by_r_d6e388d5e9cd41a89591e1b31ea300c8';
                                    var sc = document.getElementById(key);
                                    if(sc) sc.parentNode.removeChild(sc);
                                    window[key] = null;

                                    loadS('beYableJSv3-001.js');
                                }
                            }

                            currentnb = nb;

                        } catch (e) { }
                    }, 125);
                }
            }
        }

        function by_GetUrlTtype(template) {
            var t = "G";
            switch (template) {
                case "homepage":
                    t = "H";
                    break;
                case "product-list":
                    t = "C";
                    break;
                case "product-details":
                    t = "FP";
                    break;
                case "checkout":
                    t = "B";
                    break;
                case "account":
                    t = "BA";
                case "search":
                    t = "S";
                    break;
                default:
            }

            return t;
        }

        function by_GetArrayFromLocalStorage(cartd) {
            var items = [];
            var cartsplit = cartd.split('$beyable_ci$');
            if (cartsplit) {
                var length = cartsplit.length;
                for (var i = 0; i < length; i++) {
                    var ci = cartsplit[i];
                    if (ci != '') {
                        var cip = ci.split('$ci$');
                        var product = {};
                        product.id = cip[6];
                        product.name = cip[0];
                        product.price = cip[1];
                        product.qty = cip[2];
                        product.from = cip[4];
                        items.push(product);
                    }
                }
            }

            return items;
        }

        function by_SetArrayToLocalStorage(items) {
            var length = items.length;
            var cartd = ''; var carttot = 0;
            for (var i = 0; i < length; i++) {
                var prod = items[i];
                var tags = prod.from;
                var temp = encodeURIComponent(prod.name) + '$ci$' + prod.price + '$ci$' + prod.qty + '$ci$$ci$' + tags + '$ci$$ci$' + prod.id + '$beyable_ci$';
                cartd = cartd + temp;
                carttot = carttot + parseInt(prod.qty) * parseFloat(prod.price);

            }
            localStorage.setItem('beyable-cartdexp', new Date().getTime());
            localStorage.setItem("beyable-cartd", cartd);

            by_CreateCookie('beyable-cart', carttot, 1 / 24);

        }

        function by_CreateCookie(name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + ";domain=.carrefour.fr; path=/";
        }

        function by_GetCookie(c_name) {
            var cookies = document.cookie;
            if (cookies.length > 0) {
                var c_start = cookies.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    var c_end = cookies.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = cookies.length;
                    }
                    return unescape(cookies.substring(c_start, c_end));
                }
            }
            return "";
        }

    })();
}