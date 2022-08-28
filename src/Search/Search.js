import React from 'react'
import "./Search.css"
import { BsSearch } from "react-icons/bs"


function Search() {
    return (
        <div className='Search'>
            <b className='something'>
                Nimadir qidiryapsizmi?
            </b>
            <div className='search'>
                <BsSearch className='icon' />
                <input className='web' type="text" placeholder="Sayt bo'ylab izlash" />
            </div>
            <div className='li_'>
                <ul className='li_galaxies'>
                    <li className='li_galaxy'>Galaxy Z Flip4</li>
                    <li width={"140px"} className='li_galaxy'>Galaxy Z Fold4 </li>
                    <li className='li_galaxy'>Galaxy Tab S8</li>
                    <li className='li_galaxy'>The Freestyle</li>
                    <li className='li_galaxy'>  QLED 8k </li>
                </ul>

                <br />
                <ul className='cheat'>
                    <li className='li_galaxy'>SpaceMax™</li>
                    <li className='li_galaxy'>WindFree™</li>
                </ul>

                <p className='someitem'>
                    *Flex rejimi 75° va 115° orasidagi burchaklarda qo'llab-quvvatlanadi. Google Duo va YouTube Google LLC kompaniyasining savdo belgilaridir. Ba'zi ilovalar ko'p vazifalarni qo'llab-quvvatlamasligi mumkin. UX/UI oʻzgarishi mumkin. <br />  Tasvir simulyatsiya qilingan. <br /><br /><br />

                    *Mahsulot sur'atlari faqat mahsulot bilan tanishish uchungina foydalaniladi, haqiqiy mahsulot sur'atdan farqlanishi mumkin.  <br /><br /><br />

                    *Ijodiy vizualizatsiya. Bu erda ko'rsatilgan sur'atlar faqat ko'rsatish uchun, asli ko'rinishda farqlanishi mumkin.
                </p>
            </div>
        </div>
    )
}

export default Search