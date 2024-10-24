
const MOVIE_BASE_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=941b048397d2552b097757a3bf4c765b&targetDt=20241023';

async function getMovie() {
  try {
    const response = await fetch(MOVIE_BASE_URL);
    if (!response.ok) {
      throw new Error('오류 발생');
    }
    const data = await response.json();
    console.log(data.boxOfficeResult.dailyBoxOfficeList); 
    return data.boxOfficeResult.dailyBoxOfficeList;
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

export default getMovie;