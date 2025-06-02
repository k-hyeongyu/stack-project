import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // DataLabels 플러그인 임포트

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels // DataLabels 플러그인 등록
);



const ConditionChart = () => {
    // 1. 일주일치 컨디션 데이터 하드코딩
    const conditionData = [
        { date: '월', condition: '상' },
        { date: '화', condition: '중' },
        { date: '수', condition: '하' },
        { date: '목', condition: '상' },
        { date: '금', condition: '하' },
        { date: '토', condition: '상' },
        { date: '일', condition: '중' }
    ];

    // 2. 컨디션에 따른 값 매핑 (높이 조절용) 및 이모티콘, 색상 정의
    const conditionMap = {
        '상': { value: 3, emoji: '😊', color: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 1)' }, // 웃는 표정
        '중': { value: 2, emoji: '😐', color: 'rgba(255, 206, 86, 0.6)', borderColor: 'rgba(255, 206, 86, 1)' }, // 보통 표정
        '하': { value: 1, emoji: '🙁', color: 'rgba(255, 99, 132, 0.6)', borderColor: 'rgba(255, 99, 132, 1)' }  // 안좋은 표정
    };

    // 3. 그래프에 사용할 데이터 추출 및 가공
    const labels = conditionData.map(data => data.date);
    const dataValues = conditionData.map(data => conditionMap[data.condition].value);
    const backgroundColors = conditionData.map(data => conditionMap[data.condition].color);
    const borderColors = conditionData.map(data => conditionMap[data.condition].borderColor);
    const emojis = conditionData.map(data => conditionMap[data.condition].emoji);

    // 4. Chart.js에 전달할 데이터 구조
    const data = {
        labels: labels,
        datasets: [
            {
                label: '일간 컨디션',
                data: dataValues,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
            },
        ],
    };

    // 5. Chart.js 옵션 설정
    const options = {
        responsive: true,
        maintainAspectRatio: false, // 컨테이너에 맞춰 크기 조절
        scales: {
            y: {
                beginAtZero: true,
                max: 4, // 컨디션 '상' (3)보다 약간 높게 설정하여 이모티콘이 잘 보이도록
                ticks: {
                    display: false, // Y축 눈금 값 숨김
                },
                grid: {
                    display: false, // Y축 그리드 라인 숨김
                },
            },
            x: {
                
                grid: {
                    display: false, // X축 그리드 라인 숨김
                },
                ticks: {
                    color: '#28500', 
                    font: { 
                        size: 14, 
                        weight: 'bold' 
                    },
                    drawOnChartArea: false
                }
                
            },
        },
        plugins: {
            legend: {
                display: false, // 범례 숨김
            },
            tooltip: {
                callbacks: {
                    title: function (context) {
                        return context[0].label + '요일';
                    },
                    label: function (context) {
                        const conditionValue = context.raw; // 1, 2, 3 값
                        let conditionText = '';
                        let conditionEmoji = '';

                        for (const key in conditionMap) {
                            if (conditionMap[key].value === conditionValue) {
                                conditionText = key;
                                conditionEmoji = conditionMap[key].emoji;
                                break;
                            }
                        }
                        return `컨디션: ${conditionText} ${conditionEmoji}`;
                    },
                },
            },
            datalabels: { // chartjs-plugin-datalabels 설정
                formatter: function (value, context) {
                    return emojis[context.dataIndex]; // 각 막대에 해당하는 이모티콘 반환
                },
                align: 'end', // 막대 끝에 정렬 (위쪽)
                anchor: 'end', // 막대 끝에 고정
                offset: 4, // 막대에서 약간 띄우기
                font: {
                    size: 24, // 이모티콘 크기
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', maxWidth: '700px', height: '350px', margin: '0 auto', padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>일간 컨디션 그래프</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ConditionChart;