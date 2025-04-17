<template>
    <!-- 비행기 애니메이션을 보여주는 컨테이너, Country 클릭시 표시 -->
    <div class="fly-view" :class="{ active: isFlyViewVisible }">
        <div class="earth">
            <!-- 비행기 이미지 표시 -->
            <img src="@/assets/images/airplane-at-night-png-05032024-wcpqhoeh07ium1dp.png">
        </div>
    </div>

    <!-- SVG 지도가 렌더링될 컨테이너 -->
    <div id="svgMap" ref="map"></div>
</template>

<script>
// Vue의 필수 함수들을 가져옴
// onMounted: 컴포넌트가 마운트된 후 실행될 로직
// ref: 반응형 변수 생성을 위한 함수
import { onMounted, ref } from "vue";
// svgMap 라이브러리 및 스타일 임포트
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";

export default {
    name: "App",
    components: {},
    setup() {
        // map: SVG 지도 요소에 대한 참조
        const map = ref(null);
        // isFlyViewVisible: 비행기 애니메이션 표시 여부 제어
        const isFlyViewVisible = ref(false);

        onMounted(() => {
            // svgMap 인스턴스 생성 및 설정
            new svgMap({
                targetElementID: "svgMap",
                interactive: true, // 지도 상호작용 활성화
                mouseWheelZoomEnabled: false, // 마우스 휠 줌 비활성화
                hideFlag: false, // 국기 표시 활성화
                // 지도에 표시할 국가들 정의
                countries: {
                    US: "United States",
                    KR: "South Korea",
                },
                // 지도 데이터 설정
                data: {
                    data: {
                        // 국가별 거주자 수 표시 형식 설정
                        countresidents: {
                            format: "{0}",
                            thousandSeparator: ",",
                            thresholdMax: 50000,
                            thresholdMin: 1000,
                        },
                    },
                    applyData: "countresidents",
                    // 각 국가별 데이터 값 설정
                    values: {
                        AF: { countresidents: 587 },
                        DZ: { countresidents: 232 },
                        UA: { countresidents: 42393 },
                        US: { countresidents: 331893745 },
                        VN: { countresidents: 98500000 },
                    },
                },
                // 기본 클릭 이벤트 핸들러 (fallback용)
                onCountryClick: function (event, countryCode) {
                    console.log("클릭한 국가 (기본):", countryCode);
                },
            });

            // SVG 렌더링 후 수동으로 클릭 이벤트 추가
            setTimeout(() => {
                // 모든 국가 path 요소 선택
                const paths = document.querySelectorAll("#svgMap svg path");
                paths.forEach((path) => {
                    // 국가 코드 가져오기
                    const countryCode = path.getAttribute("data-id") || path.id;
                    if (!countryCode) return;

                    // 커서 스타일 변경
                    path.style.cursor = "pointer";

                    // 클릭 이벤트 리스너 추가
                    path.addEventListener("click", () => {
                        console.log("Country Code:", countryCode);

                        // 모든 국가 클릭시 비행기 애니메이션 표시
                        isFlyViewVisible.value = true;

                        // 3초 후 애니메이션 숨김
                        setTimeout(() => {
                            isFlyViewVisible.value = false;
                        }, 3000);
                    });
                });
            }, 500); // svgMap 렌더링 완료 대기
        });

        // 템플릿에서 사용할 변수들 반환
        return {
            map,
            isFlyViewVisible,
        };
    },
};
</script>

<style></style>