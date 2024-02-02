import style from './index.module.scss'
import { ItemService } from '../../../components/ItemService'
import { useState, useRef, useEffect } from 'react';
export function Service() {
    const product = [
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/04_2022/7_1_1.jpg',
            text: 'TRIỆT LÔNG SAPPHIRE'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/09_2022/PRP-5.jpg',
            text: 'PRF - FIBRIN GIÀU TIỂU CẦU'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/03_2019/HIFU_2.jpg',
            text: 'Trẻ hóa nâng cơ Hifu Liftera'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/11_2019/bbl-thumbnail.jpg',
            text: 'ÁNH SÁNG BBL'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/lieu-trinh-laser-thumbnail.jpg',
            text: 'LASER Q-SWITCHED'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/lieu-trinh-filler-thumbnail.jpg',
            text: 'TIÊM FILLER TRẺ HÓA DA'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/botox-thumbnail.jpg',
            text: 'TIÊM BOTOX XÓA NẾP NHĂN'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/tre-hoa-bbl-laser-thumbnail.jpg',
            text: 'TRẺ HÓA ÁNH SÁNG BBL/LASER'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/10_2019/SYLFIRM_-_Thumbnail_1.jpg',
            text: 'Sylfirm - Phi Kim Vô Tuyến'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/lieu-trinh-star-forever-young.jpg',
            text: 'TRẺ HÓA DA AOHAL'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/diamond-peel-thumbnail_1.jpg',
            text: 'THANH LỌC DA DIAMOND PEEL'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/service/08_2018/thread-thumbnail.jpg',
            text: 'NÂNG CƠ CHỈ SINH HỌC'
        },
    ]


    const containerRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = (e) => {
            const position = e.currentTarget.scrollTop;;
            setScrollPosition(position)
        }

        document.getElementById("root").addEventListener('scroll', handleScroll)
        return () => {
            document.getElementById("root").removeEventListener('scroll', handleScroll)
        }
    }, []);


    useEffect(() => {

        if (scrollPosition < 800) {
            containerRef.current.style.backgroundPosition = 'center 0px'
        }
        if (scrollPosition > 800) {
            containerRef.current.style.backgroundPosition = 'center 300px'
        }
        if (scrollPosition < 1000) {
            containerRef.current.style.backgroundSize = '70%'
        }
        if (scrollPosition > 1000) {
            containerRef.current.style.backgroundSize = '100%'
            console.log(scrollPosition)
        }

    }, [scrollPosition])


    return (
        <div ref={containerRef} className={style.container}>
            <div className={style.title}>
                <p>DỊCH VỤ</p>
            </div>

            <div className={style.items}>
                {product.map((item, index) => (
                    <div key={index} className={style.item}>
                        <ItemService infor={item} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}