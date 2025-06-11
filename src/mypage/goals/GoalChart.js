import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './GoalChart.css'
import UpdateGoalWeightModal from './UpdateGoalWeightModal';

function GoalChart(props) {

    const [targetWeight, setTargetWeight] = useState(45);

    const goalWeightAchievementRate = targetWeight > props.userInfo.weight ?    // 목표체중이 현재체중보다 크냐 작냐에 따라(감량 or 증량)
        Math.min(100, (props.userInfo.weight / targetWeight * 100).toFixed(1)) :
        Math.min(100, (targetWeight / props.userInfo.weight * 100).toFixed(1))

    const [showModal, setShowModal] = useState(false);

    const data = {
        labels: ['남은 달성률', '목표달성률'], // 각 세그먼트의 라벨
        datasets: [
            {
                data: [(100 - goalWeightAchievementRate).toFixed(1), goalWeightAchievementRate], // 각 세그먼트의 값                
                backgroundColor: [ // 각 세그먼트의 배경색
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderColor: [ // 각 세그먼트의 테두리 색
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 0.5, // 테두리 두께
                hoverBorderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                hoverBorderWidth: 7
            }
        ]
    };

    const options = {
        responsive: true, // 반응형으로 차트 크기 조절
        plugins: {
            legend: {
                position: 'bottom', // legend 위치
                labels: {
                    padding: 30
                }
            },
            title: {
                display: true,
                text: '목표체중 달성률',
                font: {
                    size: 35,
                    family: 'SeoulNamsanM'
                },
                padding: {
                    top: 20,
                    bottom: 30
                }
            },
            tooltip: {
                enabled: true, // 툴팁 on
                callbacks: {
                    label: function (context) {

                        if (context.dataIndex === 0) {
                            return targetWeight > props.userInfo.weight ?
                                `목표까지 남은 몸무게: ${targetWeight - props.userInfo.weight}kg` :
                                `목표까지 남은 몸무게: ${props.userInfo.weight - targetWeight}kg`
                        } else if (context.dataIndex === 1) {
                            return `현재몸무게:  ${props.userInfo.weight}kg`;
                        }
                    }
                }
            },
            datalabels: {
                color: '#fff',
                formatter: function (value, context) {
                    return value + '%';  // data에 들어있는 세그먼트에 % 붙이기
                },
                font: {
                    weight: 'bold',
                    size: 16
                }
            }
        },
        cutout: '60%', // 도넛 차트의 중앙 구멍 크기
    };


    return (
        <div style={{ width: '600px', height: '400px', paddingLeft: '4rem', marginTop: '1.1rem' }} className='dnCrt'>
            <Doughnut data={data} options={options} />
            <button className='setGoalWeightButton' onClick={() => {
                setShowModal(!showModal)
            }} style={{ fontFamily: 'SeoulNamsanM' }}>목표체중 설정</button>
            {showModal && <UpdateGoalWeightModal setTargetWeight={setTargetWeight} />}
        </div>
    );
}


export default GoalChart;