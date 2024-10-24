import React, { useEffect, useState } from 'react';
import myxyData from './my_xy.json';

function Weather({ x, y }) {
  const [weatherData, setWeatherData] = useState(null);  // 날씨 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [locationName, setLocationName] = useState(''); // 우리동네 정보

  useEffect(() => {
    // JSON 파일에서 지역 정보 찾기 (fetch가 필요 없음)
    const foundLocation = myxyData.find(item => item["격자 X"] === x && item["격자 Y"] === y);
    if (foundLocation) {
      setLocationName(`${foundLocation.광역지자체} ${foundLocation.시군구}`);
    } else {
      setLocationName('알 수 없는 지역');
    }

    // 현재 날짜 계산 (기준 날짜)
    const now = new Date();
    const baseDate = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD 형식

    // 시간은 당일 오전 8시로 고정
    const baseTime = "0800";

    const serviceKey = "oNf4se0PfiBv4cx%2Bmc94gwGFgQIfUmW0DwTff3dD5uP3XYNw1kd9vN0TekbwzR4Vw4DAkBGV2k2%2FZseQMZlAsA%3D%3D";

    // 최종 API URL
    const apiUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&base_date=${baseDate}&base_time=${baseTime}&nx=${x}&ny=${y}&dataType=JSON`;

    // API 호출
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data.response.body.items.item);  // 받아온 날씨 데이터를 상태에 저장
        setLoading(false); // 로딩 상태를 false로 변경
      })
      .catch(error => {
        console.error('API 호출 중 오류 발생:', error);
        setLoading(false); // 오류 발생 시에도 로딩 상태를 false로 변경
      });
  }, [x, y]);

  const getSkyDescription = (value) => {
    switch (value) {
      case "1":
        return "맑음";
      case "3":
        return "구름많음";
      case "4":
        return "흐림";
      default:
        return "알 수 없음";
    }
  };

  const notFound = '데이터를 찾을 수 없습니다.';

  // 데이터가 아직 로딩 중일 때 로딩 메시지 표시
  if (loading) {
    return <div>날씨 데이터를 불러오는 중...</div>;
  }

  if (!weatherData) {
    return <div>{notFound}</div>;
  }

  const tmpValue = weatherData.find(item => item.category === "TMP"); // 1시간 온도
  const popValue = weatherData.find(item => item.category === "POP"); // 강수확률
  const skyValue = weatherData.find(item => item.category === "SKY"); // 하늘 상태

  return (
    <div style={{
      position: 'absolute', top: '100px', right: '100px', padding: '20px', border: '1px solid var(--pastel-red)', borderRadius: '15px'
    }}>
      <h3>오늘 우리동네 <span style={{ color: 'var(--pastel-red)' }}>{locationName}</span>의 날씨는?</h3>
      {tmpValue ? <p>기온은 <span style={{ color: 'var(--pastel-red)' }}>{tmpValue.fcstValue}℃</span> 입니다.</p> : <p>기온 {notFound}</p>}
      {popValue ? <p>강수확률은 <span style={{ color: 'var(--pastel-red)' }}>{popValue.fcstValue}%</span> 입니다.</p> : <p>강수확률 {notFound}</p>}
      {skyValue ? <p>오늘 우리동네의 하늘은 <span style={{ color: 'var(--pastel-red)' }}>{getSkyDescription(skyValue.fcstValue)}</span>입니다.</p> : <p>하늘상태 {notFound}</p>}
    </div >
  );
}

export default Weather;