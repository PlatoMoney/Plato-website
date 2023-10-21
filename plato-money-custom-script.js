jQuery(document).ready(function ($) {
Weglot.initialize({
    api_key: 'wg_63b34b464b6d466da0244d9f73d8b79e8'
  });

  Weglot.on('initialized', ()=>{
    const currentLang = Weglot.getCurrentLang();
    updateSW6FlagDropdownLinks(currentLang);
  });
  document.querySelectorAll('.wg-element-wrapper.sw6 [lang]').forEach((link)=>{
      link.addEventListener('click', function(e){
        e.preventDefault();     
        Weglot.switchTo(this.getAttribute('lang'));
        updateSW6FlagDropdownLinks(this.getAttribute('lang'));
      });
  });
   $('.tab').click(function(){
    var width = $(window).width();
  	if(width < 768) {
      $("body,html").animate(
      {
        scrollTop: $("#help-tabs").offset().top
      },
      800 //speed
      );
      var div = $(this).find('div');
      div = div.text();
      $('.mobile-dropdown-text').text(div);
    }
  });
   setTimeout(function() { 
    var bodyClass = document.querySelector("body"); 
    if (bodyClass.classList.contains("home-page-body")) {
        Weglot.on("languageChanged", function() {
            languageCheck()
        })
        var video = $(".w-iframe iframe").attr("src");
        
        $('.home-page-body').on("click", '#modal-overlay-close', function(){
        $(".w-iframe iframe").attr("src","");
        $(".w-iframe iframe").attr("src",video);
        })

        $('#youtube-modal-open').on('click',function(e){
        $(".w-iframe iframe").attr('src', $(".w-iframe iframe").attr('src') + '?autoplay=1'); 
        });

    function languageCheck() {
        var currentLanguage = Weglot.getCurrentLang(); 
        if(currentLanguage === 'en'){
        video = "https://www.youtube.com/embed/O_iPSSSvNmg";
        document.getElementById("calculate-fees").innerHTML = `
        <div class="fees-calculator-wrapper">
            <p>Sender country</p>
            <div class="custom-select-wrapper sender-country-input">
                <div class="custom-select">
                    <div class="custom-select__trigger"><span>United Kingdom</span>
                        <div class="arrow"></div>
                    </div>
                    <div class="custom-options">
                        <span class="custom-option selected" data-value="United Kingdom">United Kingdom</span>
                        <span class="custom-option" data-value="Sweden">Sweden</span>
                        <span class="custom-option" data-value="Germany">Germany</span>
                        <span class="custom-option" data-value="Austria">Austria</span>
                        <span class="custom-option" data-value="France">France</span>
                        <hr>
                        <span class="custom-option" data-value="Belgium">Belgium</span>
                        <span class="custom-option" data-value="Croatia">Croatia</span>
                        <span class="custom-option" data-value="Cyprus">Cyprus</span>
                        <span class="custom-option" data-value="Czech Republic">Czech Republic</span>
                        <span class="custom-option" data-value="Denmark">Denmark</span>
                        <span class="custom-option" data-value="Estonia">Estonia</span>
                        <span class="custom-option" data-value="Finland">Finland</span>
                        <span class="custom-option" data-value="Greece">Greece</span>
                        <span class="custom-option" data-value="Hungary">Hungary</span>
                        <span class="custom-option" data-value="Iceland">Iceland</span>
                        <span class="custom-option" data-value="Ireland">Ireland</span>
                        <span class="custom-option" data-value="Italy">Italy</span>
                        <span class="custom-option" data-value="Latvia">Latvia</span>
                        <span class="custom-option" data-value="Liechtenstein">Liechtenstein</span>
                        <span class="custom-option" data-value="Lithuania">Lithuania</span>
                        <span class="custom-option" data-value="Luxembourg">Luxembourg</span>
                        <span class="custom-option" data-value="Malta">Malta</span>
                        <span class="custom-option" data-value="Netherlands">Netherlands</span>
                        <span class="custom-option" data-value="Norway">Norway</span>
                        <span class="custom-option" data-value="Poland">Poland</span>
                        <span class="custom-option" data-value="Portugal">Portugal</span>
                        <span class="custom-option" data-value="Romania">Romania</span>
                        <span class="custom-option" data-value="Slovakia">Slovakia</span>
                        <span class="custom-option" data-value="Slovenia">Slovenia</span>
                        <span class="custom-option" data-value="Spain">Spain</span>
                    </div>
                </div>
            </div>
            <p>Recipient country</p>
            <div class="custom-select-wrapper">
                <div class="custom-select">
                    <div class="custom-select__trigger"><span>Serbia</span>
                        <div class="arrow"></div>
                    </div>
                    <div class="custom-options">
                        <span class="custom-option selected" data-value="Serbia">Serbia</span>
                        <span class="custom-option" data-value="Bosnia and Herzegovina">Bosnia and Herzegovina</span>
                        <span class="custom-option" data-value="Montenegro">Montenegro</span>
                        <span class="custom-option" data-value="North Macedonia">North Macedonia</span>
                        <span class="custom-option" data-value="Albania">Albania</span>
						            <hr>
                        <span class="custom-option" data-value="Austria">Austria</span>
                        <span class="custom-option" data-value="Belgium">Belgium</span>
                        <span class="custom-option" data-value="Bulgaria">Bulgaria</span>
                        <span class="custom-option" data-value="Croatia">Croatia</span>
                        <span class="custom-option" data-value="Cyprus">Cyprus</span>
                        <span class="custom-option" data-value="Czech Republic">Czech Republic</span>
                        <span class="custom-option" data-value="Denmark">Denmark</span>
                        <span class="custom-option" data-value="Estonia">Estonia</span>
                        <span class="custom-option" data-value="Finland">Finland</span>
                        <span class="custom-option" data-value="France">France</span>
                        <span class="custom-option" data-value="Germany">Germany</span>
                        <span class="custom-option" data-value="Greece">Greece</span>
                        <span class="custom-option" data-value="Hungary">Hungary</span>
                        <span class="custom-option" data-value="Iceland">Iceland</span>
                        <span class="custom-option" data-value="Ireland">Ireland</span>
                        <span class="custom-option" data-value="Italy">Italy</span>
                        <span class="custom-option" data-value="Latvia">Latvia</span>
                        <span class="custom-option" data-value="Liechtenstein">Liechtenstein</span>
                        <span class="custom-option" data-value="Lithuania">Lithuania</span>
                        <span class="custom-option" data-value="Luxembourg">Luxembourg</span>
                        <span class="custom-option" data-value="Malta">Malta</span>
                        <span class="custom-option" data-value="Netherlands">Netherlands</span>
                        <span class="custom-option" data-value="Norway">Norway</span>
                        <span class="custom-option" data-value="Poland">Poland</span>
                        <span class="custom-option" data-value="Portugal">Portugal</span>
                        <span class="custom-option" data-value="Romania">Romania</span>
                        <span class="custom-option" data-value="Slovakia">Slovakia</span>
                        <span class="custom-option" data-value="Slovenia">Slovenia</span>
                        <span class="custom-option" data-value="Spain">Spain</span>
                        <span class="custom-option" data-value="Sweden">Sweden</span>
                    </div>
                </div>
            </div>
            <p>Amount recipient will receive</p>
            <div class="send-value-wrapper">
                <input type="number" class="price-input">
                <div class="custom-select-wrapper currency-input">
                    <div class="custom-select">
                        <div class="custom-select__trigger"><span>GBP</span></div>
                        <!-- <div class="custom-select__trigger"><span>EUR</span>
                            <div class="arrow"></div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="eur">EUR</span>
                            <span class="custom-option" data-value="GBP">GBP</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="transfer-fee">
                <div class="fee-icon">+</div>
                <p><span class="fee-value">0</span><span id="fee-currency"></span> Transfer Fee</p>
            </div>

            <div class="total-amount-container">
                <p class="total-amount-heading">Amount you will send with fees</p>
                <div class="total-amount-wrapper">
                    <p class="total-amount-value">0</p><span id="total-amount-currency">£</span>
                </div>
            </div>
        </div>
        `;
        } else if (currentLanguage === 'sr') {
        video = "https://www.youtube.com/embed/e688MKR8yDQ";
            document.getElementById("calculate-fees").innerHTML = `
            <div class="fees-calculator-wrapper">
                <p>Zemlja iz koje šaljete novac</p>
                <div class="custom-select-wrapper sender-country-input">
                    <div class="custom-select">
                        <div class="custom-select__trigger"><span>Velika Britanija</span>
                            <div class="arrow"></div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="United Kingdom">Velika Britanija</span>
                            <span class="custom-option" data-value="Sweden">Švedska</span>
                            <span class="custom-option" data-value="Germany">Nemačka</span>
                            <span class="custom-option" data-value="Austria">Austrija</span>
                            <span class="custom-option" data-value="France">Francuska</span>
                            <hr>
                            <span class="custom-option" data-value="Belgium">Belgija</span>
                            <span class="custom-option" data-value="Belgium">Bugarska</span>
                            <span class="custom-option" data-value="Croatia">Hrvatska</span>
                            <span class="custom-option" data-value="Cyprus">Kipar</span>
                            <span class="custom-option" data-value="Czech Republic">Češka</span>
                            <span class="custom-option" data-value="Denmark">Danska</span>
                            <span class="custom-option" data-value="Estonia">Estonija</span>
                            <span class="custom-option" data-value="Finland">Finska</span>
                            <span class="custom-option" data-value="Greece">Grčka</span>
                            <span class="custom-option" data-value="Hungary">Mađarska</span>
                            <span class="custom-option" data-value="Iceland">Island</span>
                            <span class="custom-option" data-value="Ireland">Irska</span>
                            <span class="custom-option" data-value="Italy">Italija</span>
                            <span class="custom-option" data-value="Latvia">Letonija</span>
                            <span class="custom-option" data-value="Liechtenstein">Lihtenštajn</span>
                            <span class="custom-option" data-value="Lithuania">Litvanija</span>
                            <span class="custom-option" data-value="Luxembourg">Luksemburg</span>
                            <span class="custom-option" data-value="Malta">Malta</span>
                            <span class="custom-option" data-value="Netherlands">Holandija</span>
                            <span class="custom-option" data-value="Norway">Norveška</span>
                            <span class="custom-option" data-value="Poland">Poljska</span>
                            <span class="custom-option" data-value="Portugal">Portugalija</span>
                            <span class="custom-option" data-value="Romania">Rumunija</span>
                            <span class="custom-option" data-value="Slovakia">Slovačka</span>
                            <span class="custom-option" data-value="Slovenia">Slovenija</span>
                            <span class="custom-option" data-value="Spain">Španija</span>
                        </div>
                    </div>
                </div>

                <p>Zemlja u koju šaljete novac</p>
                <div class="custom-select-wrapper">
                    <div class="custom-select">
                        <div class="custom-select__trigger"><span>Srbija</span>
                            <div class="arrow"></div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="Serbia">Srbija</span>
                            <span class="custom-option" data-value="Bosnia and Herzegovina">Bosna i Hercegovina</span>
                            <span class="custom-option" data-value="Montenegro">Crna Gora</span>
                            <span class="custom-option" data-value="North Macedonia">Severna Makedonija</span>
                            <span class="custom-option" data-value="Albania">Albanija</span>
                            						            <hr>
                        <span class="custom-option" data-value="Austria">Austria</span>
                        <span class="custom-option" data-value="Belgium">Belgija</span>
                        <span class="custom-option" data-value="Bulgaria">Bugarska</span>
                        <span class="custom-option" data-value="Croatia">Hrvatska</span>
                        <span class="custom-option" data-value="Cyprus">Kipar</span>
                        <span class="custom-option" data-value="Czech Republic">Češka Republika</span>
                        <span class="custom-option" data-value="Denmark">Danska</span>
                        <span class="custom-option" data-value="Estonia">Estonija</span>
                        <span class="custom-option" data-value="Finland">Finska</span>
                        <span class="custom-option" data-value="France">Francuska</span>
                        <span class="custom-option" data-value="Germany">Nemačka</span>
                        <span class="custom-option" data-value="Greece">Grčka</span>
                        <span class="custom-option" data-value="Hungary">Mađarska</span>
                        <span class="custom-option" data-value="Iceland">Island</span>
                        <span class="custom-option" data-value="Ireland">Irska</span>
                        <span class="custom-option" data-value="Italy">Italija</span>
                        <span class="custom-option" data-value="Latvia">Latvija</span>
                        <span class="custom-option" data-value="Liechtenstein">Liechtenstajn</span>
                        <span class="custom-option" data-value="Lithuania">Litvanija</span>
                        <span class="custom-option" data-value="Luxembourg">Luksemburg</span>
                        <span class="custom-option" data-value="Malta">Malta</span>
                        <span class="custom-option" data-value="Netherlands">Holandija</span>
                        <span class="custom-option" data-value="Norway">Norveška</span>
                        <span class="custom-option" data-value="Poland">Poljska</span>
                        <span class="custom-option" data-value="Portugal">Portugal</span>
                        <span class="custom-option" data-value="Romania">Rumunija</span>
                        <span class="custom-option" data-value="Slovakia">Slovačka</span>
                        <span class="custom-option" data-value="Slovenia">Slovenia</span>
                        <span class="custom-option" data-value="Spain">Španija</span>
                        <span class="custom-option" data-value="Sweden">Švedska</span>
                        </div>
                    </div>
                </div>

                <p>Iznos koji će primalac primiti</p>
                <div class="send-value-wrapper">
                    <input type="number" class="price-input">
                    <div class="custom-select-wrapper currency-input">
                        <div class="custom-select">
                        <div class="custom-select__trigger"><span>GBP</span></div>
                        <!-- <div class="custom-select__trigger"><span>EUR</span>
                            <div class="arrow"></div>
                        </div>
                            <div class="custom-options">
                            <span class="custom-option selected" data-value="eur">EUR</span>
                            <span class="custom-option" data-value="GBP">GBP</span>
                        </div> -->
                        </div>
                    </div>
                </div>

                <div class="transfer-fee">
                    <div class="fee-icon">+</div>
                    <p><span class="fee-value">0</span><span id="fee-currency"></span> provizija za transfer</p>
                </div>

                <div class="total-amount-container">
                    <p class="total-amount-heading">Iznos koji ćete platiti sa uračunatom provizijom</p>
                    <div class="total-amount-wrapper">
                        <p class="total-amount-value">0</p><span id="total-amount-currency">£</span>
                    </div>
                </div>
            </div>
        `;
        }
        document.getElementById("youtube-modal-frame").innerHTML = `<div class="html-embed w-embed w-iframe"><iframe id="youtube-video" width="100%" height="100%" src=${video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }
        languageCheck()
    }
	}, 1000);
});
  

  function updateSW6FlagDropdownLinks(currentLang){
    const $wrapper = document.querySelector('.wg-element-wrapper.sw6'); 
    if($wrapper.querySelector('.w-dropdown-toggle').getAttribute('lang') !== currentLang){
      const $activeLangLink = $wrapper.querySelector('[lang='+currentLang+']');
      const childDiv = $activeLangLink.innerHTML;
      const $toggle = $wrapper.querySelector('.w-dropdown-toggle');
      const toggleDiv = $toggle.innerHTML;
      $toggle.innerHTML = childDiv;
      $activeLangLink.innerHTML = toggleDiv;
      const lang = $activeLangLink.getAttribute('lang');
      const toggleLang = $toggle.getAttribute('lang');
      $toggle.setAttribute('lang', lang);
      $activeLangLink.setAttribute('lang', toggleLang);
    }
  }
  $('#calculate-fees').on('click', ".custom-option", function(){
     if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
  }); 
  $('#calculate-fees').on('click', ".custom-select-wrapper", function(){
     this.querySelector('.custom-select').classList.toggle('open');
  }); 
  $('#calculate-fees').on('click', ".custom-select", function(e){
     if (!this.contains(e.target)) {
        this.classList.remove('open');
      }
  }); 
  $('#calculate-fees').on('input', ".price-input", function(){
      var value = $('.price-input').val();
      if(value < 701){
        var fee = 1.95;
      } else if(value > 700 && value < 1201){
        var fee = 2.95;
      } else if(value > 1200 && value < 1701){
        var fee = 4.95;
      } else {
        var fee = (value * 0.5) / 100;
      }
      fee = fee.toFixed(2);
      var total = Number(value) + Number(fee);
      if(value > 1700){
        $('.fee-value').text('0.5%');
      } else {
        $('.fee-value').text(fee);
      }
     	$('.total-amount-value').text(total);
  });
  $('#calculate-fees').on('DOMSubtreeModified', ".currency-input .custom-select__trigger span", function(){
    var curency = $('.currency-input .custom-select__trigger span').text();
    if(curency == "GBP"){
        $('#total-amount-currency').text("£");
    } else if(curency == "EUR"){
        $('#total-amount-currency').text("€");
    }
  });  
  $( document ).ready(function() {
    $('#promo-eur').css("display", "none");
  });
  $('#calculate-fees').on('DOMSubtreeModified', ".sender-country-input .custom-select__trigger span", function(){
    var country = $('.sender-country-input .custom-select__trigger span').text();
    if(country == "Velika Britanija" || country == "United Kingdom"){
        $('#total-amount-currency').text("£");
      	$('.currency-input .custom-select__trigger span').text("GBP");
      	$('#promo-gbp').css("display", "block");
      	$('#promo-eur').css("display", "none");
    } else {
        $('#total-amount-currency').text("€");
      	$('.currency-input .custom-select__trigger span').text("EUR");
      	$('#promo-gbp').css("display", "none");
      	$('#promo-eur').css("display", "block");
    }
  });  
    $( document ).ready(function() {
      $('#selected-language').html('<span class="flag-icon flag-icon-gb flag-icon-squared"></span>' + '<span style="margin-left:10px;">United Kingdom</span>');
  });
  	$('.tc-country-select').each(function(i, obj) {
      let text = $(this).text();
      let id = $(this).attr('id').toLowerCase();
      $(this).html('<span class="flag-icon flag-icon-'+ id +' flag-icon-squared"></span>' + '<span style="margin-left:10px;">'+ text+'</span>');
	  });
    $('.tc-country-select').click(function(e){
      e.preventDefault();
      let selectedLanguage = $(this).html();
      $('#selected-language').html(selectedLanguage);
      showSection = $(this).attr("section");
      $('.tc-section').hide();
      $('.english-section').hide();
      $('#' + showSection).show();
      $('#w-dropdown-list-1').removeClass("w--open");
      $('#w-dropdown-toggle-1').removeClass("w--open");
      $('#w-dropdown-toggle-1').attr('aria-expanded', 'false');
    });
