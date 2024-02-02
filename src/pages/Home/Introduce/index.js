import style from './index.module.scss'

export function Introduce() {

    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.col1}>
                    <img src='https://rohtoaohalclinic.com.vn/vnt_upload/File/11_2019/rohtoaohalclinic-trang-chu.jpg'></img>
                </div>

                <div className={style.col2}>
                    <div className={style.row1}>
                        <p className={style.title}>
                            TIÊU CHUẨN NHẬT<br />
                            ĐÁNH BẬT THÂM NÁM
                        </p>
                    </div>

                    <div className={style.row2}>
                        <ul>
                            <li>Rohto Pharmaceutical có lịch sử lâu đời từ năm 1899, là tập đoàn dược mỹ phẩm hàng đầu tại Nhật Bản, có mạng lưới tại 150 quốc gia trên thế giới. Rohto-Mentholatum (Việt Nam) được thành lập từ năm 1996 và luôn nhận được sự tin dùng, ưa chuộng của khách hàng Việt Nam.</li>
                            <li>Vận dụng những kiến thức và nghiên cứu về làm đẹp và chăm sóc làn da từ Rohto Pharmaceutical, vào năm 2015, thương hiệu phòng khám ROHTO AOHAL CLINIC được thành lập tại Việt Nam dưới sự quản lý của công ty Rohto-Mentholatum (Việt Nam). ROHTO AOHAL CLINIC chuyên cung cấp các dịch vụ điều trị - chăm sóc da & thẩm mỹ không phẫu thuật với chất lượng và tiêu chuẩn Nhật Bản.</li>
                            <li>ROHTO AOHAL CLINIC tự hào là đơn vị đi đầu trong điều trị các vấn đề tăng sắc tố da (thâm, nám, tàn nhang, đồi mồi...) với công nghệ điều trị tiên tiến, đội ngũ bác sĩ giàu kinh nghiệm và kiến thức nghiên cứu y khoa từ Nhật Bản.</li>
                        </ul>
                    </div>

                    <div className={style.row3}>
                        <p className={style.title}>ROHTO AOHAL CLINIC VÀ NHỮNG CON SỐ</p>
                        <ul>
                            <li>
                                <div className={style.col}>
                                    <p className={style.number}>8</p>
                                    <p className={style.text}>Năm hoạt động tại Việt Nam</p>
                                </div>
                            </li>

                            <li>
                                <div className={style.col}>
                                    <p className={style.number}>4</p>
                                    <p className={style.text}>Chi nhánh tại HCM & HN</p>
                                </div>
                            </li>

                            <li>
                                <div className={style.col}>
                                    <p className={style.number}>10,000+</p>
                                    <p className={style.text}>Khách hàng hài lòng</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}