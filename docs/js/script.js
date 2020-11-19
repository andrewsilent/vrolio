window.addEventListener('load', function () {
    // axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR')
    // .then(function (response) {
    //     let btc1 = response.data[0].price_usd,
    //     btc2 = response.data[0].price_eur,
    //     percent = response.data[0].percent_change_24h,
    //     usd = document.querySelector('.btc .crypto-usd'),
    //     eur = document.querySelector('.btc .crypto-eur');

    //     btc1 = Math.round(btc1 *100)/100;
    //     btc2 = Math.round(btc2 *100)/100;
    //     usd.textContent = btc1 + ' USD';
    //     eur.textContent = btc2 + ' EUR';
    //     percentCalculation(usd, percent);
    // })
    
    // axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=EUR')
    // .then(function (response) {
    //     let eth1 = response.data[0].price_usd,
    //     eth2 = response.data[0].price_eur,
    //     percent = response.data[0].percent_change_24h,
    //     usd = document.querySelector('.eth .crypto-usd'),
    //     eur = document.querySelector('.eth .crypto-eur');

    //     eth1 = Math.round(eth1 *1000)/1000;
    //     eth2 = Math.round(eth2 *1000)/1000;
    //     usd.textContent = eth1 + ' USD';
    //     eur.textContent = eth2 + ' EUR';
    //     percentCalculation(usd, percent);
    // })
    // axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/?convert=EUR')
    // .then(function (response) {
    //     var xrp1 = response.data[0].price_usd,
    //     xrp2 = response.data[0].price_eur
    //     percent = response.data[0].percent_change_24h,
    //     usd = document.querySelector('.xrp .crypto-usd'),
    //     eur = document.querySelector('.xrp .crypto-eur');

    //     xrp1 = Math.round(xrp1 *1000000)/1000000;
    //     xrp2 = Math.round(xrp2 *1000000)/1000000;      
    //     document.querySelector('.xrp .crypto-usd').textContent = xrp1 + ' USD';
    //     document.querySelector('.xrp .crypto-eur').textContent = xrp2 + ' EUR';
    //     percentCalculation(usd, percent);
    // })
    // axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=EUR')
    // .then(function (response) {
    //     var ltc1 = response.data[0].price_usd,
    //     ltc2 = response.data[0].price_eur,
    //     percent = response.data[0].percent_change_24h,
    //     usd = document.querySelector('.ltc .crypto-usd'),
    //     eur = document.querySelector('.ltc .crypto-eur');
    //     ltc1 = Math.round(ltc1 *1000)/1000;
    //     ltc2 = Math.round(ltc2 *1000)/1000;
    //     document.querySelector('.ltc .crypto-usd').textContent = ltc1 + ' USD';
    //     document.querySelector('.ltc .crypto-eur').textContent = ltc2 + ' EUR';
    //     percentCalculation(usd, percent);
    // })
    // axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=EUR')
    // .then(function (response) {
    //     var bch1 = response.data[0].price_usd,
    //     bch2 = response.data[0].price_eur,
    //     percent = response.data[0].percent_change_24h,
    //     usd = document.querySelector('.bch .crypto-usd'),
    //     eur = document.querySelector('.bch .crypto-eur');
    //     bch1 = Math.round(bch1 *1000)/1000;
    //     bch2 = Math.round(bch2 *1000)/1000;
    //     document.querySelector('.bch .crypto-usd').textContent = bch1 + ' USD';
    //     document.querySelector('.bch .crypto-eur').textContent = bch2 + ' EUR';
    //     percentCalculation(usd, percent);
    // })
    // axios.get('https://api.coinmarketcap.com/v1/ticker/cardano/?convert=EUR')
    // .then(function (response) {
    //     var ada1 = response.data[0].price_usd,
    //     ada2 = response.data[0].price_eur,
    //     percent = response.data[0].percent_change_24h,
    //     usd = document.querySelector('.ada .crypto-usd'),
    //     eur = document.querySelector('.ada .crypto-eur');
    //     ada1 = Math.round(ada1 *1000000)/1000000;
    //     ada2 = Math.round(ada2 *1000000)/1000000;
    //     document.querySelector('.ada .crypto-usd').textContent = ada1 + ' USD';
    //     document.querySelector('.ada .crypto-eur').textContent = ada2 + ' EUR';
    //     percentCalculation(usd, percent);
    // })


    axios.get('https://hubculture.com/markets/api', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function (response) {
            let ven = response.data.filter(function(e) {
                return ((e.secondary_currency == 'BTC')||(e.secondary_currency == 'ETH')||(e.secondary_currency == 'XRP')||(e.secondary_currency == 'BCH'))
            })
            console.log('ven', ven);
            for (let i=0; i<ven.length; i++) {
                console.log('current', ven[i].current_amount);
                console.log('difference', ven[i].currency_diff);
                let percent, span, spanClass, indicator;
                percent = 100*parseFloat(ven[i].currency_diff)/parseFloat(ven[i].current_amount);
                percent = Math.round(percent*100000)/100000;
                (percent > 0) ? (spanClass = 'up', indicator = '+') : (spanClass = 'down', indicator = '-')
                span = ' <span class="' + spanClass + '"> ' + indicator + percent + '%<\/span>';
                document.querySelector('.'+ven[i].secondary_currency+' .crypto-percent').innerHTML = span;
                document.querySelector('.'+ven[i].secondary_currency+' .crypto-ven').textContent = ven[i].current_amount;
            }
    })

    
    .catch(function (error) {
        console.log(error);
    });






/*it works */   
    // function createCORSRequest(method, url) {
    //     console.log('url', url);
    //     $.ajax({
    //         url: 'https://apilaravel.ven.vc/api/ven/exchange',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         type: "GET", /* or type:"GET" or type:"PUT" */
    //         dataType: "json",
    //         data: {
    //         },
    //         success: function (result) {
    //             console.log(result);    
    //         },
    //         error: function () {
    //             console.log("error");
    //         }
    //     });
    //     console.log('!!!', xhr);
    //     return xhr;
    //   }
      
    //   var xhr = createCORSRequest('GET', 'https://apilaravel.ven.vc/api/ven/exchange');
    //   if (!xhr) {
    //     throw new Error('!!!CORS not supported');
    //   }
    //   xhr.send();
/* */










    // function percentCalculation(usd, percent){
    //     percent>=0 ? usd.innerHTML += ' <span class="up">' + percent + '%</span>' : (usd.innerHTML += ' <span class="down">' + percent + '%</span>');
    // }

    let HXTTP = window.XDomainRequest || window.XMLHttpRequest
        xmlhttp = new HXTTP();       
        xmlhttp.open("GET", "https://hubculture.com/", true);
        xmlhttp.onerror = function(){ console.log("Error") }
        xmlhttp.send();
        xmlhttp.onload = parseHub;
        
        function parseHub() {
            hubculture = xmlhttp.responseText;
            let parser = new DOMParser();
            const html = parser.parseFromString(hubculture, "text/html");
            let hubImage, hubTitle, hubAnnounce, exImage, exTitle, exAnnounce;
            hubImage = html.querySelectorAll('.thecardtsk img');
            hubTitle = html.querySelectorAll('.thecardtsk .cardtsk-title');
            hubAnnounce = html.querySelectorAll('.thecardtsk span p');
            hubReadmore = html.querySelectorAll('.cardtsk-outmore')
            exImage = document.querySelectorAll('.article-image');
            exTitle = document.querySelectorAll('.article-title a');
            exAnnounce = document.querySelectorAll('.article-announce');
            exReadmore = document.querySelectorAll('.article-readmore');
            exDate = document.querySelectorAll('.article-date');
            date = new Date()

            for ( let i=0; i<3; i++) {
                exImage[i].style.backgroundImage = 'url('+hubImage[i].src+')';
                exImage[i].title = hubImage[i].alt;
                exTitle[i].innerHTML = hubTitle[i].innerHTML;
                exAnnounce[i].innerHTML = hubAnnounce[i].innerHTML;
                exReadmore[i].innerHTML = hubReadmore[i].innerHTML;
                exReadmore[i].title = hubReadmore[i].title;
                let asd = hubReadmore[i].href.indexOf('\/hubs');
                let href = hubReadmore[i].href
                href = href.substr(asd,href.length);
                href = 'http://hubculture.com'+href;
                exReadmore[i].href = href;
                exTitle[i].href = href;
                exDate[i].innerHTML = date.toLocaleDateString();
            }
        }
  })