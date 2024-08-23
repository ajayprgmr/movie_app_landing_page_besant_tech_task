import { useState } from 'react'
import languages from '../assets/Languages.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value
    setSelectedLanguage(newLanguage)
  }

  const translations = {
    en: {
      home: 'HOME',
      movies: 'Movies',
      tvShows: 'Tv Shows',
      sports: 'Sports',
      live: 'Live',
    },
    fr: {
      home: 'ACCUEIL',
      movies: 'Films',
      tvShows: 'Séries TV',
      sports: 'Sports',
      live: 'En Direct',
    },
    de: {
      home: 'STARTSEITE',
      movies: 'Filme',
      tvShows: 'TV-Shows',
      sports: 'Sport',
      live: 'Live',
    },
    ru: {
      home: 'ДОМ',
      movies: 'Фильмы',
      tvShows: 'ТВ Шоу',
      sports: 'Спорт',
      live: 'Прямой эфир',
    },
    es: {
      home: 'INICIO',
      movies: 'Películas',
      tvShows: 'Programas de TV',
      sports: 'Deportes',
      live: 'En Vivo',
    },
    zh: {
      home: '主页',
      movies: '电影',
      tvShows: '电视节目',
      sports: '体育',
      live: '直播',
    },
  }

  const currentTranslation = translations[selectedLanguage]

  return (
    <div className='flex justify-around items-center px-10 py-5 font-medium text-xl text-slate-400 h-[6vh] shadow-2xl bg-black z-20'>
      <div>
        <Link to='/Home'>{currentTranslation.home}</Link>
      </div>
      <div className='flex gap-20 tracking-wide'>
        <Link to='/Movies'>{currentTranslation.movies}</Link>
        <Link to='/TvShows'>{currentTranslation.tvShows}</Link>
        <Link to='/sports'>{currentTranslation.sports}</Link>
        <Link to='/Live'>{currentTranslation.live}</Link>
      </div>
      <div className='bg-transparent '>
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className='bg-transparent w-40 border border-gray-500 rounded-sm'
        >
          {languages.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              className='text-center text-[1rem] text-gray-950'
            >
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Navbar
