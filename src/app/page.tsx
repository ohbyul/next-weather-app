import CurrentWeatherItem from '@/components/CurrentWeatherItem'
import RevalidateButton from '@/components/RevalidateButton'

import style from './style.module.css'

export default async function Home() {
  const cities = [
    { index: 0, path: '/weather/seoul?name=서울', name: '서울', code: 'Seoul' },
    { index: 1, path: '/weather/NYC?name=뉴욕', name: '뉴욕', code: 'NYC' },
    { index: 2, path: '/weather/london?name=런던', name: '런던', code: 'London' },
  ]

  return (
    <>
      <h1>날씨 앱</h1>
      <RevalidateButton tag="time" />
      <ul className={style.list}>
        {
          cities.map((city) => {
            return (
              <CurrentWeatherItem key={city.code} cityCode={city.code} cityName={city.name} />
            )
          })
        }
      </ul>
    </>
  )
}
