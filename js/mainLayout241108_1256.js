const mainHTML = `
    <div class="mn-cont">
        <nav class="pagination-vertical">
            <ul>
                <li>
                    <a href="#section0"><span>page1</span></a>
                </li>
                <li>
                    <a href="#section1"><span>page2</span></a>
                </li>
                <li>
                    <a href="#section2"><span>page3</span></a>
                </li>
                <li>
                    <a href="#section3"><span>page4</span></a>
                </li>
                <li>
                    <a href="#section4"><span>page5</span></a>
                </li>
            </ul>
            <div class="controller">
                <button type="button" class="prev">&lt;</button>
                <button type="button" class="next">&gt;</button>
            </div>
        </nav>
        <section class="mn-section bg-dark mn-biz" id="section0">
            <div class="wrap">
                <div class="cont">
                    <header class="mn-tit-area">
                        <h2 class="mn-tit"><span>티링크 비즈</span></h2>
                        <div class="mn-txt-area">
                            <cite>어디서든 저렴하고 간편하게<br>
                                사용 가능한 녹취, 고객관리시스템</cite>
                            <p class="pc mn-txt">티링크 비즈는 인터넷전화기와 PC 폰, 스마트폰을 활용해서<br>
                                어디서든 저렴하고 간편하게 사용 가능한 녹취, 고객관리시스템입니다.<br>
                                사무실에서는 인터넷전화기로 재택 근무 시에는 PC폰으로<br>
                                외근 중에는 스마트폰으로 사용하시면 됩니다.</p>
                        </div>
                    </header>
                    <picture>
                        <source media="(max-width:767px)" srcset="https://tlinkjuin.cafe24.com/quvassets/images/biz-mo.png">
                        <img src="https://tlinkjuin.cafe24.com/quvassets/images/biz.png" alt="티링크 비즈">
                    </picture>
                    <p class="mo mn-txt">티링크 비즈는 인터넷전화기와 PC 폰, 스마트폰을 활용해서<br>
                        어디서든 저렴하고 간편하게 사용 가능한 녹취, 고객관리시스템입니다.<br>
                        사무실에서는 인터넷전화기로 재택 근무 시에는 PC폰으로<br>
                        외근 중에는 스마트폰으로 사용하시면 됩니다.
                    </p>
                </div>
                <a href="http://tlinkcrm.co.kr/bizsolution" class="btn-more">더보기</a>
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/biz-obj1.png" alt="" class="obj1">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/biz-obj2.png" alt="" class="obj2">
                </figure>
            </div>
        </section>
        <section class="mn-section bg mn-crm" id="section1">
            <div class="wrap">
                <div class="cont">
                    <header class="mn-tit-area">
                        <h2 class="mn-tit">티링크<br>
                            <span>모바일CRM</span>
                        </h2>
                        <div class="mn-txt-area">
                            <cite>어디서든 업무가 가능한<br>
                                모바일CRM으로 업무효율 up!
                            </cite>
                            <p class="pc mn-txt">· 외근이나 재택 근무시 사용에 적합<br>
                                · 010 휴대폰번호를 사용하여 통화 성공률 향상<br>
                                · 티링크 프로그램에서 대량문자발송 (스마트폰 요금제 사용으로 문자 비용 무료)<br>
                                · AI를 이용한 명함자동등록 기능<br>
                                · 고객관리 프로그램에서 전화걸기 기능
                                .</p>
                        </div>
                    </header>
                    <picture>
                        <source media="(max-width:767px)" srcset="https://tlinkjuin.cafe24.com/quvassets/images/crm-mo.png">
                        <img src="https://tlinkjuin.cafe24.com/quvassets/images/crm.png" alt="티링크 비즈">
                    </picture>
                    <p class="mo mn-txt">· 외근이나 재택 근무시 사용에 적합<br>
                        · 010 휴대폰번호를 사용하여 통화 성공률 향상<br>
                        · 티링크 프로그램에서 대량문자발송 <small>(스마트폰 요금제 사용으로 문자 비용 무료)</small><br>
                        · AI를 이용한 명함자동등록 기능<br>
                        · 고객관리 프로그램에서 전화걸기 기능
                    </p>
                </div>
                <a href="http://tlinkcrm.co.kr/32" class="btn-more">더보기</a>
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/crm-obj1.png" alt="" class="obj1">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/crm-obj2.png" alt="" class="obj2">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/crm-obj3.png" alt="" class="obj3">
                </figure>
            </div>
        </section>
        <section class="mn-section mn-pcphone" id="section2">
            <div class="wrap">
                <div class="cont">
                    <header class="mn-tit-area">
                        <h2 class="mn-tit"><span>티링크 PC폰</span></h2>
                        <div class="mn-txt-area">
                            <cite>
                                PC에 설치하여 어디서든 사무실처럼,<br>
                                재택근무 최적화 시스템!
                            </cite>
                            <p class="pc mn-txt">
                                · 인터넷전화기와 PC폰 중 필요에 따라 선택하여 사용 가능<br>
                                · 개별 녹취, 중앙 녹취 모두 지원 (녹취서버 → 임대형, 구축형 중 선택)<br>
                                · 코로나19와 같은 긴급재난상황에서도 유연하게 재택근무로 변경 가능
                            </p>
                        </div>
                    </header>
                    <picture>
                        <source media="(max-width:767px)" srcset="https://tlinkjuin.cafe24.com/quvassets/images/pcphone-mo.png">
                        <img src="https://tlinkjuin.cafe24.com/quvassets/images/pcphone.png" alt="">
                    </picture>
                    <p class="mo mn-txt">
                        · 인터넷전화기와 PC폰 중 필요에 따라 선택하여 사용 가능<br>
                        · 개별 녹취, 중앙 녹취 모두 지원 (녹취서버 → 임대형, 구축형 중 선택)<br>
                        · 코로나19와 같은 긴급재난상황에서도 유연하게 재택근무로 변경 가능</p>
                </div>
                <a href="http://tlinkcrm.co.kr/softphone" class="btn-more">더보기</a>
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/pcphone-obj1.png" alt="" class="obj1">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/pcphone-obj2.png" alt="" class="obj2">
                </figure>
            </div>
        </section>
        <section class="mn-section bg-dark mn-company" id="section3">
            <div class="wrap">
                <div class="cont">
                    <header class="mn-tit-area">
                        <h2 class="mn-tit"><span>기업용</span><br>
                            <span>인터넷 &amp; 전화</span>
                        </h2>
                        <div class="mn-txt-area">
                            <cite>
                                고객사 환경에 가장 적합한
                                환경으로 개통하여 드립니다.
                            </cite>
                            <p class="pc mn-txt">기업용 인터넷, 인터넷전화, 전국대표번호, 휴대폰 등<br>
                                고객사 환경에 가장 유리한 쪽으로 개통하여 드립니다.<br>
                                국내통신 서비스를 가장 잘 아는 “티링크”에 맡겨주십시오.
                            </p>
                        </div>
                    </header>
                    <picture>
                        <source media="(max-width:767px)" srcset="https://tlinkjuin.cafe24.com/quvassets/images/company-mo.png" alt="">
                        <img src="https://tlinkjuin.cafe24.com/quvassets/images/company.png" alt="">
                    </picture>
                    <p class="mo mn-txt">기업용 인터넷, 인터넷전화, 전국대표번호, 휴대폰 등<br>
                        고객사 환경에 가장 유리한 쪽으로 개통하여 드립니다.<br>
                        국내통신 서비스를 가장 잘 아는 “티링크”에 맡겨주십시오.</p>
                </div>
                <a href="http://tlinkcrm.co.kr/13#tab-1W58RO" class="btn-more">더보기</a>
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/company-obj1.png" alt="" class="obj1">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/company-obj2.png" alt="" class="obj2">
                </figure>
            </div>
        </section>
        <section class="mn-section bg mn-network" id="section4">
            <div class="wrap">
                <div class="cont">
                    <header class="mn-tit-area">
                        <h2 class="mn-tit"><span>IT / 네트워크</span></h2>
                        <div class="mn-txt-area">
                            <cite>
                                유지보수, 네트워크 작업, 장비납품
                            </cite>
                            <p class="mn-txt">업계 최고의 속도와 안정적인 품질을 제공하는 <br class="mo">기업전용 인터넷서비스</p>
                        </div>
                    </header>
                    <picture>
                        <source media="(max-width:767px)" srcset="https://tlinkjuin.cafe24.com/quvassets/images/network-mo.png">
                        <img src="https://tlinkjuin.cafe24.com/quvassets/images/network.png" alt="">
                    </picture>
                    <p class="mo mn-txt"></p>
                </div>
                <a href="http://tlinkcrm.co.kr/18#tab-2W58RO" class="btn-more">더보기</a>
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/network-obj1.png" alt="" class="obj1">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/network-obj2.png" alt="" class="obj2">
                </figure>
            </div>
        </section>
        <section class="mn-section h-auto mn-support">
            <div class="wrap">
                <div class="cont">
                    <h2 class="mn-tit-sm"><span>고객지원</span></h2>
                    <ul>
                        <li>
                            <a href="https://smartstore.naver.com/tlink" target="_blank">
                                <img src="https://tlinkjuin.cafe24.com/quvassets/images/support1.png" alt="">
                                <cite>티링크 스토어</cite>
                            </a>
                        </li>
                        <li>
                            <a href="http://tlinkcrm.co.kr/9">
                                <img src="https://tlinkjuin.cafe24.com/quvassets/images/support2.png" alt="">
                                <cite>상담신청</cite>
                            </a>
                        </li>
                        <li>
                            <a href="http://tlinkcrm.co.kr/qna">
                                <img src="https://tlinkjuin.cafe24.com/quvassets/images/support3.png" alt="">
                                <cite>문의 게시판</cite>
                            </a>
                        </li>
                        <li>
                            <a href="http://tlinkcrm.co.kr/data">
                                <img src="https://tlinkjuin.cafe24.com/quvassets/images/support4.png" alt="">
                                <cite>자료실</cite>
                            </a>
                        </li>
                    </ul>
                </div>
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/support-obj.png" alt="" class="obj1">
                </figure>
            </div>
        </section>
        <section class="mn-section bg-dark h-auto mn-cs">
            <div class="wrap">
                <div class="cont">
                    <h2><img src="https://tlinkjuin.cafe24.com/quvassets/images/logo-wh.png" alt="TLINK"></h2>
                    <p><strong>티링크</strong>의 <strong>스마트 비지니스 서비스</strong>를 지금 경험하세요!</p>
                    <a href="tel:1877-3836">
                        <dl>
                            <dt>고객문의</dt>
                            <dd>1877-3836</dd>
                        </dl>
                    </a>
                </div>
    
                <figure class="obj-area">
                    <img src="https://tlinkjuin.cafe24.com/quvassets/images/cs-obj1.png" alt="" class="obj1">
                </figure>
            </div>
        </section>
    </div>
`;

// Select the target element
const elTarget = document.querySelector('#blkdfrm1');

if (elTarget) {
    // Insert the HTML into the target element
    elTarget.innerHTML = mainHTML;
}


(function ($) {
    $.fn.checkingScrollTop = function () {
        var init = function (nav) {
            var secTop = [];
            var $section = $('section[id^="section"]'),
                $sub = $(nav).find("li"),
                $subLink = [];
            var lastScrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            // 섹션 offsetTop 값 저장
            $sub.each(function (i) {
                $subLink[i] = $(this).find('a').attr('href').slice(-1);
                secTop[i] = parseInt($("#section" + $subLink[i]).offset().top);
            });

            // 초기화 - 첫 번째 섹션과 첫 번째 메뉴에 활성화 클래스 추가
            updateCurrentSection();

            // 스크롤 이벤트에 따른 활성화 상태 업데이트
            $(window).scroll(function () {
                updateCurrentSection();
                lastScrollTop = $(window).scrollTop();
            });

            // 현재 위치에 맞는 섹션과 메뉴 항목에 활성화 클래스 추가
            function updateCurrentSection() {
                var scrollTop = $(window).scrollTop();
                var currentIndex = -1;

                // 현재 스크롤 위치에 맞는 섹션 인덱스 찾기
                for (var i = 0; i < secTop.length; i++) {
                    if (scrollTop >= secTop[i] - windowHeight * 0.5 &&
                        (i === secTop.length - 1 || scrollTop < secTop[i + 1] - windowHeight * 0.5)) {
                        currentIndex = i;
                        break;
                    }
                }

                if (currentIndex !== -1) {
                    addCurrent($sub.eq(currentIndex), currentIndex);

                    // 스크롤 방향에 따라 아래쪽 섹션의 is-active 클래스 제거
                    if (scrollTop > lastScrollTop) {
                        // 스크롤을 아래로 내릴 때
                        $("#section" + currentIndex).addClass("is-active");
                    } else {
                        // 스크롤을 위로 올릴 때, 브라우저 높이의 75% 기준으로 is-active 클래스 제거
                        for (var j = currentIndex + 1; j < secTop.length; j++) {
                            if (scrollTop < secTop[j] - windowHeight * 0.75) {
                                $("#section" + j).removeClass("is-active");
                            }
                        }
                    }
                } else {
                    $sub.removeClass("current");
                    $section.removeClass("is-active");
                }
            }

            // 현재 활성화된 메뉴 및 섹션 설정
            function addCurrent(obj, index) {
                $sub.removeClass("current");
                $(obj).addClass("current");

                $("#section" + index).addClass("is-active");
            }
        };

        return this.each(function () {
            init(this);
        });
    };
})(jQuery);