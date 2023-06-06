
  // function for help center page
  // when user is on mobile and clicks on tabs
  // page will scroll to tabs content section
jQuery(document).ready(function ($) {
  $('.tab').click(function(){
    var width = $(window).width();
  	if(width < 768) {
      $("body,html").animate(
      {
        scrollTop: $("#help-tabs").offset().top
      },
      800 //speed
      );
    }
  });
});
  

  



  
  //code for homepage calculator and homepage modal youtube video
var bodyClass = document.querySelector("body"); 
if (bodyClass.classList.contains("home-page-body")) {
    var video = $(".w-iframe iframe").attr("src");
    
    // on modal close, we clear the video src to empty so it stops playing
    // and then put back the original video src
    $('.home-page-body').on("click", '#modal-overlay-close', function(){
      $(".w-iframe iframe").attr("src","");
      $(".w-iframe iframe").attr("src",video);
    })

    
    // on modal open we replace the url with autoplay, so it starts playing automaticly
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
                  </div>
              </div>
          </div>

          <p>Amount recipient will receive</p>
          <div class="send-value-wrapper">
              <input type="number" class="price-input">
              <div class="custom-select-wrapper currency-input">
                  <div class="custom-select">
                    <div class="custom-select__trigger"><span>EUR</span></div>
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
              <div class="fee-icon"></div>
              <p><span class="fee-value">0</span><span id="fee-currency"></span> Transfer Fee</p>
          </div>

          <div class="total-amount-container">
              <p class="total-amount-heading">Amount you will send with fees</p>
              <div class="total-amount-wrapper">
                  <p class="total-amount-value">0</p><span id="total-amount-currency">€</span>
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
                    </div>
                </div>
            </div>

            <p>Iznos koji će primalac primiti</p>
            <div class="send-value-wrapper">
                <input type="number" class="price-input">
                <div class="custom-select-wrapper currency-input">
                    <div class="custom-select">
                      <div class="custom-select__trigger"><span>EUR</span></div>
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
                <div class="fee-icon"></div>
                <p><span class="fee-value">0</span><span id="fee-currency"></span> provizija za transfer</p>
            </div>

            <div class="total-amount-container">
                <p class="total-amount-heading">Iznos koji ćete platiti sa uračunatom provizijom</p>
                <div class="total-amount-wrapper">
                    <p class="total-amount-value">0</p><span id="total-amount-currency">€</span>
                </div>
            </div>
        </div>
      `;
    }
    document.getElementById("youtube-modal-frame").innerHTML = `<div class="html-embed w-embed w-iframe"><iframe id="youtube-video" width="100%" height="100%" src=${video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }

  
  document.addEventListener("DOMContentLoaded", function() {
   languageCheck()
	});



}
