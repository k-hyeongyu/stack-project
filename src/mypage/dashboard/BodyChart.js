import React, { useState } from 'react';
import './BodyChart.css'
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

const BodyChart = (props) => {
    
    
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
    // monthlyDataPoints의 각 항목에서 fullLabel (예: "2025년 6월")을 추출하여 사용
    // labels 배열은 Chart.js에 전달될 X축 레이블이다
    const labels = monthlyDataPoints.map(item => item.fullLabel);


    

    // 3. Chart.js에 전달할 데이터 구조
    const data = {
        labels: labels, // labels는 여전히 전체 월 정보를 가지고 있음
        datasets: [
            {
                label: '체중 (kg)',
                data: props.weightData,
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
                    text: '',
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
                    text: '',
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
                    callback: function (value, index, ticks) {
                        // value는 labels 배열의 해당 인덱스 값 (예: "2025년 6월")
                        const currentMonthData = monthlyDataPoints[index]; // 해당 월의 상세 데이터
                        const currentMonth = currentMonthData.month;
                        const currentYear = currentMonthData.year;

                        // 다음 또는 이전 데이터 포인트가 있는 경우 해당 월의 연도를 확인
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