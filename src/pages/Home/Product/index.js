import React, { useEffect } from 'react';
import style from './index.module.scss';
import { ItemProduct } from '../../../components/ItemProduct';

export function Product() {
    const product = [
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/product/04_2020/BosanphamAOHAL_YY.png',
            title: "AOHAL SKINCARE",
            text: 'Dòng sản phẩm chăm sóc da chuyên sâu cấp ẩm và chống lão hóa ưu việt được nghiên cứu và phát triển từ Rohto Pharmaceutical Nhật Bản.'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/product/08_2018/c3.png',
            title: "MELANO CC",
            text: 'Thương hiệu dưỡng da nổi tiếng chứa Vitamin C của công ty dược - mỹ phẩm Rohto (Nhật Bản).'
        },
        {
            img: 'https://rohtoaohalclinic.com.vn/vnt_upload/product/01_2022/DNA_website_drop_shadow_72dpi.png',
            title: "D-NA",
            text: 'Là dòng sản phẩm chuyên sâu cải thiện thâm nám toàn diện với độ an toàn được kiểm duyệt và được nghiên cứu bởi Rohto Pharmaceutical Nhật Bản'
        }
    ];

    // useEffect(() => {
    //     const images = document.querySelectorAll('.img img');
    //     let maxHeight = 0;
    //     images.forEach(image => {
    //         if (image.clientHeight > maxHeight) {
    //             maxHeight = image.clientHeight;
    //         }
    //     });
    //     images.forEach(image => {
    //         image.style.height = maxHeight + 'px';
    //     });
    // }, []); // Truyền một mảng rỗng để chỉ thực hiện effect này một lần khi component mount

    return (
        <div className={style.container}>
            <div className={style.title}>
                <p>SẢN PHẨM</p>
            </div>

            <div className={style.items}>
                {product.map((item, index) => (
                    <div key={index} className={style.item}>
                        <ItemProduct infor={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
