import { useEffect, useState } from 'react';
import './DietQuotes.css'

function DietQuotes(){
    const quotes = ['"음식을 약으로 삼고, 약을 음식으로 삼으세요."',
                    '"당신이 먹는 음식은 가장 안전하고 강력한 약이\n 될 수도 있고, 가장 느린 독이 될 수도 있습니다."',
                    '"당신은 당신이 먹는 음식으로 만들어집니다"',
                    '"우리 몸은 우리의 정원이고,\n 우리의 의지는 우리의 정원사입니다."',
                    '"가장 좋고 효율적인 약국은\n 당신 자신의 시스템 내에 있습니다."',
                    '"먹기 위해 사는 것이 아니라\n 살기 위해 먹어야 한다."',
                    '"당신이 무엇을 먹는지 말해 보세요.\n 그러면 당신이 어떤 사람인지 알려드리겠습니다."',
                    '"다이어트는 졌을 때 이기는 유일한 게임이다!"',
                    '"내 접시에 음식이 적을수록\n 나는 더 나은 사람이 됩니다."'
    ]

    const quotesSpeaker = ['-히포크라테스', '-앤 위그모어', '-앙텔름 브리야 사바랭', '-윌리엄 셰익스피어', '-로버트 C. 필', 
                            '-벤자민 프랭클린', '-GK 체스터튼', '-칼 라거펠트', '-엘리자베스 길버트'
                          ]

    /* const [currentQuote, setCurrentQuote] = useState(''); */

    const getRandomIndex = Math.floor(Math.random()*9);

    const getQuotes = ()=>{
        return quotes[getRandomIndex];
    }

    const getSpeaker = ()=>{
        return quotesSpeaker[getRandomIndex];
    }

    /* useEffect(()=>{  // 랜덤으로 명언 바꾸기
        setCurrentQuote(getRandomQuotes())

        const updateQuote = setInterval(()=>{
            setCurrentQuote(getRandomQuotes());
        }, 20000);

        return ()=>{
            clearInterval(updateQuote);
        }
    },[]) */

    return(
        <div className="quotesBox gowun-batang-bold">
            <div className='quotes'>            
                {getQuotes()}
            </div>
            <div className='speaker'>
                {getSpeaker()}
            </div>
        </div>
    );
}

export default DietQuotes;