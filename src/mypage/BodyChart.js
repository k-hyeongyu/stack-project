import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Chart.js에 필요한 컴포넌트 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const BodyChart = () => {
    // 1. 월별 레이블 생성 (데이터 자체에는 YYYY년 MM월 형식을 유지)
    // 콜백 함수에서 이 정보를 사용하여 년도 표시 여부를 결정할 것임
    const generateMonthlyDataPoints = () => {
        const dataPoints = [];
        const endDate = new Date(2025, 5, 1); // 2025년 6월 (월은 0부터 시작하므로 5)
        for (let i = 0; i < 12; i++) {
            const date = new Date(endDate);
            date.setMonth(endDate.getMonth() - i); // i개월 전으로 설정
            dataPoints.push({
                fullLabel: `${date.getFullYear()}년 ${date.getMonth() + 1}월`, // 전체 레이블
                year: date.getFullYear(),
                month: date.getMonth() + 1 // getMonth() 메서드는 0부터 시작하는 월 인덱스 (0=1월 , 11=12월)를 반환 하기 때문에 
                                           // 인간 표기로 바꾸기(+1)
            });
        }
        return dataPoints;
    };

    const monthlyDataPoints = generateMonthlyDataPoints();
    // labels 배열은 이제 'fullLabel'이 아닌, 축 콜백 함수에서 사용할 '월' 정보만 담게 됩니다.
    // 또는, 그냥 월만 포함하거나, 아예 비워두고 콜백에서 context.tick.value를 사용해도 됩니다.
    // 여기서는 콜백 함수에서 사용할 수 있도록 fullLabel을 넘겨주겠습니다.
    const labels = monthlyDataPoints.map(item => item.fullLabel);


    // 2. 체중 데이터 하드코딩 (동일)
    const generateRealisticWeightData = (weightAtOldestMonth, weightAtNewestMonth, count, fluctuationRange = 0.5) => {
        const dataChronological = []; // 시간 순서대로 데이터를 저장할 임시 배열

        let currentWeight = weightAtOldestMonth; // 가장 오래된 시점의 체중부터 시작
        dataChronological.push(parseFloat(currentWeight.toFixed(1)));

        const totalChange = weightAtNewestMonth - weightAtOldestMonth; // 총 변화량 (양수면 증가, 음수면 감소)
        const averageStep = totalChange / (count - 1); // 각 구간(월)당 평균 변화량

        for (let i = 1; i < count; i++) {
            // 무작위 변동 생성: -fluctuationRange 에서 +fluctuationRange 사이의 값
            const randomStep = (Math.random() * 2 - 1) * fluctuationRange;

            // 다음 체중 계산: 현재 체중 + 평균 변화량 + 무작위 변동
            let nextWeight = currentWeight + averageStep + randomStep;

            // 보정 범위 설정: 가장 오래된 체중과 가장 새로운 체중 사이의 실제 범위
            const actualMinWeight = Math.min(weightAtOldestMonth, weightAtNewestMonth) - fluctuationRange * 1.5;
            const actualMaxWeight = Math.max(weightAtOldestMonth, weightAtNewestMonth) + fluctuationRange * 1.5;

            nextWeight = Math.max(actualMinWeight, nextWeight); // 실제 최소값보다 낮아지지 않도록
            nextWeight = Math.min(actualMaxWeight, nextWeight); // 실제 최대값보다 높아지지 않도록

            // 마지막 데이터 포인트는 정확히 weightAtNewestMonth가 되도록 강제
            if (i === count - 1) {
                nextWeight = weightAtNewestMonth;
            }

            currentWeight = nextWeight;
            dataChronological.push(parseFloat(currentWeight.toFixed(1)));
        }

        // Chart.js의 x.reverse: true와 labels 순서에 맞추기 위해
        // 생성된 시간 순서 데이터 (oldest -> newest)를 역순으로 반환
        // (이렇게 하면 data[0]이 newestMonth 데이터, data[11]이 oldestMonth 데이터가 됨)
        return dataChronological.reverse();
    };

    // fluctuationRange 값을 조절하여 변화 폭을 변경해 보세요.
    // 0.5 ~ 0.8 사이의 값을 추천합니다. (예: 0.5kg 정도의 월별 변동)
    const weightData = generateRealisticWeightData(77, 71, 12, 0.6); // fluctuationRange를 0.6kg으로 설정


    // 3. Chart.js에 전달할 데이터 구조 (동일)
    const data = {
        labels: labels, // labels는 여전히 전체 월 정보를 가지고 있음
        datasets: [
            {
                label: '체중 (kg)',
                data: weightData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                pointBackgroundColor: 'rgb(75, 192, 192)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(75, 192, 192)',
                pointRadius: 5,
                pointHoverRadius: 8,
            },
        ],
    };

    // 4. Chart.js 옵션 설정
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                min: 68,
                max: 80,
                title: {
                    display: true,
                    text: '몸무게 (kg)',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                ticks: {
                    color: '#555',
                    callback: function (value) {
                        return value + 'kg';
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
            x: {
                reverse: true, // X축 순서를 역순으로 설정
                title: {
                    display: true,
                    text: '날짜',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                ticks: {
                    color: '#555',
                    font: {
                        size: 12,
                    },
                    // --- 이 부분 수정 ---
                    callback: function (value, index, ticks) {
                        // value는 labels 배열의 해당 인덱스 값 (예: "2025년 6월")
                        const currentMonthData = monthlyDataPoints[index]; // 해당 월의 상세 데이터
                        const currentMonth = currentMonthData.month;
                        const currentYear = currentMonthData.year;

                        // 다음 또는 이전 데이터 포인트가 있는 경우 해당 월의 연도를 확인합니다.
                        // 역순이므로, 이전 인덱스(index - 1)는 실제로는 '다음' 월입니다.
                        const nextMonthIndex = index - 1; // 다음 인덱스 = 이전 월
                        const prevMonthIndex = index + 1; // 이전 인덱스 = 다음 월

                        let showYear = false;

                        // 현재가 첫 번째 데이터 포인트이거나 (가장 최근 월)
                        // 다음 달(즉, labels 배열에서 이전 인덱스)의 년도가 현재 년도와 다를 경우
                        if (index === 0) { // 가장 오른쪽(최신) 월은 항상 년도 표시
                            showYear = true;
                        } else if (nextMonthIndex >= 0) {
                            const nextMonthData = monthlyDataPoints[nextMonthIndex];
                            if (currentYear !== nextMonthData.year) {
                                showYear = true;
                            }
                        }


                        // 만약 년도를 표시해야 하거나, 월이 1월인 경우 (새해 시작)
                        if (showYear || currentMonth === 1) {
                            return `${currentYear}년 ${currentMonth}월`;
                        } else {
                            return `${currentMonth}월`;
                        }
                    }
                    // --- 여기까지 수정 ---
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#333',
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    title: function (context) {
                        // 원래 레이블을 그대로 사용하도록 수정 (ex: 2025년 6월)
                        return context[0].label;
                    },
                    label: function (context) {
                        return `체중: ${context.raw}kg`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', maxWidth: '700px', height: '350px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>월간 체중 변화 그래프</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default BodyChart;